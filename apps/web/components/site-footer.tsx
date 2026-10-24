import Link from "next/link";
import { FlowMark } from "./flow-mark";

const columns=[
 {title:"Products",links:[["Flow","/products/flow"],["Assist","/products/assist"],["Connect","/products/connect"],["Insight","/products/insight"],["Studio","/products/studio"],["All products","/products"]]},
 {title:"Solutions",links:[["Work and services","/solutions/work-and-services"],["Learning and intelligence","/solutions/learning-and-intelligence"],["Connected communities","/solutions/connected-communities"],["All solutions","/solutions"]]},
 {title:"Explore",links:[["Technology","/technology"],["Initiatives","/ventures"],["Insights","/insights"]]},
 {title:"Company",links:[["About Pectrium","/company"],["Contact","/contact"]]}
] as const;

export function SiteFooter(){return <footer className="site-footer pectrium-footer">
 <div className="shell pectrium-footer-intro">
  <div><p className="pectrium-footer-eyebrow">Pectrium / Technology company</p><h2>Technology built<br/>around real needs.</h2></div>
  <Link className="pectrium-footer-cta" href="/products/flow">Meet Pectrium Flow <span aria-hidden="true">↗</span></Link>
 </div>
 <div className="shell pectrium-footer-main">
  <div className="pectrium-footer-brand">
   <Link className="wordmark" href="/" aria-label="Pectrium home"><FlowMark className="brand-symbol"/>pectrium<span aria-hidden="true">.</span></Link>
   <p>Software, intelligence and infrastructure shaped around useful experiences.</p>
  </div>
  <div className="pectrium-footer-columns">
   {columns.map(column=><nav key={column.title} aria-label={`${column.title} footer links`} className="pectrium-footer-column"><h3>{column.title}</h3>{column.links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>)}
  </div>
 </div>
 <div className="shell pectrium-footer-bottom"><span>© {new Date().getFullYear()} Pectrium</span><span>Intelligent digital systems</span><a href="#main">Back to top ↑</a></div>
 </footer>;}
