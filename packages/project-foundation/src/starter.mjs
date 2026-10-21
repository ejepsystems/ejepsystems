import { validateManifest, moduleNames } from './manifest.mjs';

export function accentText(hex) {
  const channels = hex.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4);
  const luminance = channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  return luminance > .179 ? '#0A0B0D' : '#FFFFFF';
}
const escape = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function createStarterFiles(input, { tagline = '' } = {}) {
  const config = validateManifest(input);
  if (typeof tagline !== 'string' || tagline.length > 120 || /[\r\n\x00-\x1f]/.test(tagline)) throw new Error('Tagline must be one line, up to 120 characters');
  const selected = moduleNames.filter(role => config.modules[role]);
  const brand = escape(config.brand.name);
  const json = data => JSON.stringify(data, null, 2) + '\n';
  const files = {
    'project.json': json(config),
    'package.json': json({ name: config.slug, version: '0.1.0', private: true, type: 'module', engines: { node: '>=22' }, scripts: { dev: 'node scripts/dev.mjs', check: 'node --check scripts/dev.mjs' } }),
    '.gitignore': 'node_modules/\n.env\n.env.*\n!.env.example\n.DS_Store\n',
    '.env.example': '# No credentials are required. Optional port overrides are read from the process environment.\nWEB_PORT=3100\nAPP_PORT=3101\nADMIN_PORT=3102\nAPI_PORT=3103\n',
    'README.md': `# ${config.slug}\n\nRunnable local foundation ${config.foundationVersion}. Requires Node.js 22 or later; no package installation or service credentials.\n\n## Run\n\nExtract this folder, open a terminal here, and run:\n\n\`\`\`sh\nnpm run dev\n\`\`\`\n\n${selected.map(role => `- ${role}: http://127.0.0.1:${3100 + moduleNames.indexOf(role)}${role === 'api' ? '/health' : ''}`).join('\n')}\n\nEach selected module has its own localhost server. Optional port overrides use environment variables (WEB_PORT, APP_PORT, ADMIN_PORT, API_PORT); .env.example is documentation and is not automatically loaded.\n\nWeb is the public presentation shell. App provides a browser-local launch checklist. Admin provides a browser-local theme inspector. API exposes read-only health and project metadata. These are working development shells, not finished products.\n\n## Before deployment\n\nApp and admin have no authentication and must stay local. Implement server-side authorization, environment separation, data contracts, sanitized logging, and protected previews before any operational use. No database, billing, customer accounts, external network integration, or production deployment is included.\n\nBrand details are in project.json and packages/ui/theme.css. Browser-only checklist/theme changes stay in local storage and do not modify source files. The server deliberately exposes only each module's HTML and shared UI assets.\n\nNext: review docs/SETUP.md and replace the shells with product-specific features.\n`,
    'docs/SETUP.md': '# Implementation checklist\n\n- [ ] Confirm product purpose, owner, and module boundaries.\n- [ ] Review brand and truthful public copy.\n- [ ] Implement product features with the chosen application framework.\n- [ ] Add authentication and per-resource authorization where required.\n- [ ] Provision isolated development, preview, and production resources.\n- [ ] Protect previews; keep secrets outside source control.\n- [ ] Validate keyboard, mobile, reduced motion, loading and errors.\n- [ ] Add feature tests, health monitoring, and a rollback plan.\n\nNo provider resources have been provisioned by this generator.\n',
    'packages/ui/theme.css': `:root{--accent:${config.brand.accent};--on-accent:${accentText(config.brand.accent)};--canvas:#f4f4f0;--surface:#fff;--ink:#0a0b0d;--muted:#5d6168;--line:#c9cbd0;--radius:12px;font-family:Arial,sans-serif;color:var(--ink);background:var(--canvas)}*{box-sizing:border-box}body{margin:0}main,header,footer{width:min(100% - 40px,1040px);margin:auto}header{padding:24px 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}main{padding:64px 0}h1{font-size:clamp(32px,6vw,64px);font-weight:500;line-height:1.08;letter-spacing:-.05em;max-width:780px}h2{font-size:24px;font-weight:500}p{max-width:66ch;line-height:1.65;color:var(--muted)}a{color:inherit}button,.action{font:inherit;min-height:44px;border-radius:8px;border:1px solid var(--line);padding:12px 18px;background:var(--accent);color:var(--on-accent);text-decoration:none;display:inline-block}button{cursor:pointer}input{font:inherit;min-height:44px}input[type=checkbox]{width:20px;min-height:20px;accent-color:var(--accent)}label{display:flex;align-items:center;gap:12px;padding:14px 0}section{margin:32px 0;padding:24px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius)}footer{padding:24px 0;border-top:1px solid var(--line);color:var(--muted);font-size:14px}:focus-visible{outline:3px solid var(--accent);outline-offset:4px}code{overflow-wrap:anywhere}.eyebrow{font:12px ui-monospace,monospace;text-transform:uppercase;letter-spacing:.1em}body.compact main{padding-top:24px}body.compact section{padding:16px}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}\n`,
    'packages/ui/components.mjs': `// Shared browser behavior; data is confined to this browser and origin.\nconst key = ${JSON.stringify(config.slug)};\nconst status = document.querySelector('[data-status]');\nlet stored = {};\ntry { stored = JSON.parse(localStorage.getItem(key) || '{}'); } catch {}\nif(!stored || typeof stored !== 'object' || Array.isArray(stored)) stored = {};\nfunction save() { try { localStorage.setItem(key, JSON.stringify(stored)); return true; } catch { if(status) status.textContent = 'Browser storage is unavailable; this change lasts for the current page only.'; return false; } }\nfor (const box of document.querySelectorAll('[data-task]')) { box.checked = stored[box.dataset.task] === true; box.addEventListener('change', () => { stored[box.dataset.task] = box.checked; if(save() && status) status.textContent = 'Checklist saved in this browser.'; }); }\nconst density = document.querySelector('[data-density]');\nif(density) { const apply = () => { document.body.classList.toggle('compact', stored.compact === true); density.setAttribute('aria-pressed', String(stored.compact === true)); }; apply(); density.addEventListener('click', () => { stored.compact = !stored.compact; apply(); if(save() && status) status.textContent = 'Layout preference saved in this browser.'; }); }\n`,
    'scripts/dev.mjs': runtimeSource()
  };
  for (const role of selected) {
    if (role === 'api') {
      files['apps/api/README.md'] = '# API development shell\n\nGET /health and GET /v1/project are read-only local endpoints. No writes, authentication, database, or CORS access is enabled.\n';
      continue;
    }
    const body = role === 'web'
      ? `<p class="eyebrow">Local development · web</p><h1>${brand}.<br>A foundation for what comes next.</h1><p>${tagline ? escape(tagline) : 'This is your public presentation shell. Replace this copy with verified product information before publication.'}</p><a class="action" href="#foundation">Explore the foundation</a><section id="foundation"><h2>Built around your project</h2><p>Independent brand. Shared engineering standards. Modules selected for your needs.</p></section>`
      : role === 'app'
        ? `<p class="eyebrow">Local development · app</p><h1>Your launch checklist.</h1><p>Track the first steps in this browser. Product accounts and shared data are not connected.</p><section><h2>Build with intention</h2>${['Confirm product purpose', 'Review brand and content', 'Implement core features', 'Validate access and deployment'].map((task, i) => `<label><input type="checkbox" data-task="task-${i}">${task}</label>`).join('')}</section><p data-status role="status">Checklist changes stay in this browser.</p>`
        : `<p class="eyebrow">Local development · admin</p><h1>Theme inspector.</h1><p>This local development surface has no authentication. Add server-side access controls before hosting an operational admin.</p><section><h2>Shared interface</h2><p>Inspect the selected brand accent, control styling, and layout density.</p><button type="button" data-density aria-pressed="false">Toggle compact layout</button></section><p data-status role="status">Preferences stay in this browser.</p>`;
    files[`apps/${role}/index.html`] = `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${brand} · ${role}</title><link rel="stylesheet" href="/shared/theme.css"><script type="module" src="/shared/components.mjs"></script></head><body><header><strong>${brand}</strong><span>${role} / development</span></header><main>${body}</main><footer>Foundation ${config.foundationVersion} · local development only</footer></body></html>\n`;
    files[`apps/${role}/README.md`] = `# ${role}\n\nWorking localhost development shell. Start all selected modules with npm run dev at the project root. Production features and access controls are not configured.\n`;
  }
  return files;
}

