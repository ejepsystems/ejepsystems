import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame, PageHero } from "@/components/page-frame";

const catalog={
 "work-and-services":{name:"Work and services",headline:"Make everyday work flow.",intro:"Simpler ways to organize services, requests and tasks so people can focus on what matters.",challenge:"Everyday work often crosses forms, conversations, approvals and disconnected systems. Each handoff adds friction.",approach:"Pectrium explores digital journeys that help people understand what to do, what happens next and where a request stands.",scenarios:[["Service requests","One clear journey from submitting a request to receiving an update."],["Team coordination","Make responsibilities, approvals and next steps easier to follow."],["Onboarding","Help people complete multi-step processes without unnecessary confusion."]],principles:["Clear next steps","Fewer repeated actions","Accessible digital experiences"],products:[["Flow","/products/flow"],["Connect","/products/connect"]]},
 "learning-and-intelligence":{name:"Learning and intelligence",headline:"Make knowledge easier to use.",intro:"Better ways to learn, understand information and make confident decisions.",challenge:"People encounter more information than they can easily evaluate, understand or put into action.",approach:"Pectrium explores human-centered learning assistance, knowledge discovery and understandable data experiences, with responsible boundaries for AI.",scenarios:[["Learning support","Explore guided explanations and more accessible knowledge."],["Knowledge navigation","Help people find relevant information without unnecessary searching."],["Decision clarity","Present patterns and context in ways that support human judgment."]],principles:["Human oversight","Clear explanations","Responsible information design"],products:[["Assist","/products/assist"],["Insight","/products/insight"]]},
 "connected-communities":{name:"Connected communities",headline:"Bring people closer to opportunity.",intro:"Connected experiences for discovering services, local information and useful opportunities.",challenge:"Relevant services, neighborhood updates and opportunities are often difficult to find, scattered across channels or hard to trust.",approach:"Pectrium explores accessible digital connections between people, places and services, designed around usefulness rather than noise.",scenarios:[["Local service discovery","Make nearby resources and services easier to navigate."],["Community information","Share relevant notices and updates in a clear digital format."],["Skills and opportunity","Explore better ways for people to discover skills-based services and opportunities."]],principles:["Useful local context","Respectful privacy","Inclusive access"],products:[["Connect","/products/connect"],["Flow","/products/flow"]]}
} as const;
type Slug=keyof typeof catalog;
const slugs=Object.keys(catalog) as Slug[];
export function generateStaticParams(){return slugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const item=catalog[slug as Slug];
 return item?{title:item.name,description:item.intro}:{title:"Solution not found"};
}
export default async function SolutionDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=catalog[slug as Slug];if(!item)notFound();
 return <PageFrame>
  <PageHero eyebrow={`Solutions / ${item.name}`} title={item.headline} description={item.intro}/>
  <section className="shell pectrium-detail-intro"><div><p className="section-index">The challenge</p><h2>Start with real needs.</h2></div><div><p className="pectrium-detail-lead">{item.challenge}</p><p>{item.approach}</p></div></section>
  <section className="pectrium-detail-band"><div className="shell"><p className="section-index">Potential applications</p><h2>Experiences worth making simpler.</h2><div className="pectrium-detail-cards">{item.scenarios.map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
  <section className="shell pectrium-detail-intro"><div><p className="section-index">Design principles</p><h2>Useful by design.</h2></div><div><p>Each experience starts with the person using it, the context around them and the outcomes that matter.</p><ul className="pectrium-detail-principles">{item.principles.map(principle=><li key={principle}>{principle}</li>)}</ul></div></section>
  <section className="shell pectrium-detail-next"><div><p className="section-index">Related products</p><h2>Technology for the task.</h2></div><div>{item.products.map(([name,href])=><Link key={href} className="text-link" href={href}>Pectrium {name} <span aria-hidden="true">↗</span></Link>)}<Link className="text-link" href="/solutions">All solutions <span aria-hidden="true">↗</span></Link></div></section>
 </PageFrame>;
}
