export const foundationVersion = '0.1.0';
export const moduleNames = Object.freeze(['web', 'app', 'admin', 'api']);

export function validateManifest(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Manifest must be an object');
  const allowed = ['schemaVersion', 'foundationVersion', 'slug', 'brand', 'modules'];
  if (Object.keys(input).some(key => !allowed.includes(key))) throw new Error('Unknown manifest field');
  if (input.schemaVersion !== 1 || input.foundationVersion !== foundationVersion) throw new Error('Unsupported manifest version');
  if (typeof input.slug !== 'string' || !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(input.slug) || input.slug.length > 64) throw new Error('Use a lowercase kebab-case slug, up to 64 characters');
  const brand = input.brand;
  if (!brand || typeof brand !== 'object' || Array.isArray(brand) || Object.keys(brand).some(key => !['name', 'accent'].includes(key))) throw new Error('Invalid brand fields');
  if (typeof brand.name !== 'string' || !brand.name.trim() || brand.name.length > 100 || /[\r\n\x00-\x1f<>]/.test(brand.name)) throw new Error('Brand name must be one plain-text line, up to 100 characters');
  if (typeof brand.accent !== 'string' || !/^#[0-9a-f]{6}$/i.test(brand.accent)) throw new Error('Accent must be a six-digit hex color');
  if (!input.modules || typeof input.modules !== 'object' || Array.isArray(input.modules)) throw new Error('Modules must be an object');
  if (Object.keys(input.modules).length !== moduleNames.length || moduleNames.some(key => typeof input.modules[key] !== 'boolean') || Object.keys(input.modules).some(key => !moduleNames.includes(key))) throw new Error('Explicitly select each of web, app, admin and api');
  if (!moduleNames.some(key => input.modules[key])) throw new Error('Choose at least one module');
  return { schemaVersion: 1, foundationVersion, slug: input.slug, brand: { name: brand.name.trim(), accent: brand.accent.toUpperCase() }, modules: Object.fromEntries(moduleNames.map(key => [key, input.modules[key]])) };
}
