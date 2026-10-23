import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "@/components/page-frame";
export const metadata:Metadata={title:"Solutions",description:"Explore the needs and potential applications guiding Pectrium's software, intelligent systems and infrastructure focus."};
const needs=[
 {n:"01",title:"Make digital tasks easier",problem:"Disconnected steps can make everyday digital experiences harder than they need to be.",outcome:"Explore software that connects workflows, simplifies interactions and helps people get things done.",example:"Potential applications: service portals, commerce experiences and workflow tools."},
 {n:"02",title:"Make information easier to understand",problem:"People often face more information than they can use confidently.",outcome:"Explore AI-assisted learning, guidance and decision-support experiences with responsible safeguards.",example:"Potential applications: guided learning, knowledge discovery and assisted workflows."},
 {n:"03",title:"Help connected systems evolve",problem:"As digital products grow, reliability and maintainability become essential.",outcome:"Explore adaptable infrastructure approaches that support changing product needs.",example:"Potential applications: application services, cloud deployment and integrations."},
 {n:"04",title:"Bring clarity to data",problem:"Information spread across systems makes patterns and decisions harder to see.",outcome:"Explore structured data experiences that improve access, understanding and context.",example:"Potential applications: reporting, information platforms and data workflows."}
];
export default function Solutions(){return <PageFrame>
 <PageHero eyebrow="Solutions / Areas of exploration" title="Start with what people need." description="Pectrium investigates problems where software, intelligent systems and digital infrastructure may make experiences more useful."/>
 <section className="shell editorial-section"><p className="section-index">Needs / Directions</p><div className="solution-rows">{needs.map(a=><article className="solution-row" key={a.n}><span className="solution-number">{a.n}</span><div><h2>{a.title}</h2><p>{a.problem}</p><p className="solution-direction">{a.outcome}</p><p className="solution-example">{a.example}</p></div></article>)}</div></section>
 <section className="editorial-band"><div className="shell editorial-section"><p className="section-index">Technology / Methods</p><div><h2>How these ideas take shape.</h2><p>Solutions begin with the need. Technology choices follow—whether that means application engineering, AI, data design or infrastructure.</p><Link className="text-link" href="/technology">Explore our technology <span aria-hidden="true">↗</span></Link></div></div></section>
 <section className="shell editorial-section"><p className="section-index">Availability</p><div><p className="editorial-disclaimer">The examples above are potential applications for research and development. They are not announced products, currently available commercial services, customer deployments or commitments to launch.</p></div></section>
 </PageFrame>;}
