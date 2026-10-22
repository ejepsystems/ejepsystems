import Link from "next/link";
const links=[{href:"/company",label:"Company"},{href:"/technology",label:"Technology"},{href:"/ventures",label:"Ventures"},{href:"/insights",label:"Insights"},{href:"/contact",label:"Contact"}];
export function SiteFooter(){return <footer className="site-footer"><div className="shell footer-grid">
 <div className="footer-brand"><Link className="wordmark" href="/">pectrium<span aria-hidden="true">.</span></Link><p className="footer-note">Intelligent systems.<br/>Global possibilities.</p></div>
 <nav aria-label="Footer navigation" className="footer-nav"><p className="footer-label">Explore</p>{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
 <div><p className="footer-label">Company information</p><p className="footer-note">Pectrium is being established as a technology company. EJEP Systems is the underlying legal/corporate entity; formal disclosures remain subject to verified registration details.</p></div>
 </div><div className="shell footer-bottom"><span>Pectrium · Establishment stage</span><a href="#main">Back to top ↑</a></div></footer>}