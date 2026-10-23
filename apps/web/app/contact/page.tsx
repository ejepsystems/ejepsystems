import type {Metadata} from "next";
import Link from "next/link";
import {PageFrame,PageHero} from "@/components/page-frame";
export const metadata:Metadata={title:"Contact",description:"Official Pectrium contact channels are pending verification."};
export default function Contact(){return <PageFrame>
 <PageHero eyebrow="Contact / Company information" title="Connect with Pectrium." description="Official communication channels are being verified before publication. In the meantime, explore the company and its technology direction."/>
 <section className="shell editorial-section"><p className="section-index">Contact availability</p><div className="empty-editorial"><h2>Official contact details coming after verification.</h2><p>No unverified email address, social account or unconfigured form is published on this site. This page will be updated when a company-approved channel is ready.</p><div className="hero-actions"><Link className="text-link" href="/company">About Pectrium <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/solutions">Explore focus areas <span aria-hidden="true">↗</span></Link></div></div></section>
 </PageFrame>;}
