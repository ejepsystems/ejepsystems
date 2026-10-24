import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "@/components/page-frame";

export const metadata: Metadata = {
 title: "Products",
 description: "Discover Pectrium's planned software, intelligent assistance, integrations and data intelligence product family."
};

const products = [
 {name:"Flow",category:"Workflow systems",description:"A simpler way to organize requests, approvals, onboarding and everyday work.",capabilities:["Guided processes","Approvals and routing","Connected task journeys"],status:"Concept"},
 {name:"Assist",category:"Intelligent assistance",description:"AI-supported ways to find information, understand context and move through complex tasks.",capabilities:["Knowledge discovery","Contextual guidance","Human review"],status:"Concept"},
 {name:"Connect",category:"Connected services",description:"A foundation for bringing authorized applications, information and workflows together.",capabilities:["System integrations","Event-driven workflows","Access controls"],status:"Concept"},
 {name:"Insight",category:"Data intelligence",description:"Clearer views of information to help people understand operations and make informed decisions.",capabilities:["Reporting","Data quality","Decision support"],status:"Concept"},
 {name:"Studio",category:"Internal engineering",description:"A shared foundation for designing, building and maintaining Pectrium's own digital experiences.",capabilities:["Reusable starters","Design standards","Engineering workflows"],status:"Internal tooling"}
];
export default function Products(){return <PageFrame>
 <PageHero eyebrow="Pectrium / Products" title="One direction. Connected possibilities." description="Meet the product family taking shape around simpler workflows, useful intelligence and dependable digital experiences."/>
 <section className="shell product-family" aria-label="Pectrium product family">
  {products.map((product,i)=><article className="product-family-card" key={product.name}>
   <div className="product-family-meta"><span className="section-index">0{i+1} / {product.category}</span><span className="product-status">{product.status}</span></div>
   <h2>Pectrium <span>{product.name}</span></h2>
   <p>{product.description}</p>
   <div className="product-capabilities">{product.capabilities.map(item=><span key={item}>{item}</span>)}</div>
  </article>)}
 </section>
 <section className="shell product-family-outro"><div><p className="section-index">Built around needs</p><h2>Technology with a clear purpose.</h2></div><div><p>Each product addresses a different part of a connected digital experience. Availability varies: these are product directions and internal tooling, not a claim that every platform can already be used or purchased.</p><Link className="text-link" href="/solutions">Explore solutions <span aria-hidden="true">↗</span></Link></div></section>
 </PageFrame>;}
