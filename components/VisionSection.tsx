"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export function VisionSection() {
  const { isArabic } = useLocale();
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="vision" className="vision-section">
      <div className="page-shell vision-grid">
        <div className="vision-visual">
          <div className="vision-visual__frame">
            <Image src="/images/leadership-vision.png" alt={isArabic ? "رمز للرؤية القيادية الوطنية" : "A symbolic representation of national leadership vision"} fill sizes="(max-width: 900px) 88vw, 42vw" />
          </div>
          <p>{isArabic ? "رؤية وطنية • ممارسة يومية" : "NATIONAL VISION • DAILY PRACTICE"}</p>
          <span className="vision-visual__seal" aria-hidden="true">∞</span>
        </div>

        <div className="vision-copy">
          <p className="section-index">{isArabic ? "٠١ — أصل الرسالة" : "01 — OUR ORIGIN"}</p>
          <h2>{isArabic ? <>رؤية <em>الخلود</em><br />وصحة المستقبل</> : <>The Vision<br />of <em>Longevity</em></>}</h2>
          <div className="vision-copy__rule" />
          <p className="vision-copy__lead">
            {isArabic
              ? "تأسست الخلود للمضي قدماً بمبادرة رائدة تجعل الوقاية أساساً لحياة أطول وأكثر صحة."
              : "Al-Kholood was founded to carry a landmark longevity initiative forward—making prevention the foundation of a longer, healthier life."}
          </p>
          <p>
            {isArabic
              ? "نترجم الاستراتيجية الصحية رفيعة المستوى إلى تقييم مبكر للمخاطر، وأهداف شخصية، وممارسات قابلة للتطبيق كل يوم. وبذلك نربط الطموح الوطني بصحة الأفراد ومرونة المؤسسات وازدهار المجتمعات."
              : "We translate high-level health strategy into early risk assessment, personal goals and practical daily habits—connecting national ambition with individual vitality, resilient workplaces and healthier communities."}
          </p>
          <a className="text-link" href="#model">
            <span>{isArabic ? "اكتشف نموذجنا" : "Discover our model"}</span>
            <Arrow size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
