import Link from "next/link";
import { PageFrame } from "@/components/page-frame";

const solutions = [
 {number:"01",title:"Software & platforms",description:"Digital applications and adaptable platforms for evolving needs.",href:"/technology"},
 {number:"02",title:"Intelligent systems",description:"Exploring AI and automation in useful, responsible applications.",href:"/technology"},
 {number:"03",title:"Cloud & infrastructure",description:"Technical foundations for connected digital experiences.",href:"/technology"},
 {number:"04",title:"Data & intelligence",description:"Clear information systems to support better decisions.",href:"/technology"}
];
export default function Home(){
 return <PageFrame>
  <section className="shell home-hero"><div className="home-hero-content">
   <p className="eyebrow">Independent technology company</p>
   <h1>Technology for <span>what comes next.</span></h1>
   <p className="hero-deck">Pectrium is a technology company focused on software, intelligent systems, and digital infrastructure—developing the foundations for new possibilities.</p>
   <div className="hero-actions"><Link className="button button-primary" href="/technology">Explore technology <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/company">Our company <span aria-hidden="true">→</span></Link></div>
  </div><div className="home-hero-aside" aria-hidden="true"><span className="aside-index">PECTRIUM / TECHNOLOGY</span><div className="aside-lines"><span/><span/><span/><span/></div><span className="aside-caption">Software · Intelligence · Infrastructure</span></div></section>
  <section className="home-directory" id="solutions"><div className="shell"><div className="directory-intro"><p className="section-index">Technology focus</p><h2>Ideas shaped into useful technology.</h2></div>
   <div className="directory-grid">{solutions.map(s=><Link className="directory-card" href={s.href} key={s.number}><span className="directory-num">{s.number} / 04</span><span className="directory-title">{s.title}<span aria-hidden="true">↗</span></span><span className="directory-description">{s.description}</span></Link>)}</div>
   <p className="solution-disclosure">These are Pectrium’s technology focus areas, not a representation that every capability is currently offered as a commercial service.</p>
  </div></section>
  <section className="shell home-bottom"><p className="section-index">The company</p><div><h2>Built around possibilities.</h2><p>Learn about Pectrium’s direction, the technology areas we are exploring, and the independent initiatives connected with the work.</p><div className="hero-actions"><Link className="text-link" href="/company">About Pectrium <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/ventures">Explore initiatives <span aria-hidden="true">↗</span></Link></div></div></section>
 </PageFrame>;
}
