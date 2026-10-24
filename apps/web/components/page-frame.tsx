import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
export function PageFrame({children}:{children:ReactNode}){return <><SiteHeader/><main id="main">{children}</main><SiteFooter/></>;}
export function PageHero({eyebrow,title,description}:{eyebrow:string,title:string,description:string}){return <section className="shell inner-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="inner-deck">{description}</p></section>;}
