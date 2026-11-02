"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocale } from "./LocaleProvider";
import { leaders, studies, leaderBiographies } from "@/lib/page-data";
import { researchSections } from "@/lib/research-detail";
import { ResearchChart } from "./ResearchChart";
import { leadershipAdditionalSections, researchAdditionalSections } from "@/lib/source-expansions";
import { articleVisuals, studyDesignVisuals } from "@/lib/article-visuals";
import { ArticleVisual } from "./ArticleVisual";
import { ArticleIndex } from "./ArticleIndex";
import { documentResearchAdditions } from "@/lib/document-enrichment";

export function DetailPage({ kind, index }: { kind: "leadership" | "research"; index: number }) {
  const { locale, isArabic } = useLocale();
  const person = leaders[index];
  const study = studies[index];
  const isLeader = kind === "leadership";
  const title = isLeader ? person.name[locale] : study.title[locale];
  const image = isLeader ? person.image : study.image;
  const sections = isLeader ? [...leaderBiographies[locale][index], ...leadershipAdditionalSections[locale][index]] : [...researchSections[locale][index], ...researchAdditionalSections[locale][index], ...documentResearchAdditions[locale][index]];
  const related = isLeader ? leaders.map((p) => ({ slug: p.slug, image: p.image, title: p.name[locale], role: p.role[locale] })) : studies.map((s) => ({ slug: s.slug, image: s.image, title: s.title[locale], role: s.category[locale] }));

  return <main className={`detail-page detail-page--${kind}`}>
    <Header />
    <section className="detail-hero page-shell">
      <Link className="back-link" href={isLeader ? "/#who-we-are" : "/#research"}><ArrowLeft size={19} />{isArabic ? (isLeader ? "العودة إلى فريق القيادة" : "العودة إلى الأبحاث") : (isLeader ? "Back to leadership" : "Back to research")}</Link>
      <div className="detail-hero-grid">
        <div className="detail-title"><p className="detail-category">{isLeader ? person.role[locale] : study.category[locale]}</p><h1>{title}</h1><p className="detail-intro">{sections[0][1]}</p></div>
        <div className="detail-hero-image"><Image src={image} alt={isLeader ? title : (isArabic ? "صورة توضيحية لموضوع الدراسة" : "Illustrative photograph for this research topic")} fill priority sizes="(max-width: 780px) 92vw, 42vw" /></div>
      </div>
    </section>
    <section className="detail-body page-shell">
      <ArticleIndex items={sections.flatMap(([heading], i) => [{ id: `section-${i}`, label: heading }, ...(!isLeader && i === 2 ? [{ id: "study-data", label: isArabic ? "النتائج بالأرقام" : "Findings in figures" }] : [])])} isArabic={isArabic} researcher={!isLeader} />
      <article className="detail-article">
        {sections.map(([heading, ...paragraphs], i) => <Fragment key={heading}><section id={`section-${i}`}><h2>{heading}</h2>{paragraphs.map((p) => <p key={p}>{p}</p>)}{!isLeader && i === 0 && <ArticleVisual visual={studyDesignVisuals[index]} locale={locale} />}{isLeader && articleVisuals[`leader-${index}`]?.filter(v => v.after === i).map((visual,j) => <ArticleVisual key={j} visual={visual} locale={locale} />)}</section>{!isLeader && i === 2 && <ResearchChart index={index} locale={locale} />}</Fragment>)}
        {!isLeader && <p className="imagery-note">{isArabic ? "الصور مولدة بالذكاء الاصطناعي وتوضيحية، ولا تمثل المشاركين الفعليين أو موقع إجراء الدراسة." : "AI-generated images are illustrative and do not depict actual study participants or establish where the research took place."}</p>}
        {isLeader && <div className="profile-contact"><h2>{isArabic ? "تواصل مع أرابيان لايف" : "Connect with Arabian Life"}</h2><a href="mailto:info@arabianlife.org">info@arabianlife.org <ArrowUpRight size={20} /></a></div>}
      </article>
    </section>
    <section className="related-section section"><div className="page-shell"><h2>{isArabic ? (isLeader ? "تعرّف على بقية فريقنا" : "استكشف المزيد من الأبحاث") : (isLeader ? "Meet the rest of our leadership" : "Explore more research")}</h2><div className="related-grid">{related.filter((_, i) => i !== index).slice(0, 2).map((item) => <Link key={item.slug} href={`/${kind}/${item.slug}`} className="related-card"><div><Image src={item.image} alt={item.title} fill sizes="(max-width: 780px) 90vw, 40vw" /></div><p>{item.role}</p><h3>{item.title}<ArrowUpRight size={23} /></h3></Link>)}</div></div></section>
    <Footer />
  </main>;
}
