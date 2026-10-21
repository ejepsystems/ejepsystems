import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:net';
import path from 'node:path';
import os from 'node:os';
import { once } from 'node:events';
import { createStarterFiles, createZip, accentText } from '../packages/project-foundation/src/starter.mjs';

const manifest = JSON.parse(await readFile(new URL('../templates/project/project.json', import.meta.url), 'utf8'));
async function freePort(){const server=createServer();server.listen(0,'127.0.0.1');await once(server,'listening');const port=server.address().port;await new Promise(resolve=>server.close(resolve));return port;}
test('ZIP round trip preserves Unicode bytes, paths and checksums', async()=>{
  const files=createStarterFiles({...manifest,brand:{name:'Élite & Co',accent:'#FFFFFF'}},{tagline:'Ideas <script>alert(1)</script>'});
  assert.match(files['apps/web/index.html'],/Élite &amp; Co/);
  assert.match(files['apps/web/index.html'],/&lt;script&gt;/);
  assert.equal(accentText('#FFFFFF'),'#0A0B0D'); assert.equal(accentText('#000000'),'#FFFFFF');
  assert.throws(()=>createZip({'../escape':'bad'},'project'),/Unsafe/);
  const temp=await mkdtemp(path.join(os.tmpdir(),'starter-zip-'));
  try{
    const zip=path.join(temp,'starter.zip');await writeFile(zip,createZip(files,manifest.slug));
    const result=spawnSync('python3',['-c','import zipfile,json,sys; z=zipfile.ZipFile(sys.argv[1]); assert z.testzip() is None; print(json.dumps({n:z.read(n).decode("utf-8") for n in z.namelist()}))',zip],{encoding:'utf8'});
    assert.equal(result.status,0,result.stderr); const decoded=JSON.parse(result.stdout);
    for(const [name,content] of Object.entries(files))assert.equal(decoded[manifest.slug+'/'+name],content);
  }finally{await rm(temp,{recursive:true,force:true});}
});
test('generated all-module starter runs isolated shells and rejects source exposure and writes',async()=>{
  const temp=await mkdtemp(path.join(os.tmpdir(),'starter-runtime-'));
  const files=createStarterFiles({...manifest,modules:{web:true,app:true,admin:true,api:true}});
  for(const [name,content] of Object.entries(files)){const dest=path.join(temp,name);await mkdir(path.dirname(dest),{recursive:true});await writeFile(dest,content);}
  const ports={};for(const role of ['WEB','APP','ADMIN','API']){do{ports[role+'_PORT']=String(await freePort());}while(Object.entries(ports).some(([key,value])=>key!==role+'_PORT'&&value===ports[role+'_PORT']));}
  const child=spawn(process.execPath,['scripts/dev.mjs'],{cwd:temp,env:{...process.env,...ports},stdio:['ignore','pipe','pipe']});
  let logs='';child.stderr.on('data',data=>logs+=data);
  try{
    await new Promise((resolve,reject)=>{let output='';const timeout=setTimeout(()=>reject(Error('Startup timeout '+logs)),5000);child.stdout.on('data',data=>{output+=data;if(output.split('http://').length===5){clearTimeout(timeout);resolve();}});child.once('error',reject);child.once('exit',code=>reject(Error('Early exit '+code+' '+logs)));});
    for(const role of ['WEB','APP','ADMIN']){
      const base='http://127.0.0.1:'+ports[role+'_PORT'];
      const page=await fetch(base);assert.equal(page.status,200);assert.match(await page.text(),new RegExp(role.toLowerCase()+' / development'));
      assert.equal((await fetch(base+'/shared/theme.css')).status,200);
      assert.equal((await fetch(base+'/shared/components.mjs')).status,200);
      for(const url of ['/project.json','/scripts/dev.mjs','/package.json','/.env.example','/shared/../project.json'])assert.equal((await fetch(base+url)).status,404,url);
      assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
      assert.equal(page.headers.get('x-content-type-options'),'nosniff');
    }
    const api='http://127.0.0.1:'+ports.API_PORT;
    assert.equal((await (await fetch(api+'/health')).json()).status,'ok');
    assert.deepEqual((await (await fetch(api+'/v1/project')).json()).modules,{web:true,app:true,admin:true,api:true});
    assert.equal((await fetch(api+'/health',{method:'POST'})).status,405);
    assert.equal((await fetch(api+'/missing')).status,404);
    assert.equal((await fetch(api+'/health',{method:'HEAD'})).headers.get('content-type'),'application/json');
  }finally{child.kill('SIGTERM');await once(child,'exit');await rm(temp,{recursive:true,force:true});}
});
test('every module combination emits valid runtime and browser scripts',()=>{
  for(let mask=1;mask<16;mask++){
    const modules=Object.fromEntries(['web','app','admin','api'].map((role,i)=>[role,Boolean(mask&(1<<i))]));
    const files=createStarterFiles({...manifest,modules});
    for(const name of ['scripts/dev.mjs','packages/ui/components.mjs']){
      const result=spawnSync(process.execPath,['--input-type=module','--check'],{input:files[name],encoding:'utf8'});assert.equal(result.status,0,result.stderr);
    }
  }
});
