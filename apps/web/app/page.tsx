import Link from "next/link";
import { PageFrame } from "@/components/page-frame";

const directions=[
 {number:"01",title:"Digital experiences",description:"Make fragmented tasks and services easier to navigate through considered software.",href:"/solutions"},
 {number:"02",title:"Intelligent assistance",description:"Explore where AI can help people understand information and complete meaningful work.",href:"/solutions"},
 {number:"03",title:"Connected infrastructure",description:"Consider the dependable foundations that digital products need as they evolve.",href:"/solutions"},
 {number:"04",title:"Useful information",description:"Turn disconnected data into clearer systems for understanding and decisions.",href:"/solutions"}
];
const initiatives=["Quincestone","Emperor Armani","Clesla"];
export default function Home(){return <PageFrame>
 <section className="shell home-hero"><div className="home-hero-content">
  <p className="eyebrow">Pectrium / Independent technology company</p>
  <h1>Technology built <span>around real needs.</span></h1>
  <p className="hero-deck">Pectrium explores software, intelligent systems and digital infrastructure with a focus on making complex experiences simpler and more useful.</p>
  <div className="hero-actions"><Link className="button button-primary" href="/solutions">Explore our focus <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/company">About Pectrium <span aria-hidden="true">→</span></Link></div>
 </div><div className="home-hero-aside" aria-hidden="true"><span className="aside-index">PECTRIUM / 001</span><div className="aside-lines"><span/><span/><span/><span/></div><span className="aside-caption">Explore · Design · Develop</span></div></section>
 <section className="shell editorial-feature" aria-labelledby="feature-heading"><div className="feature-art" role="img" aria-label="Illustrated people moving through a connected civic plaza and modern workplaces"><span className="feature-art-caption">PECTRIUM / HUMAN SYSTEMS IN MOTION</span></div><div className="feature-copy"><p className="feature-kicker">Technology / Possibility</p><h2 id="feature-heading">Making complex experiences feel simpler.</h2><p>Explore the needs and ideas shaping Pectrium’s direction.</p><Link className="feature-cta" href="/solutions"><span>Discover our focus</span><span className="feature-cta-arrow" aria-hidden="true">↗</span></Link></div></section>
 <section className="home-directory" id="solutions"><div className="shell"><div className="directory-intro"><p className="section-index">Solutions / Focus</p><h2>Start with the problem, not the technology.</h2></div>
 <div className="directory-grid">{directions.map(s=><Link className="directory-card" href={s.href} key={s.number}><span className="directory-num">{s.number} / 04</span><span className="directory-title">{s.title}<span aria-hidden="true">↗</span></span><span className="directory-description">{s.description}</span></Link>)}</div>
 <p className="solution-disclosure">These are areas of exploration, not a catalog of currently available commercial services.</p></div></section>
 <section className="shell editorial-section"><p className="section-index">Technology / Approach</p><div><h2>Different challenges need different tools.</h2><p>Software engineering, AI, cloud systems and data practices provide different ways to approach a problem. Our technology focus is guided by usefulness, responsible design and maintainability.</p><Link className="text-link" href="/technology">Explore the technology <span aria-hidden="true">↗</span></Link>
 <div className="process-strip" aria-label="Technology development approach"><span>Understand the need</span><span>Explore the approach</span><span>Validate the result</span></div></div></section>
 <section className="editorial-band"><div className="shell editorial-section"><p className="section-index">Independent initiatives</p><div><h2>Distinct ideas, with room to grow.</h2><p>Three named initiatives are within the current development scope. Each has its own identity; descriptions and release stages will be added after verification.</p><div className="initiative-preview">{initiatives.map((name,i)=><div className="initiative-preview-row" key={name}><span>0{i+1}</span><strong>{name}</strong><span>Details under review</span></div>)}</div><Link className="text-link" href="/ventures">Explore initiatives <span aria-hidden="true">↗</span></Link></div></div></section>
 <section className="shell home-bottom"><p className="section-index">The company</p><div><h2>Purpose before complexity.</h2><p>Learn about Pectrium’s direction, principles and approach to developing useful technology.</p><Link className="text-link" href="/company">Discover Pectrium <span aria-hidden="true">↗</span></Link></div></section>
 </PageFrame>;}
