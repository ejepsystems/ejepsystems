import type { SVGProps } from "react";

type FlowMarkProps = SVGProps<SVGSVGElement> & { title?: string };
/** Approved Pectrium Flow Mark 01B: two separated forms, fixed orientation. */
export function FlowMark({ title, ...props }: FlowMarkProps) {
 return <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden={title?undefined:true} role={title?"img":undefined} {...props}>
 {title?<title>{title}</title>:null}
 <path d="M31 30.5C31 18.5 39.5 10 57 10C56.5 22.5 48.5 30.5 31 30.5Z"/>
 <path d="M29 33.5C16.5 33.5 9 42.5 9 57C21.5 56.5 29 48 29 33.5Z"/>
 </svg>;
}