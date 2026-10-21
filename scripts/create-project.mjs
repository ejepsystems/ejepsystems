import { readFile, mkdir, writeFile, realpath, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateManifest } from '../packages/project-foundation/src/manifest.mjs';
import { createStarterFiles } from '../packages/project-foundation/src/starter.mjs';

const repositoryRoot = await realpath(fileURLToPath(new URL('../', import.meta.url)));

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
    for (const [file, content] of Object.entries(createStarterFiles(manifest))) {
      await mkdir(path.dirname(path.join(target, file)), { recursive: true });
      await writeFile(path.join(target, file), content);
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
    console.log(`Created runnable local starter: ${await createProject(input, args[3])}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
