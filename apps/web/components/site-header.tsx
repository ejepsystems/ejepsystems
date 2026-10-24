"use client";
import Link from "next/link";
import { FlowMark } from "./flow-mark";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const sections = [
 {href:"/products",label:"Products",description:"Software for work, intelligence and connected systems.",children:[
  {href:"/products/flow",label:"Flow",detail:"Workflow systems"},
  {href:"/products/assist",label:"Assist",detail:"Intelligent assistance"},
  {href:"/products/connect",label:"Connect",detail:"Connected services"},
  {href:"/products/insight",label:"Insight",detail:"Data intelligence"},
  {href:"/products/studio",label:"Studio",detail:"Internal engineering"}
 ]},
 {href:"/solutions",label:"Solutions",description:"Technology designed around real-world needs.",children:[
  {href:"/solutions/work-and-services",label:"Work and services",detail:"Simpler everyday journeys"},
  {href:"/solutions/learning-and-intelligence",label:"Learning and intelligence",detail:"Knowledge and clarity"},
  {href:"/solutions/connected-communities",label:"Connected communities",detail:"People, places and opportunity"}
 ]},
 {href:"/company",label:"Company",description:"The thinking behind Pectrium."},
 {href:"/technology",label:"Technology",description:"The disciplines behind our products."},
 {href:"/ventures",label:"Initiatives",description:"Quincestone, Emperor Armani and Clesla."},
 {href:"/insights",label:"Insights",description:"Perspectives on technology and design."},
 {href:"/contact",label:"Contact",description:"Connect with Pectrium."}
];

export function SiteHeader(){
 const pathname=usePathname();
 const [open,setOpen]=useState(false);
 const [expanded,setExpanded]=useState<string|null>(null);
 const toggleRef=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false);setExpanded(null);},[pathname]);
 useEffect(()=>{
  if(!open)return;
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==="Escape"){setOpen(false);toggleRef.current?.focus();}
  };
  window.addEventListener("keydown",onKey);
  return ()=>window.removeEventListener("keydown",onKey);
 },[open]);
 return <header className="site-header">
  <div className="shell header-inner">
   <Link className="wordmark" href="/" aria-label="Pectrium home" onClick={()=>setOpen(false)}><FlowMark className="brand-symbol"/>pectrium<span aria-hidden="true">.</span></Link>
   <nav className="desktop-nav" aria-label="Primary navigation"><ul className="nav-list">{sections.map(section=><li key={section.href}><Link aria-current={pathname===section.href?"page":undefined} href={section.href}>{section.label}</Link></li>)}</ul></nav>
   <Link className="header-link" href="/products/flow">Meet Flow <span aria-hidden="true">↗</span></Link>
   <Link className="mobile-header-cta" href="/products/flow" onClick={()=>setOpen(false)}>Flow <span aria-hidden="true">↗</span></Link>
   <button ref={toggleRef} className="mobile-menu-toggle" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-site-nav" onClick={()=>setOpen(v=>!v)}><span className="menu-label">{open?"Close":"Menu"}</span><span className="menu-glyph" aria-hidden="true">{open?"×":"☰"}</span></button>
  </div>
  <nav id="mobile-site-nav" className={open?"mobile-site-nav pectrium-mobile-drawer is-open":"mobile-site-nav pectrium-mobile-drawer"} aria-label="Mobile navigation" inert={!open}>
   <div className="pectrium-mobile-drawer-inner">
    <p className="pectrium-menu-kicker">Navigate Pectrium</p>
    {sections.map(section=><div className="pectrium-menu-group" key={section.href}>
      <div className="pectrium-menu-row">
       <Link href={section.href} aria-current={pathname===section.href?"page":undefined} onClick={()=>setOpen(false)}>{section.label}<span className="pectrium-menu-row-arrow" aria-hidden="true">↗</span></Link>
       {section.children?<button type="button" className="pectrium-menu-expand" aria-label={`Show ${section.label} links`} aria-expanded={expanded===section.href} aria-controls={`menu-${section.label.toLowerCase()}`} onClick={()=>setExpanded(v=>v===section.href?null:section.href)}><span aria-hidden="true">{expanded===section.href?"−":"+"}</span></button>:null}
      </div>
      {section.children?<div id={`menu-${section.label.toLowerCase()}`} className="pectrium-menu-children" hidden={expanded!==section.href}>
        <p>{section.description}</p>
        {section.children.map(child=><Link key={child.href} href={child.href} onClick={()=>setOpen(false)}><span>{child.label}<small>{child.detail}</small></span><span aria-hidden="true">↗</span></Link>)}
       </div>:null}
     </div>)}
    <div className="pectrium-menu-end"><span>Technology built around real needs.</span><Link href="/products" onClick={()=>setOpen(false)}>View all products ↗</Link></div>
   </div>
  </nav>
 </header>;
}
