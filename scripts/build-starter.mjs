import { cp, mkdir, rm } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const destination = new URL('apps/starter/dist/', root);
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(new URL('apps/starter/public/', root), destination, { recursive: true });
await mkdir(new URL('foundation/', destination), { recursive: true });
for (const file of ['manifest.mjs', 'starter.mjs']) await cp(new URL('packages/project-foundation/src/' + file, root), new URL('foundation/' + file, destination));
console.log('Built apps/starter/dist from the shared foundation source.');
