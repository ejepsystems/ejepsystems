"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  {href:"/company",label:"Company"},
  {href:"/technology",label:"Technology"},
  {href:"/ventures",label:"Ventures"},
  {href:"/insights",label:"Insights"},
  {href:"/contact",label:"Contact"}
];
export function SiteHeader() {
 const pathname=usePathname();
 const [open,setOpen]=useState(false);
 return <header className="site-header">
  <div className="shell header-inner">
   <Link className="wordmark" href="/" aria-label="Pectrium home" onClick={()=>setOpen(false)}>pectrium<span aria-hidden="true">.</span></Link>
   <nav className="desktop-nav" aria-label="Primary navigation"><ul className="nav-list">{links.map(l=><li key={l.href}><Link aria-current={pathname===l.href?"page":undefined} href={l.href}>{l.label}</Link></li>)}</ul></nav>
   <Link className="header-link" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
   <button className="mobile-menu-toggle" type="button" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-site-nav" onClick={()=>setOpen(!open)}><span>{open?"Close":"Menu"}</span><span aria-hidden="true">{open?"×":"☰"}</span></button>
  </div>
  <nav id="mobile-site-nav" className={open?"mobile-site-nav is-open":"mobile-site-nav"} aria-label="Mobile navigation" inert={!open}>{links.map((l,i)=><Link key={l.href} href={l.href} aria-current={pathname===l.href?"page":undefined} onClick={()=>setOpen(false)}><span className="mobile-nav-number">0{i+1}</span>{l.label}<span aria-hidden="true">↗</span></Link>)}</nav>
 </header>;
}