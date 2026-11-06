"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export function Hero() {
  const { isArabic } = useLocale();
  return (
    <section className={`hero ${isArabic ? "hero--ar" : "hero--en"}`} id="top">
      <Image className="hero__image" src={isArabic ? "/images/hero-emirati.png" : "/images/hero-desert.png"} alt="" fill priority sizes="100vw" />
      <div className="hero__veil" />
      <div className="hero__content page-shell">
        <div className="hero__copy">
          <h1>{isArabic ? "إرثٌ صحي، مستلهمٌ من رؤية مشتركة" : "A Legacy of Health, Inspired by a shared Vision."}</h1>
          <p>{isArabic ? "حياة أطول تبدأ بصحة أفضل اليوم." : "Longer lives begin with better health today."}</p>
          <a className="button button--gold" href="#vision">{isArabic ? "اكتشف رؤيتنا" : "Explore our vision"}<ArrowDown size={19} aria-hidden="true" /></a>
        </div>
        <p className="hero__company">ARABIAN LIFE LONGEVITY HEALTHTECH DIFC LTD</p>
      </div>
    </section>
  );
}