function runtimeSource() {
  return `import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const project = JSON.parse(await readFile(path.join(root, 'project.json'), 'utf8'));
const roles = ['web','app','admin','api'];
const servers = [];
function stop(code=0){for(const server of servers)server.close();setTimeout(()=>process.exit(code),100).unref();}
for(const [index,role] of roles.entries()) {
  if(!project.modules[role])continue;
  const port=Number(process.env[role.toUpperCase()+'_PORT'] ?? 3100+index);
  if(!Number.isInteger(port)||port<1024||port>65535)throw Error('Invalid port for '+role);
  const server=createServer(async(req,res)=>{
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Cache-Control','no-store');
    res.setHeader('Content-Security-Policy',"default-src 'self'; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'");
    if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return;}
    let route;
    try{route = new URL(req.url,'http://localhost').pathname;}catch{res.writeHead(400);res.end('Invalid request');return;}
    let content, type;
    if(role==='api'){
      type='application/json';
      if(route==='/health')content=JSON.stringify({status:'ok',project:project.slug,environment:'local'});
      else if(route==='/v1/project')content=JSON.stringify({slug:project.slug,brand:project.brand,modules:project.modules});
      else{res.writeHead(404,{'Content-Type':type});res.end(JSON.stringify({error:'not_found'}));return;}
    }else{
      const routes={'/':['apps/'+role+'/index.html','text/html; charset=utf-8'],'/shared/theme.css':['packages/ui/theme.css','text/css; charset=utf-8'],'/shared/components.mjs':['packages/ui/components.mjs','text/javascript; charset=utf-8']};
      const entry=Object.hasOwn(routes,route)?routes[route]:null;
      if(!entry){res.writeHead(404);res.end('Not found');return;}
      try{content=await readFile(path.join(root,entry[0]));type=entry[1];}catch{res.writeHead(500);res.end('Local asset unavailable');return;}
    }
    res.writeHead(200,{'Content-Type':type});res.end(req.method==='HEAD'?undefined:content);
  });
  server.on('error',error=>{console.error(role+': '+error.message);stop(1);});
  servers.push(server);server.listen(port,'127.0.0.1',()=>console.log(role+': http://127.0.0.1:'+port+(role==='api'?'/health':'')));
}
process.on('SIGINT',()=>stop());process.on('SIGTERM',()=>stop());
`;
}

