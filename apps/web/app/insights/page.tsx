import type {Metadata} from "next";
import Link from "next/link";
import {PageFrame,PageHero} from "@/components/page-frame";
export const metadata:Metadata={title:"Insights",description:"Pectrium's future editorial home for researched perspectives on technology and digital experiences."};
export default function Insights(){return <PageFrame>
 <PageHero eyebrow="Insights / Perspectives" title="Questions worth exploring." description="Research and perspectives on how software, intelligent systems and digital experiences can address meaningful problems."/>
 <section className="shell editorial-section"><p className="section-index">Publications</p><div className="empty-editorial"><h2>No articles published yet.</h2><p>Editorial work will appear here only after review and approval. There are no fabricated articles, announcements or publication dates.</p><Link className="text-link" href="/technology">Explore our technology focus <span aria-hidden="true">↗</span></Link></div></section>
 </PageFrame>;}
