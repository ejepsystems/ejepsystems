#!/usr/bin/env node
/**
 * Local-only Pectrium Template Studio.
 * No public network binding, authentication, or deployment functionality.
 */
import http from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { spawn } from "node:child_process";
const here=dirname(fileURLToPath(import.meta.url));
const root=resolve(here,"..");
const port=Number(process.env.PECTRIUM_STUDIO_PORT||4317);
if(!Number.isInteger(port)||port<1024||port>65535) throw new Error("Invalid studio port");
const html=await readFile(join(here,"studio/index.html"),"utf8");
const server=http.createServer(async(req,res)=>{
 const send=(code,body,type="application/json")=>{res.writeHead(code,{"Content-Type":type,"Cache-Control":"no-store","X-Content-Type-Options":"nosniff","Content-Security-Policy":"default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; base-uri 'none'; form-action 'self'"});res.end(body);};
 if(req.method==="GET"&&req.url==="/")return send(200,html,"text/html; charset=utf-8");
 if(req.method!=="POST"||req.url!=="/generate")return send(404,JSON.stringify({error:"Not found"}));
 if(req.headers.origin && req.headers.origin!==`http://127.0.0.1:${port}`)return send(403,JSON.stringify({error:"Origin rejected"}));
 let raw="";
 for await(const chunk of req){raw+=chunk;if(raw.length>4096)return send(413,JSON.stringify({error:"Request too large"}));}
 let data;try{data=JSON.parse(raw)}catch{return send(400,JSON.stringify({error:"Invalid JSON"}))}
 const {name,slug,color,template}=data??{};
 if(typeof name!=="string"||typeof slug!=="string"||typeof color!=="string"||template!=="corporate")return send(400,JSON.stringify({error:"Invalid configuration"}));
 const args=[join(here,"create-platform.mjs"),"--name",name,"--slug",slug,"--color",color,"--template","corporate"];
 const child=spawn(process.execPath,args,{cwd:root,env:{...process.env},stdio:["ignore","pipe","pipe"]});
 let out="",err="";child.stdout.on("data",c=>out+=c.toString().slice(0,1000));child.stderr.on("data",c=>err+=c.toString().slice(0,1000));
 child.on("error",()=>send(500,JSON.stringify({error:"Generator unavailable"})));
 child.on("close",code=>send(code===0?201:400,JSON.stringify(code===0?{message:"Project generated locally",path:`generated/${slug}`}:{error:err.slice(0,600)||"Generation failed"})));
});
server.listen(port,"127.0.0.1",()=>console.log(`Pectrium Template Studio (local only): http://127.0.0.1:${port}`));
