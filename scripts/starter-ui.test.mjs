import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { defaultConfig, generateFiles, validate, slugify, createZip } from '../apps/starter/dist/generator.js';

test('browser form adapter matches selections, identity and source generator',async()=>{
  for(let mask=1;mask<16;mask++){
    const modules=['web','app','admin','api'].filter((_,i)=>mask&(1<<i));
    const config={...defaultConfig,name:'Élite / project',brand:'Élite & Company',modules};
    assert.equal(validate(config),'');
    const files=generateFiles(config),manifest=JSON.parse(files['project.json']);
    assert.equal(manifest.slug,'elite-project');assert.equal(manifest.brand.name,config.brand);
    for(const role of ['web','app','admin','api'])assert.equal(Object.keys(files).some(file=>file.startsWith('apps/'+role+'/')),modules.includes(role));
    assert.equal(createZip(files,manifest.slug).type,'application/zip');
  }
  assert.match(validate({...defaultConfig,modules:[]}),/at least one/);
  assert.match(validate({...defaultConfig,color:'#oops'}),/hex/);
  assert.ok(validate({...defaultConfig,modules:['unknown']}));
  assert.ok(validate({...defaultConfig,brand:'<script>'}));
  assert.equal(slugify('123 Project'),'project-123-project');
  const built=await readFile(new URL('../apps/starter/dist/foundation/starter.mjs',import.meta.url),'utf8');
  assert.equal(built,await readFile(new URL('../packages/project-foundation/src/starter.mjs',import.meta.url),'utf8'));
});
test('browser entrypoint syntax is valid and local imports are included',async()=>{
  const source=await readFile(new URL('../apps/starter/dist/app.js',import.meta.url),'utf8');
  const result=spawnSync(process.execPath,['--input-type=module','--check'],{input:source,encoding:'utf8'});assert.equal(result.status,0,result.stderr);
  for(const match of source.matchAll(/from '(\.\/[^']+)'/g))await readFile(new URL('../apps/starter/dist/'+match[1].slice(2),import.meta.url));
});
