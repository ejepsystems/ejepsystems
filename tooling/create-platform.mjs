#!/usr/bin/env node
/**
 * Pectrium starter generator v0.1.
 * Deliberately supports only the validated corporate template and web module.
 * No shell execution, secret copying, or external network requests.
 */
import { mkdir, readFile, readdir, writeFile, access } from "node:fs/promises";
import { join, resolve, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const source = resolve(dirname(fileURLToPath(import.meta.url)), "../templates/corporate");
const usage = "Usage: pnpm create:platform --name \"Example Company\" --slug example-company --color '#243B53' --output ./generated/example-company";
const args = Object.fromEntries(process.argv.slice(2).reduce((out, item, i, arr) => {
  if (item.startsWith("--") && arr[i+1] && !arr[i+1].startsWith("--")) out.push([item.slice(2),arr[i+1]]);
  return out;
}, []));
const name = args.name?.trim();
const slug = args.slug?.trim();
const color = args.color || "#111111";
const template = args.template || "corporate";
if (!name || name.length > 72 || !/^[\p{L}\p{N}][\p{L}\p{N} .&'-]*$/u.test(name)) throw new Error("Provide a valid --name (1–72 characters).\n"+usage);
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("Provide a lowercase kebab-case --slug.\n"+usage);
if (!/^#[0-9a-fA-F]{6}$/.test(color)) throw new Error("--color must be a six-digit hexadecimal color.");
if (template !== "corporate") throw new Error("Only the corporate starter is implemented and validated.");
const output = resolve(args.output || join("generated",slug));
const cwd = resolve(process.cwd());
const rel = relative(cwd,output);
if (!rel || rel.startsWith(".."+sep) || rel === ".." || rel.startsWith("apps"+sep) || rel.startsWith("packages"+sep) || rel.startsWith("templates"+sep) || rel.startsWith("tooling"+sep)) throw new Error("Output must be a new directory inside the repository, outside source folders.");
try { await access(output); throw new Error("Output already exists. Refusing to overwrite: "+output); } catch (e) { if (e.code !== "ENOENT") throw e; }
const replacements = {"__PROJECT_NAME__":name,"__PROJECT_SLUG__":slug,"__BRAND_COLOR__":color};
async function copyDirectory(src,dst) {
  await mkdir(dst,{recursive:true});
  for (const entry of await readdir(src,{withFileTypes:true})) {
    if (entry.isSymbolicLink()) throw new Error("Template symlinks are not allowed.");
    const from=join(src,entry.name),to=join(dst,entry.name.replace(/\.template$/,""));
    if (entry.isDirectory()) await copyDirectory(from,to);
    else if (entry.isFile()) {
      let contents=await readFile(from,"utf8");
      for (const [token,value] of Object.entries(replacements)) contents=contents.replaceAll(token,value);
      await writeFile(to,contents,{flag:"wx"});
    }
  }
}
await copyDirectory(source,output);
console.log("Created "+output);
console.log("Next: cd "+relative(cwd,output)+" && corepack pnpm install && corepack pnpm lint && corepack pnpm build");
