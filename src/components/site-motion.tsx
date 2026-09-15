'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export default function SiteMotion(){
 const pathname=usePathname();
 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(preference.matches)return;
  const elements=[...document.querySelectorAll<HTMLElement>('.section-heading,.solution-tile,.platform-explorer,.industry-list>a,.process-grid article,.solution-detail,.use-case-list article,.guides article,.closing-inner,.ecosystem-grid article')];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-waiting');entry.target.classList.add('reveal-arrived');observer.unobserve(entry.target)}}),{threshold:0.08});
  elements.forEach(element=>{if(element.getBoundingClientRect().top>window.innerHeight){element.classList.add('reveal-waiting');observer.observe(element)}});
  function showAll(){elements.forEach(e=>e.classList.remove('reveal-waiting'));observer.disconnect()}
  preference.addEventListener('change',showAll);
  return()=>{showAll();preference.removeEventListener('change',showAll)};
 },[pathname]);
 return null;
}
