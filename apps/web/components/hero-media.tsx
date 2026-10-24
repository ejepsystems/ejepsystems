"use client";

import { useRef, useState } from "react";

/**
 * Approved Pectrium 24-second cinematic film: four six-second chapters.
 * Until both MP4 assets are committed, keep the feature flag disabled.
 * The static illustration remains the safe fallback.
 */
const chapters = ["Focus", "Interaction", "Connection", "Possibility"] as const;
const videoEnabled = process.env.NEXT_PUBLIC_PECTRIUM_HERO_VIDEO_ENABLED === "true";
const motionEnabled = !videoEnabled && process.env.NEXT_PUBLIC_PECTRIUM_HERO_MOTION_ALTERNATIVE === "true";

export function HeroMedia() {
 const video = useRef<HTMLVideoElement>(null);
 const [current, setCurrent] = useState(0);
 const [playing, setPlaying] = useState(true);
 const chapter = Math.min(3, Math.floor(current / 6));
 function seek(index:number) {
  if (!video.current) return;
  video.current.currentTime = index * 6;
  setCurrent(index * 6);
  if (video.current.paused) { void video.current.play().catch(() => setPlaying(false)); }
 }
 return <div className={`pectrium-cinematic-image${motionEnabled?" pectrium-motion-alternative":""}`}>
  {motionEnabled?<div className="pectrium-motion-atmosphere" aria-hidden="true"><span/><span/><span/></div>:null}
  {videoEnabled?<div className="pectrium-film-frame">
   <video ref={video} className="pectrium-hero-video" autoPlay muted loop playsInline preload="metadata" disablePictureInPicture
    aria-label="Pectrium Human Systems in Motion: people using technology and moving through connected workplaces"
    poster="/media/pectrium/hero/human-systems-poster.webp"
    onTimeUpdate={event=>setCurrent(event.currentTarget.currentTime)}
    onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}
    onError={()=>setPlaying(false)}>
    <source media="(max-width: 767px)" src="/media/pectrium/hero/human-systems-mobile.mp4" type="video/mp4"/>
    <source src="/media/pectrium/hero/human-systems-desktop.mp4" type="video/mp4"/>
   </video>
   <div className="pectrium-film-controls" aria-label="Film chapters">
    <div className="pectrium-film-progress">
     {chapters.map((name,index)=><button key={name} type="button" aria-label={`Play chapter ${index+1}: ${name}`}
      aria-current={chapter===index?"step":undefined} onClick={()=>seek(index)}
      className={chapter===index?"is-active":""}>
      <span style={{width:chapter>index?"100%":chapter===index?`${((current-index*6)/6)*100}%`:"0%"}}/>
     </button>)}
    </div>
    <span className="pectrium-film-chapter" aria-live="off">{chapters[chapter]}</span>
    <button type="button" className="pectrium-film-toggle" aria-label={playing?"Pause film":"Play film"} onClick={()=>{
     if(!video.current)return;
     if(video.current.paused){void video.current.play().catch(()=>setPlaying(false));}else{video.current.pause();}
    }}>{playing?"Ⅱ":"▶"}</button>
   </div>
  </div>:null}
 </div>;
}
