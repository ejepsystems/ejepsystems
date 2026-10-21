import { foundationVersion, validateManifest } from './foundation/manifest.mjs';
import { createStarterFiles, createZip as zipBytes } from './foundation/starter.mjs';

export const defaultConfig = { name: 'New Project', brand: 'New Project', tagline: 'A new idea. A strong foundation.', color: '#335CFF', modules: ['web', 'app', 'admin'] };
export const moduleInfo = {
  web: { label: 'Web', port: ':3100', description: 'Public presentation' },
  app: { label: 'App', port: ':3101', description: 'Local launch checklist' },
  admin: { label: 'Admin', port: ':3102', description: 'Local theme inspector' },
  api: { label: 'API', port: ':3103', description: 'Read-only local endpoints' }
};
export function slugify(value) {
  const slug = String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 56).replace(/-+$/, '');
  return /^[a-z]/.test(slug) ? slug : 'project' + (slug ? '-' + slug : '');
}
function toManifest(config) {
  if (!config || typeof config.name !== 'string' || !config.name.trim() || config.name.length > 64 || /[\r\n\x00-\x1f<>]/.test(config.name)) throw new Error('Enter a plain-text project name, up to 64 characters.');
  if (!Array.isArray(config.modules) || config.modules.some(role => !Object.hasOwn(moduleInfo, role)) || new Set(config.modules).size !== config.modules.length) throw new Error('Choose valid project modules.');
  return validateManifest({ schemaVersion: 1, foundationVersion, slug: slugify(config.name), brand: { name: config.brand, accent: config.color }, modules: Object.fromEntries(Object.keys(moduleInfo).map(role => [role, config.modules.includes(role)])) });
}
export function validate(config) {
  try { toManifest(config); if(typeof config.tagline !== 'string' || config.tagline.length > 120 || /[\r\n\x00-\x1f]/.test(config.tagline)) throw new Error('Use a one-line tagline, up to 120 characters.'); return ''; }
  catch(error) { return error.message; }
}
export function generateFiles(config) {
  const problem = validate(config);
  if(problem) throw new Error(problem);
  return { ...createStarterFiles(toManifest(config), { tagline: config.tagline.trim() }), 'starter.recipe.json': JSON.stringify(config, null, 2) + '\n' };
}
export function createZip(files, root) { return new Blob([zipBytes(files, root)], { type: 'application/zip' }); }
