import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, readdir, rm, symlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createProject } from './create-project.mjs';
import { validateManifest } from '../packages/project-foundation/src/manifest.mjs';

const config = JSON.parse(await readFile(new URL('../templates/project/project.json', import.meta.url), 'utf8'));
test('rejects unsafe, ambiguous and unsupported project inputs', () => {
  for (const patch of [{ slug: '../escape' }, { slug: 'bad/name' }, { brand: { name: 'Bad\nname', accent: '#335CFF' } }, { brand: { name: 'Name', accent: 'red;}' } }, { modules: { ...config.modules, unknown: true } }, { modules: { web: false, app: false, admin: false, api: false } }, { foundationVersion: '9' }]) assert.throws(() => validateManifest({ ...config, ...patch }));
});
test('all module combinations generate only selected roles and refuse overwrites', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'foundation-test-'));
  try {
    for (let mask = 1; mask < 16; mask++) {
      const modules = Object.fromEntries(['web', 'app', 'admin', 'api'].map((key, i) => [key, Boolean(mask & (1 << i))]));
      const destination = path.join(root, `case-${mask}`);
      await createProject({ ...config, modules }, destination);
      assert.deepEqual((await readdir(path.join(destination, 'apps'))).sort(), Object.keys(modules).filter(key => modules[key]).sort());
      assert.deepEqual(JSON.parse(await readFile(path.join(destination, 'project.json'), 'utf8')).modules, modules);
      await assert.rejects(createProject(config, destination), { code: 'EEXIST' });
      assert.match(await readFile(path.join(destination, 'README.md'), 'utf8'), /Planning scaffold only/);
    }
  } finally { await rm(root, { recursive: true, force: true }); }
});
test('rejects repository destinations including parent symlink aliases', async () => {
  const repo = new URL('../', import.meta.url);
  await assert.rejects(createProject(config, new URL('forbidden-output', repo).pathname), /outside/);
  const root = await mkdtemp(path.join(os.tmpdir(), 'foundation-symlink-'));
  try {
    await symlink(repo.pathname, path.join(root, 'alias'), 'dir');
    await assert.rejects(createProject(config, path.join(root, 'alias', 'forbidden-output')), /outside/);
  } finally { await rm(root, { recursive: true, force: true }); }
});
