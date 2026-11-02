"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { studies } from "@/lib/page-data";
import { useLocale } from "./LocaleProvider";

export function ResearchCarousel({ items }: { items: string[][] }) {
  const { isArabic } = useLocale();
  const rail = useRef<HTMLDivElement>(null);
  const interacting = useRef(false);
  const move = useCallback((direction: number) => {
    const el = rail.current;
    if (!el) return;
    const distance = (el.firstElementChild?.getBoundingClientRect().width ?? 320) + 24;
    const atEnd = Math.abs(el.scrollLeft) >= el.scrollWidth - el.clientWidth - 4;
    el.scrollTo({ left: direction > 0 && atEnd ? 0 : el.scrollLeft + distance * direction * (isArabic ? -1 : 1), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, [isArabic]);
  useEffect(() => {
    const el = rail.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .6 });
    observer.observe(el);
    const timer = setInterval(() => { if (visible && !interacting.current && !document.hidden) move(1); }, 6500);
    return () => { observer.disconnect(); clearInterval(timer); };
  }, [move]);
  const facts = isArabic ? ["أكثر من 100,000 فحص", "116,731 مشاركاً", "40,000 طفل · 100,000 بالغ", "31,979 رجلاً · 15,776 امرأة", "ثلاث فئات عمرية"] : ["100,000+ screenings", "116,731 people assessed", "40,000 children · 100,000 adults", "31,979 men · 15,776 women", "Three age groups compared"];
  return <div className="research-carousel" role="region" aria-label={isArabic ? "دراسات وأبحاث" : "Research studies"} aria-roledescription="carousel" onMouseEnter={() => { interacting.current = true; }} onMouseLeave={() => { interacting.current = false; }} onFocusCapture={() => { interacting.current = true; }} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) interacting.current = false; }}>
    <div className="research-carousel-controls"><p>{isArabic ? "استكشف الدراسات والنتائج" : "Explore the studies and their findings"}</p><div>
      <button type="button" onClick={() => move(-1)} aria-label={isArabic ? "الدراسة السابقة" : "Previous study"}><ArrowLeft size={20} /></button>
      <button type="button" onClick={() => move(1)} aria-label={isArabic ? "الدراسة التالية" : "Next study"}><ArrowRight size={20} /></button>
    </div></div>
    <div className="research-photo-grid research-rail" ref={rail} tabIndex={0} aria-label={isArabic ? "اسحب لعرض المزيد من الدراسات" : "Scroll to see more studies"}>
      {items.map(([title, body], index) => <Link href={`/research/${studies[index].slug}`} className="research-photo-card" key={title}><div className="research-photo"><Image src={studies[index].image} alt={isArabic ? "صورة توضيحية مولدة بالذكاء الاصطناعي في بيئة إماراتية" : "AI-generated illustrative UAE wellness scene"} fill sizes="360px" /></div><div className="research-card-copy"><h3>{title}</h3><p>{body}</p><p className="research-card-fact">{facts[index]}</p><span className="card-link">{isArabic ? "اقرأ المزيد" : "Read more"}<ArrowUpRight size={20} /></span></div></Link>)}
    </div>
  </div>;
}
