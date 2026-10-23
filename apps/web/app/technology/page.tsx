import type {Metadata} from "next";
import Link from "next/link";
import {PageFrame,PageHero} from "@/components/page-frame";
export const metadata:Metadata={title:"Technology",description:"Explore the technical disciplines and development approach informing Pectrium's work."};
const methods=[
 ["01","Application engineering","Interface design, application architecture and accessible experiences help translate requirements into software people can use."],
 ["02","AI and automation","Model evaluation, human oversight and responsible integration guide exploration of AI-assisted experiences."],
 ["03","Cloud and systems","Deployment architecture, observability, security and reliability practices inform maintainable digital foundations."],
 ["04","Data design","Data models, quality controls and information flows provide structure for trustworthy digital experiences."]
];
export default function Technology(){return <PageFrame>
 <PageHero eyebrow="Technology / Disciplines" title="Choosing the right tools for the task." description="The methods behind useful digital products matter. These disciplines inform how Pectrium approaches research, design and engineering."/>
 <section className="shell editorial-section"><p className="section-index">Technical disciplines</p><div className="editorial-rows">{methods.map(a=><article key={a[0]}><span>{a[0]}</span><h3>{a[1]}</h3><p>{a[2]}</p></article>)}</div></section>
 <section className="editorial-band"><div className="shell editorial-section"><p className="section-index">Working principles</p><div><h2>Understand. Design. Validate.</h2><p>Begin with the problem, choose technology according to its constraints, and test assumptions before expanding the work. Shared engineering practices can help, but individual initiatives retain their own requirements and identities.</p><div className="process-strip" aria-label="Working principles"><span>Understand</span><span>Design</span><span>Validate</span></div></div></div></section>
 <section className="shell editorial-section"><p className="section-index">Explore</p><div><h2>From technical approach to intended outcome.</h2><p>See the user needs and potential applications informing these technology directions.</p><Link className="text-link" href="/solutions">Explore solutions <span aria-hidden="true">↗</span></Link><p className="editorial-disclaimer">Technical disciplines describe areas of focus and approach, not a claim that each is available as a commercial service.</p></div></section>
 </PageFrame>;}
