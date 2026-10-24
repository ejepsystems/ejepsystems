/** Pectrium cinematic media. Keep the fallback until approved media files are installed.
 * To enable video: add all four assets to public/media/pectrium/hero and set
 * NEXT_PUBLIC_PECTRIUM_HERO_VIDEO_ENABLED=true for the build.
 * The video is decorative; the heading and CTA remain semantic HTML.
 */
export function HeroMedia() {
 const enabled=process.env.NEXT_PUBLIC_PECTRIUM_HERO_VIDEO_ENABLED==="true";
 return <div className="pectrium-cinematic-image" aria-hidden="true">
  {enabled?<video className="pectrium-hero-video" autoPlay muted loop playsInline preload="metadata" disablePictureInPicture tabIndex={-1} poster="/media/pectrium/hero/human-systems-poster.webp">
   <source media="(max-width: 767px)" src="/media/pectrium/hero/human-systems-mobile.webm" type="video/webm"/>
   <source media="(max-width: 767px)" src="/media/pectrium/hero/human-systems-mobile.mp4" type="video/mp4"/>
   <source src="/media/pectrium/hero/human-systems-desktop.webm" type="video/webm"/>
   <source src="/media/pectrium/hero/human-systems-desktop.mp4" type="video/mp4"/>
  </video>:null}
 </div>;
}
