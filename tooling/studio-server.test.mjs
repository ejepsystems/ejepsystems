import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { rm } from "node:fs/promises";
import { join, resolve } from "node:path";
const root=resolve(import.meta.dirname,"..");
const port=45319;
const base=`http://127.0.0.1:${port}`;
const slug="studio-smoke-validation";
const output=join(root,"generated",slug);
const server=spawn(process.execPath,[join(root,"tooling/studio-server.mjs")],{cwd:root,env:{...process.env,PECTRIUM_STUDIO_PORT:String(port)},stdio:"ignore"});
async function ready(){
 for(let i=0;i<50;i++){try{const r=await fetch(base);if(r.ok)return;}catch{}await new Promise(r=>setTimeout(r,100));}
 throw new Error("Studio did not start");
}
test("local Studio serves UI, rejects invalid input, and generates a project",async()=>{
 await ready();
 const page=await fetch(base);assert.equal(page.status,200);assert.match(await page.text(),/Template Studio/);
 const headers={"Content-Type":"application/json","Origin":base};
 const invalid=await fetch(base+"/generate",{method:"POST",headers,body:JSON.stringify({name:"Bad",slug:"../../escape",color:"#000000",template:"corporate"})});
 assert.equal(invalid.status,400);
 const crossOrigin=await fetch(base+"/generate",{method:"POST",headers:{"Content-Type":"application/json","Origin":"https://attacker.invalid"},body:"{}"});
 assert.equal(crossOrigin.status,403);
 const payload=JSON.stringify({name:"Studio Smoke",slug,color:"#243B53",template:"corporate"});
 const ok=await fetch(base+"/generate",{method:"POST",headers,body:payload});
 assert.equal(ok.status,201,await ok.text());
 const repeat=await fetch(base+"/generate",{method:"POST",headers,body:payload});
 assert.equal(repeat.status,400);
});
test.after(async()=>{server.kill();await rm(output,{recursive:true,force:true});});
