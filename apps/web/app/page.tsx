import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { HeroMedia } from "@/components/hero-media";

const directions=[
 {number:"01",title:"Everyday work",description:"Make requests, services and daily tasks simpler to manage.",href:"/solutions/work-and-services"},
 {number:"02",title:"Learning and knowledge",description:"Help people find guidance and understand information more easily.",href:"/solutions/learning-and-intelligence"},
 {number:"03",title:"People and places",description:"Connect people with useful services, opportunities and updates.",href:"/solutions/connected-communities"},
 {number:"04",title:"Clearer decisions",description:"Make scattered information easier to understand and act on.",href:"/solutions/learning-and-intelligence"}
];

export default function Home(){return <PageFrame>
 <section className="pectrium-cinematic-hero" aria-labelledby="home-heading">
 <HeroMedia/>
 <div className="pectrium-cinematic-shade" aria-hidden="true"/>
 <div className="shell pectrium-cinematic-inner">
  <div className="pectrium-cinematic-content">
   <p className="eyebrow">Software · Intelligence · Infrastructure</p>
   <h1 id="home-heading">Technology built<br/>around real needs.</h1>
   <p className="pectrium-cinematic-deck">Software and intelligent systems that make everyday work simpler and more connected.</p>
   <Link className="pectrium-cinematic-cta" href="/products">Discover more <span aria-hidden="true">↗</span></Link>
  </div>
 </div>
 </section>
 <section className="home-directory" id="solutions"><div className="shell"><div className="directory-intro"><p className="section-index">Solutions / Focus</p><h2>Start with the problem, not the technology.</h2></div>
 <div className="directory-grid">{directions.map(s=><Link className="directory-card" href={s.href} key={s.number}><span className="directory-title">{s.title}<span aria-hidden="true">↗</span></span><span className="directory-description">{s.description}</span></Link>)}</div>
</div></section>
 <section className="shell editorial-section"><p className="section-index">Technology / Approach</p><div><h2>Different challenges need different tools.</h2><p>Software engineering, AI, cloud systems and data practices provide different ways to approach a problem. Our technology focus is guided by usefulness, responsible design and maintainability.</p><Link className="text-link" href="/technology">Explore the technology <span aria-hidden="true">↗</span></Link>
 <div className="process-strip" aria-label="Technology development approach"><span>Understand the need</span><span>Explore the approach</span><span>Validate the result</span></div></div></section>
 <section className="shell home-bottom"><p className="section-index">The company</p><div><h2>Purpose before complexity.</h2><p>Learn about Pectrium’s direction, principles and approach to developing useful technology.</p><Link className="text-link" href="/company">Discover Pectrium <span aria-hidden="true">↗</span></Link></div></section>
 </PageFrame>;}
