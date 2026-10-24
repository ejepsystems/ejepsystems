import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "@/components/page-frame";

export const metadata:Metadata={
 title:"Solutions",
 description:"Pectrium's solutions for everyday work, information access, connected communities and useful digital experiences."
};

const solutions=[
 {id:"workflows",category:"Work and services",title:"Make everyday work flow.",need:"Forms, handoffs and approvals should not slow people down.",approach:"Bring requests, tasks and decisions into simpler, more connected experiences.",applications:["Service requests","Onboarding","Task coordination"],product:"Flow",href:"/products#flow"},
 {id:"information",category:"Learning and knowledge",title:"Find a clearer way forward.",need:"Information is everywhere. Useful answers and guidance can be hard to find.",approach:"Create more accessible learning, knowledge discovery and AI-assisted guidance with people in control.",applications:["Learning assistance","Knowledge discovery","Guided experiences"],product:"Assist",href:"/products#assist"},
 {id:"connected",category:"People and places",title:"Bring people closer to what matters.",need:"Local opportunities, services and updates often remain fragmented or difficult to discover.",approach:"Design connected experiences that help people discover relevant services, share useful updates and navigate their communities.",applications:["Community discovery","Local services","Digital notices"],product:"Connect",href:"/products#connect"},
 {id:"data",category:"Decisions and information",title:"Turn information into clarity.",need:"When information is scattered, understanding what needs attention takes more work.",approach:"Organize information into clear views that support decisions and make digital experiences easier to understand.",applications:["Operational insights","Accessible reporting","Information organization"],product:"Insight",href:"/products#insight"}
];
export default function Solutions(){return <PageFrame>
 <PageHero eyebrow="Pectrium / Solutions" title="Built for the way people live and work." description="Better ways to learn, connect, organize work and make sense of information. Technology shaped around everyday needs."/>
 <section className="shell pectrium-solutions" aria-label="Solutions for real-world needs">
  {solutions.map(item=><article className="pectrium-solution" id={item.id} key={item.id}>
   <div className="pectrium-solution-top"><p className="section-index">{item.category}</p><h2>{item.title}</h2></div>
   <div className="pectrium-solution-body"><p className="pectrium-solution-need">{item.need}</p><p>{item.approach}</p><div className="pectrium-solution-tags">{item.applications.map(application=><span key={application}>{application}</span>)}</div><Link className="text-link" href={item.href}>Discover Pectrium {item.product} <span aria-hidden="true">↗</span></Link></div>
  </article>)}
 </section>
 <section className="editorial-band"><div className="shell editorial-section"><p className="section-index">Products / Pectrium</p><div><h2>One family. Different needs.</h2><p>Flow, Assist, Connect and Insight give these solution areas a connected product direction. Explore each product's focus and current availability.</p><Link className="text-link" href="/products">Discover our products <span aria-hidden="true">↗</span></Link></div></div></section>
 </PageFrame>;}
