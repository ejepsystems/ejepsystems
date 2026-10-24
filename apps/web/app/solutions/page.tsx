import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "@/components/page-frame";
export const metadata:Metadata={title:"Solutions",description:"Explore Pectrium solutions for everyday work, learning and connected communities."};
const areas=[
 {title:"Work and services",headline:"Make everyday work flow.",description:"Simpler ways to coordinate tasks, requests and services across the moments that matter.",href:"/solutions/work-and-services",product:"Flow"},
 {title:"Learning and intelligence",headline:"Make knowledge easier to use.",description:"Accessible learning, useful guidance and clearer information for better decisions.",href:"/solutions/learning-and-intelligence",product:"Assist + Insight"},
 {title:"Connected communities",headline:"Bring people closer to opportunity.",description:"Help people discover local services, useful updates and skills-based opportunities.",href:"/solutions/connected-communities",product:"Connect"}
];
export default function Solutions(){return <PageFrame>
 <PageHero eyebrow="Pectrium / Solutions" title="Built for the way people live and work." description="From everyday work to learning and connected communities, explore the human needs shaping Pectrium's solutions."/>
 <section className="shell pectrium-solutions" aria-label="Solution areas">{areas.map(item=><article className="pectrium-solution" key={item.href}>
  <div className="pectrium-solution-top"><p className="section-index">{item.title}</p><h2>{item.headline}</h2></div>
  <div className="pectrium-solution-body"><p className="pectrium-solution-need">{item.description}</p><p>Explore the challenges, practical applications and product thinking behind this solution area.</p><Link className="text-link" href={item.href}>Explore {item.title} <span aria-hidden="true">↗</span></Link></div>
 </article>)}</section>
 <section className="editorial-band"><div className="shell editorial-section"><p className="section-index">Products / Pectrium</p><div><h2>One family. Different needs.</h2><p>Flow, Assist, Connect and Insight represent complementary product directions designed around more useful digital experiences.</p><Link className="text-link" href="/products">Discover Pectrium products <span aria-hidden="true">↗</span></Link></div></div></section>
 </PageFrame>;}
