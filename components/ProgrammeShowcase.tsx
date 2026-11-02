"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export function ProgrammeShowcase({ heading, programmes }: { heading: string; programmes: string[][] }) {
  const { isArabic } = useLocale();
  const scenes = [
    { slug: "corporate-health", image: "/images/programme-corporate-uae.webp", label: isArabic ? "بيئات عمل أكثر صحة" : "Healthier workplaces" },
    { slug: "community-health", image: "/images/programme-community-uae.webp", label: isArabic ? "مجتمعات أكثر حيوية" : "Stronger communities" },
  ];
  const descriptions = isArabic
    ? ["تقييم صحي وإرشاد شخصي ودعم على مدار العام لفرق عمل أكثر صحة.", "تحديات لمدة ثلاثة أشهر تدعم العادات الصحية للأفراد والعائلات."]
    : ["Health assessments, personal guidance and year-round support for healthier teams.", "Three-month challenges supporting healthier habits for individuals and families."];
  return <section id="what-we-do" className="programme-showcase" aria-labelledby="programme-showcase-heading">
    <h2 id="programme-showcase-heading" className="sr-only">{heading}</h2>
    <div className="programmes-split">
      {scenes.map((scene,index) => <Link key={scene.slug} className={`programme-scene programme-scene--${index + 1}`} href={`/programmes/${scene.slug}`} aria-labelledby={`showcase-title-${index}`} aria-describedby={`showcase-description-${index}`}>
        <Image src={scene.image} alt="" fill sizes="(max-width: 560px) 94vw, (max-width: 800px) 520px, (max-width: 1104px) 47vw, 520px" className="programme-scene-image" />
        <div className="programme-scene-shade" aria-hidden="true" />
        <div className="programme-glass">
          <p className="programme-scene-label">{scene.label}</p>
          <h3 id={`showcase-title-${index}`}>{programmes[index][0]}</h3>
          <p id={`showcase-description-${index}`} className="programme-scene-description">{descriptions[index]}</p>
          <span className="programme-scene-action"><span>{isArabic ? "استكشف البرنامج" : "Explore the programme"}</span><ArrowUpRight size={22} aria-hidden="true" /></span>
        </div>
      </Link>)}
    </div>
  </section>;
}
