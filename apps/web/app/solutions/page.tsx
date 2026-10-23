import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "@/components/page-frame";

export const metadata: Metadata = {
 title: "Solutions",
 description: "Explore the problems and potential applications shaping Pectrium's focus on software, intelligent systems, cloud and data."
};
const areas=[
 {number:"01",name:"Software & platforms",problem:"When digital experiences become fragmented, useful software can bring workflows and people together.",direction:"Application experiences and adaptable digital platforms."},
 {number:"02",name:"Artificial intelligence",problem:"Complex information and repetitive work can slow learning and decision-making.",direction:"Responsible exploration of AI-assisted experiences and automation."},
 {number:"03",name:"Cloud infrastructure",problem:"Connected services need dependable technical foundations to evolve.",direction:"Infrastructure patterns for reliable, maintainable digital systems."},
 {number:"04",name:"Data & intelligence",problem:"Disconnected information makes it harder to understand what matters.",direction:"Clearer data models, information flows and decision support."}
];
export default function Solutions(){return <PageFrame>
 <PageHero eyebrow="Solutions" title="Technology shaped around real needs." description="From digital applications to intelligent experiences, these are the problems and technology directions Pectrium is exploring."/>
 <section className="shell editorial-section"><p className="section-index">Focus areas</p><div className="solution-rows">{areas.map(a=><article className="solution-row" key={a.number}><span className="solution-number">{a.number}</span><div><h2>{a.name}</h2><p>{a.problem}</p><p className="solution-direction">{a.direction}</p></div></article>)}</div></section>
 <section className="editorial-band"><div className="shell editorial-section"><p className="section-index">Explore further</p><div><h2>Understand the technology.</h2><p>Explore the technologies informing these directions and the independent initiatives being developed.</p><div className="hero-actions"><Link className="text-link" href="/technology">Our technology <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/ventures">Initiatives <span aria-hidden="true">↗</span></Link></div></div></div></section>
 <section className="shell editorial-section"><p className="section-index">Current scope</p><div><p className="editorial-disclaimer">These descriptions identify areas of focus and potential applications. They do not represent a catalog of currently available commercial services or verified customer deployments.</p></div></section>
 </PageFrame>;}
