import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
const root=resolve(import.meta.dirname,"..");
const base=join(root,"generated");
await import("node:fs/promises").then(fs=>fs.mkdir(base,{recursive:true}));
const temp=await mkdtemp(join(base,"starter-test-"));
test("generates isolated branded multi-page corporate starter",async()=>{
  const output=join(temp,"acme");
  const result=spawnSync(process.execPath,[join(root,"tooling/create-platform.mjs"),"--name","Acme Systems","--slug","acme-systems","--color","#243B53","--output",output],{cwd:root,encoding:"utf8"});
  assert.equal(result.status,0,result.stderr);
  assert.match(await readFile(join(output,"app/page.tsx"),"utf8"),/Acme Systems/);
  assert.match(await readFile(join(output,"app/globals.css"),"utf8"),/#243B53/);
  assert.equal((await stat(join(output,"app/company/page.tsx"))).isFile(),true);
  assert.equal((await stat(join(output,"app/services/page.tsx"))).isFile(),true);
  assert.equal((await stat(join(output,"app/contact/page.tsx"))).isFile(),true);
  const repeat=spawnSync(process.execPath,[join(root,"tooling/create-platform.mjs"),"--name","Acme Systems","--slug","acme-systems","--output",output],{cwd:root,encoding:"utf8"});
  assert.notEqual(repeat.status,0,"must refuse overwrite");
});
test("rejects traversal and invalid brand colors",()=>{
  const badPath=spawnSync(process.execPath,[join(root,"tooling/create-platform.mjs"),"--name","Acme","--slug","acme","--output","../escape"],{cwd:root,encoding:"utf8"});
  assert.notEqual(badPath.status,0);
  const badColor=spawnSync(process.execPath,[join(root,"tooling/create-platform.mjs"),"--name","Acme","--slug","acme","--color","red;rm -rf /"],{cwd:root,encoding:"utf8"});
  assert.notEqual(badColor.status,0);
});
test.after(async()=>{await rm(temp,{recursive:true,force:true});});
