import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { validateManifest } from '../packages/project-foundation/src/manifest.mjs';

const read = relative => readFile(new URL(`../${relative}`, import.meta.url), 'utf8');
validateManifest(JSON.parse(await read('templates/project/project.json')));
const policy = JSON.parse(await read('infrastructure/environments/policy.json'));
assert.equal(policy.status, 'declaration-only');
assert.equal(policy.isolation, 'per-project-per-environment');
for (const env of ['development', 'preview']) {
  assert.equal(policy.environments[env].productionCredentials, false);
  assert.equal(policy.environments[env].data, 'synthetic');
}
assert.equal(policy.environments.preview.access, 'protected');
for (const key of ['deploymentApproval', 'verifiedRevision', 'rollbackRequired']) assert.equal(policy.environments.production[key], true);
assert.equal(policy.runtime.crossProjectAccess, false);
assert.equal(policy.runtime.networkDefault, 'deny');
assert.equal(policy.logging.secrets, false);
assert.equal(policy.logging.personalDataDefault, 'redact');
const css = await read('packages/ui/src/tokens.css');
function luminance(hex) {
  const rgb = hex.match(/[a-f0-9]{2}/gi).map(value => parseInt(value, 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
for (const [theme, block] of [['light', css.split('[data-theme="dark"]')[0]], ['dark', css.split('[data-theme="dark"]')[1]]]) {
  assert.ok(block, `Missing ${theme} tokens`);
  const tokens = Object.fromEntries([...block.matchAll(/(--jz-[\w-]+):\s*(#[\da-f]{6})\s*;/gi)].map(match => [match[1], match[2]]));
  for (const [foreground, background] of [['ink', 'canvas'], ['muted', 'canvas'], ['on-accent', 'accent'], ['success', 'surface'], ['warning', 'surface'], ['danger', 'surface']]) {
    assert.ok(tokens[`--jz-${foreground}`] && tokens[`--jz-${background}`]);
    const values = [luminance(tokens[`--jz-${foreground}`]), luminance(tokens[`--jz-${background}`])].sort((a,b) => b-a);
    const ratio = (values[0] + 0.05) / (values[1] + 0.05);
    assert.ok(ratio >= 4.5, `${theme} ${foreground}/${background}: ${ratio.toFixed(2)} fails 4.5:1`);
    console.log(`${theme} ${foreground}/${background}: ${ratio.toFixed(2)}:1`);
  }
}
console.log('Foundation manifest, declared isolation policy, and selected contrast pairs passed. Provider enforcement and full accessibility remain separate checks.');