// Portable, uncompressed ZIP writer. No network or third-party archive dependency.
export function createZip(files, folder) {
  if (!/^[a-z][a-z0-9-]*$/.test(folder)) throw new Error('Invalid archive folder');
  const encoder = new TextEncoder();
  const entries = Object.entries(files);
  if (entries.length > 65535) throw new Error('Too many archive entries');
  const chunks = [], directory = [];
  let offset = 0;
  const header = size => { const bytes = new Uint8Array(size); return [bytes, new DataView(bytes.buffer)]; };
  for (const [name, text] of entries) {
    if (name.startsWith('/') || name.includes('\\') || name.split('/').some(part => part === '..' || !part)) throw new Error('Unsafe archive path');
    const filename = encoder.encode(folder + '/' + name), data = encoder.encode(text), crc = crc32(data);
    const [local, l] = header(30); l.setUint32(0,0x04034b50,true); l.setUint16(4,20,true); l.setUint16(6,0x0800,true); l.setUint16(12,33,true); l.setUint32(14,crc,true); l.setUint32(18,data.length,true); l.setUint32(22,data.length,true); l.setUint16(26,filename.length,true);
    chunks.push(local,filename,data);
    const [central,c] = header(46); c.setUint32(0,0x02014b50,true); c.setUint16(4,20,true); c.setUint16(6,20,true); c.setUint16(8,0x0800,true); c.setUint16(14,33,true); c.setUint32(16,crc,true); c.setUint32(20,data.length,true); c.setUint32(24,data.length,true); c.setUint16(28,filename.length,true); c.setUint32(42,offset,true);
    directory.push(central,filename); offset += local.length + filename.length + data.length;
  }
  const size = directory.reduce((sum,chunk)=>sum+chunk.length,0);
  const [end,e] = header(22); e.setUint32(0,0x06054b50,true); e.setUint16(8,entries.length,true); e.setUint16(10,entries.length,true); e.setUint32(12,size,true); e.setUint32(16,offset,true);
  const output = new Uint8Array(offset+size+22); let cursor=0;
  for(const chunk of [...chunks,...directory,end]){output.set(chunk,cursor);cursor+=chunk.length;}
  return output;
}
function crc32(bytes) {
  let crc=0xffffffff;
  for(const byte of bytes){crc^=byte;for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);}
  return (crc^0xffffffff)>>>0;
}
