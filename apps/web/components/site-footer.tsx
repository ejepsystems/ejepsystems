import Link from "next/link";
import { FlowMark } from "./flow-mark";
const links=[{href:"/solutions",label:"Solutions"},{href:"/company",label:"Company"},{href:"/technology",label:"Technology"},{href:"/ventures",label:"Initiatives"},{href:"/insights",label:"Insights"},{href:"/contact",label:"Contact"}];
export function SiteFooter(){return <footer className="site-footer"><div className="shell footer-grid">
 <div className="footer-brand"><Link className="wordmark" href="/" aria-label="Pectrium home"><FlowMark className="brand-symbol"/>pectrium<span aria-hidden="true">.</span></Link><p className="footer-note">Technology built around real needs.</p></div>
 <nav aria-label="Footer navigation" className="footer-nav"><p className="footer-label">Explore</p>{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
 <div><p className="footer-label">Company information</p><p className="footer-note">Pectrium explores software, intelligent systems and digital infrastructure. Official contact and corporate disclosures will reflect verified information.</p></div>
 </div><div className="shell footer-bottom"><span>Pectrium · Technology company in development</span><a href="#main">Back to top ↑</a></div></footer>}