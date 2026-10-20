import { readFile, mkdir, writeFile, realpath, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateManifest, moduleNames } from '../packages/project-foundation/src/manifest.mjs';

const repositoryRoot = await realpath(fileURLToPath(new URL('../', import.meta.url)));
const roles = {
  web: 'Public product or company experience. Publish only verified content. Corporate sites must not grow customer-account or checkout features.',
  app: 'Primary interactive product experience. Implement authentication and per-resource authorization only when required by the product.',
  admin: 'Restricted product operations. Requires server-side authorization and audit events before any operational use.',
  api: 'Optional independent API. Define contracts, validated inputs, authorization, pagination, errors and idempotency before use.'
};

export async function createProject(input, destination) {
  const manifest = validateManifest(input);
  const absolute = path.resolve(destination);
  // Resolve the existing parent to defeat symlink aliases into the foundation repository.
  const parent = await realpath(path.dirname(absolute));
  const target = path.join(parent, path.basename(absolute));
  const relative = path.relative(repositoryRoot, target);
  if (!relative || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative))) throw new Error('Output must be outside the foundation repository');
  await mkdir(target); // Exclusive: never overwrite an existing destination.
  try {
    await writeFile(path.join(target, 'project.json'), JSON.stringify(manifest, null, 2) + '\n');
    await mkdir(path.join(target, 'packages/brand'), { recursive: true });
    await writeFile(path.join(target, 'packages/brand/theme.css'), `:root { --project-accent: ${manifest.brand.accent}; }\n`);
    await writeFile(path.join(target, 'README.md'), `# ${manifest.slug}\n\nFoundation ${manifest.foundationVersion}. Planning scaffold only; application modules are not implemented. See project.json for the plain-text brand name.\n\nNext: implement selected modules, verify accessible brand contrast, install product-specific dependencies, configure isolated environments, and pass release checks.\n`);
    for (const module of moduleNames.filter(key => manifest.modules[key])) {
      await mkdir(path.join(target, 'apps', module), { recursive: true });
      await writeFile(path.join(target, 'apps', module, 'README.md'), `# ${module}\n\n${roles[module]}\n\nStatus: Architecture. No running service, credentials, or provider integration is generated.\n`);
    }
    return target;
  } catch (error) {
    await rm(target, { recursive: true, force: true });
    throw error;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.length !== 4 || args[0] !== '--config' || args[2] !== '--out') throw new Error('Usage: node scripts/create-project.mjs --config manifest.json --out /existing-parent/new-folder');
    const input = JSON.parse(await readFile(args[1], 'utf8'));
    console.log(`Created planning scaffold: ${await createProject(input, args[3])}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
