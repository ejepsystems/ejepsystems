import {defaultConfig,moduleInfo,slugify,validate,generateFiles,createZip} from './generator.js';
import {accentText} from './foundation/starter.mjs';
const $ = selector=>document.querySelector(selector);
const icons = {
  web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18M12 3c-5 5-5 13 0 18"/>',
  app:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  admin:'<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  api:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  file:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6"/>',
  palette:'<circle cx="8" cy="9" r=".6"/><circle cx="12" cy="6" r=".6"/><circle cx="16" cy="9" r=".6"/><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.6 1.6 0 0 1 1-2.8h2a5 5 0 0 0 4-5C21 6 17 3 12 3Z"/>',
  layers:'<path d="m12 3 10 5-10 5L2 8Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  download:'<path d="M12 3v12m-4-4 4 4 4-4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  blocks:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/><path d="m17 2 5 5-5 5-5-5ZM3 16h8v5H3Z"/>',
  code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>'
};
function svg(name){return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]||icons.file}</svg>`;}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=svg(el.dataset.icon));
let config=structuredClone(defaultConfig),files={},copyText='',saveTimer,toastTimer,storageOK=true;
try {
  const saved=JSON.parse(localStorage.getItem('ejep-starter-v1'));
  if(saved && typeof saved.name==='string' && typeof saved.brand==='string' && typeof saved.tagline==='string' && /^#[\da-f]{6}$/i.test(saved.color) && Array.isArray(saved.modules)) config={name:saved.name.slice(0,64),brand:saved.brand.slice(0,64),tagline:saved.tagline.slice(0,120),color:saved.color,modules:Object.keys(moduleInfo).filter(m=>saved.modules.includes(m))};
}catch {storageOK=false;}
function setInputs(){
  $('#project-name').value=config.name;$('#brand-name').value=config.brand;$('#tagline').value=config.tagline;$('#brand-color').value=config.color;$('#color-hex').value=config.color.toUpperCase();
  document.querySelectorAll('[name=module]').forEach(el=>el.checked=config.modules.includes(el.value));
}
function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
function save(){
  clearTimeout(saveTimer);$('#save-status').textContent=storageOK?'Saving…':'Session draft';
  saveTimer=setTimeout(()=>{try{localStorage.setItem('ejep-starter-v1',JSON.stringify(config));storageOK=true;$('#save-status').textContent='Saved on this device';}catch{storageOK=false;$('#save-status').textContent='Session draft';}},350);
}
function renderTree(){
  const opened=new Set(Array.from(document.querySelectorAll('.tree-folder[open]')).map(el=>el.dataset.path));
  const known=new Set(Array.from(document.querySelectorAll('.tree-folder')).map(el=>el.dataset.path));
  const root={children:{}};
  for(const file of Object.keys(files)){
    let node=root;
    const pieces=file.split('/');
    pieces.forEach((piece,i)=>{node.children[piece] ||= {children:{},path:pieces.slice(0,i+1).join('/'),file:i===pieces.length-1};node=node.children[piece];});
  }
  const notes={apps:'YOUR MODULES',packages:'SHARED FOUNDATION','packages/brand':'Design tokens','packages/ui':'Common components','packages/config':'Project identity','packages/contracts':'Data shapes',docs:'ADAPTATION GUIDES',scripts:'LOCAL DEVELOPMENT',...Object.fromEntries(Object.keys(moduleInfo).map(m=>['apps/'+m,moduleInfo[m].port]))};
  function build(node){
    const fragment=document.createDocumentFragment();
    const entries=Object.entries(node.children).sort(([a,av],[b,bv])=>av.file!==bv.file?(av.file?1:-1):a.localeCompare(b));
    for(const [name,child] of entries){
      if(child.file){const button=document.createElement('button');button.className='tree-file';button.type='button';button.innerHTML=svg('file');button.append(document.createTextNode(name));button.setAttribute('aria-label','Preview '+child.path);button.onclick=()=>showFile(child.path);fragment.append(button);}
      else{const details=document.createElement('details');details.className='tree-folder';details.dataset.path=child.path;details.open=known.has(child.path)?opened.has(child.path):child.path.split('/').length<3;const summary=document.createElement('summary');summary.innerHTML=svg('folder');summary.append(document.createTextNode(name+'/'));if(notes[child.path]){const note=document.createElement('span');note.className='folder-note';note.textContent=notes[child.path];summary.append(note);}const children=document.createElement('div');children.className='tree-children';children.append(build(child));details.append(summary,children);fragment.append(details);}
    }
    return fragment;
  }
  $('#file-tree').replaceChildren(build(root));
  function plain(node,depth=0){return Object.entries(node.children).sort(([a,av],[b,bv])=>av.file!==bv.file?(av.file?1:-1):a.localeCompare(b)).map(([name,child])=>'  '.repeat(depth)+name+(child.file?'':'/')+(child.file?'':'\n'+plain(child,depth+1))).join('\n');}
  copyText=slugify(config.name)+'/\n'+plain(root,1);
}

function render(){
  const problem=validate(config);$('#validation').textContent=problem;$('#validation').hidden=!problem;$('#download').disabled=!!problem;
  $('#project-slug span').textContent=slugify(config.name);$('#root-name').textContent=slugify(config.name);$('#selection-count').textContent=config.modules.length+' selected';
  document.querySelectorAll('[name=module]').forEach(el=>el.closest('.module').classList.toggle('selected',el.checked));
  try{files=generateFiles(config);renderTree();$('#file-count').textContent=Object.keys(files).length+' files · '+config.modules.length+' modules';$('#readme-content').textContent=files['README.md'];$('#copy-structure').disabled=false;$('#copy-readme').disabled=false;}
  catch{files={};$('#file-tree').innerHTML='<p class="empty-tree">Complete your project details to generate the structure.</p>';$('#file-count').textContent='Waiting for configuration';$('#readme-content').textContent=problem;$('#copy-structure').disabled=true;$('#copy-readme').disabled=true;}
  $('#sample-brand').textContent=config.brand.trim()||'Your brand';$('#sample-initials').textContent=(config.brand.trim().split(/\s+/).slice(0,2).map(x=>Array.from(x)[0]).join('')||'EA').toUpperCase();$('#sample-tagline').textContent=config.tagline.trim()||'Your next chapter starts here.';
  const color=/^#[\da-f]{6}$/i.test(config.color)?config.color:'#25745B';$('#brand-panel').style.setProperty('--project-color',color);$('#brand-panel').style.setProperty('--project-contrast',accentText(color));$('#sample-color').textContent=color.toUpperCase();
  $('#sample-modules').replaceChildren(...config.modules.map(m=>{const s=document.createElement('span');s.textContent=moduleInfo[m].label;return s;}));
}
$('#config-form').addEventListener('input',event=>{
  const el=event.target;
  if(el.id==='project-name')config.name=el.value;
  if(el.id==='brand-name')config.brand=el.value;
  if(el.id==='tagline')config.tagline=el.value;
  if(el.id==='brand-color'){config.color=el.value;$('#color-hex').value=el.value.toUpperCase();}
  if(el.id==='color-hex'){config.color=el.value;if(/^#[\da-f]{6}$/i.test(el.value))$('#brand-color').value=el.value;}
  if(el.name==='module')config.modules=Array.from(document.querySelectorAll('[name=module]:checked')).map(el=>el.value);
  render();save();
});
$('#config-form').addEventListener('submit',event=>{
  event.preventDefault();if(validate(config))return;
  const slug=slugify(config.name),blob=createZip(files,slug),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=slug+'-starter.zip';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
  toast('Starter downloaded. Unzip it, then run npm run dev.');
});
$('#reset').onclick=()=>{config=structuredClone(defaultConfig);setInputs();render();save();toast('Default starter restored.');};
const tabs=Array.from(document.querySelectorAll('[role=tab]'));
function selectTab(tab){tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;$('#'+t.getAttribute('aria-controls')).hidden=!active;});}
tabs.forEach((tab,i)=>{tab.onclick=()=>selectTab(tab);tab.onkeydown=event=>{let next;if(event.key==='ArrowRight')next=(i+1)%tabs.length;if(event.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next]);tabs[next].focus();}};});
async function copy(value,message){try{await navigator.clipboard.writeText(value);toast(message);}catch{const el=document.createElement('textarea');el.value=value;el.style.position='fixed';el.style.opacity='0';document.body.append(el);el.select();const ok=document.execCommand('copy');el.remove();toast(ok?message:'Copy unavailable. The file is included in the ZIP.');}}
$('#copy-structure').onclick=()=>copy(copyText,'Project structure copied.');$('#copy-readme').onclick=()=>copy(files['README.md'],'README copied.');
function showFile(path){$('#file-title').textContent=path;$('#file-content').textContent=files[path];$('#file-dialog').showModal();}
$('#close-file').onclick=()=>$('#file-dialog').close();$('#file-dialog').onclick=event=>{if(event.target===$('#file-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}};
setInputs();render();$('#save-status').textContent=storageOK?'Saved on this device':'Session draft';
