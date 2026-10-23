import Link from "next/link";
const links=[{href:"/solutions",label:"Solutions"},{href:"/company",label:"Company"},{href:"/technology",label:"Technology"},{href:"/ventures",label:"Initiatives"},{href:"/insights",label:"Insights"},{href:"/contact",label:"Contact"}];
export function SiteFooter(){return <footer className="site-footer"><div className="shell footer-grid">
 <div className="footer-brand"><Link className="wordmark" href="/">pectrium<span aria-hidden="true">.</span></Link><p className="footer-note">Technology for what comes next.</p></div>
 <nav aria-label="Footer navigation" className="footer-nav"><p className="footer-label">Explore</p>{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
 <div><p className="footer-label">Company information</p><p className="footer-note">Pectrium is a technology company in development. Formal legal disclosures will reflect verified corporate records.</p></div>
 </div><div className="shell footer-bottom"><span>Pectrium · Technology company in development</span><a href="#main">Back to top ↑</a></div></footer>}