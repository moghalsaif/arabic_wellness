"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export function AcademiaSection({ intro, workshops }: { intro: string; workshops: string[] }) {
  const { isArabic } = useLocale();
  return <section id="academia" className="academy-section" aria-labelledby="academy-heading">
    <div className="page-shell">
      <div className="academy-intro">
        <div><p className="academy-eyebrow">{isArabic ? "الأكاديمية" : "Academia"}</p><h2 id="academy-heading">{isArabic ? "المعرفة. ثم الممارسة." : "Knowledge. Put into practice."}</h2></div>
        <div className="academy-intro-copy"><p>{intro}</p><a className="academy-contact" href="mailto:info@arabianlife.org">{isArabic ? "ناقش برنامجاً" : "Discuss a programme"}<ArrowUpRight size={20} aria-hidden="true" /></a></div>
      </div>
      <div className="academy-content">
        <Link className="academy-photo" href="/academia/lifestyle-medicine">
          <Image src="/images/academia-workshop-uae.webp" alt={isArabic ? "مشهد توضيحي مولد بالذكاء الاصطناعي لورشة تثقيف صحي بمشاركة مهنيين عرب" : "AI-generated illustrative health education workshop with Arab professionals"} fill sizes="(max-width: 800px) 92vw, 55vw" />
          <div className="academy-photo-caption"><h3>{isArabic ? "طب نمط الحياة" : "Lifestyle Medicine"}</h3><span>{isArabic ? "استكشف البرامج" : "Explore the programmes"}<ArrowUpRight size={24} aria-hidden="true" /></span></div>
        </Link>
        <div className="academy-curriculum">
          <h3>{isArabic ? "ورش عمل مختارة" : "Signature workshops"}</h3>
          <ol className="academy-workshops">{workshops.map((item, index) => <li key={item}><span className="academy-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ol>
          <Link className="academy-all" href="/academia/health-workshops">{isArabic ? "استكشف جميع الورش الـ13" : "Explore all 13 workshops"}<ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  </section>;
}
