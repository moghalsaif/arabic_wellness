"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { editorialPages, editorialHref } from "@/lib/programme-content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocale } from "./LocaleProvider";
import { ArticleVisual } from "./ArticleVisual";
import { articleVisuals } from "@/lib/article-visuals";
import { documentEditorialAdditions } from "@/lib/document-enrichment";
import { ArticleIndex } from "./ArticleIndex";

export function EditorialPage({ slug }: { slug: string }) {
  const { locale, isArabic } = useLocale();
  const page = editorialPages.find(p => p.slug === slug)!;
  const original = page[locale];
  const copy = { ...original, sections: [...original.sections, ...(documentEditorialAdditions[slug]?.[locale] ?? [])] };
  const visuals = articleVisuals[slug] ?? [];
  const back = page.group === "academia" ? "/#academia" : page.group === "model" ? "/#model" : "/#what-we-do";
  const related = editorialPages.filter(p => p.group === page.group && p.slug !== slug);
  return <main className="detail-page editorial-page">
    <Header />
    <section className="detail-hero page-shell">
      <Link className="back-link" href={back}><ArrowLeft size={19} />{isArabic ? "العودة إلى نظرة عامة" : "Back to overview"}</Link>
      <div className={page.image ? "detail-hero-grid" : "editorial-title-wide"}>
        <div className="detail-title"><p className="detail-category">{copy.category}</p><h1>{copy.title}</h1><p className="detail-intro">{copy.intro}</p></div>
        {page.image && <div className="detail-hero-image editorial-image"><Image src={page.image} alt={isArabic ? "صورة توضيحية للصحة والعافية في الإمارات" : "Illustrative UAE health and wellbeing scene"} fill priority sizes="(max-width: 780px) 92vw, 42vw" /></div>}
      </div>
      <ul className="editorial-facts">{copy.facts.map(f => <li key={f}>{f}</li>)}</ul>
    </section>
    <div className="detail-body page-shell">
      <ArticleIndex items={copy.sections.map((s,i) => ({ id: `chapter-${i}`, label: s.heading }))} isArabic={isArabic} />
      <article className="detail-article editorial-article">
        {visuals.filter(v => v.after === -1).map((visual,i) => <ArticleVisual key={`intro-${i}`} visual={visual} locale={locale} chapters={copy.sections} />)}
        {copy.sections.map((section,i) => <section id={`chapter-${i}`} key={section.heading}><p className="chapter-number">{String(i+1).padStart(2,"0")}</p><h2>{section.heading}</h2>{section.paragraphs?.map(p => <p key={p}>{p}</p>)}{section.items && !visuals.some(v => v.after === i && v.replaceItems) && <ul className="editorial-list">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}{visuals.filter(v => v.after === i).map((visual,j) => <ArticleVisual key={j} visual={visual} locale={locale} chapters={copy.sections} />)}</section>)}
        <div className="profile-contact"><h2>{isArabic ? "لنتحدث عن احتياجاتك" : "Let’s discuss what you need"}</h2><p>{isArabic ? "تواصل معنا للمعلومات الحالية وترتيبات المشاركة أو تقديم البرامج." : "Contact the team for current availability, participation and delivery arrangements."}</p><a href="mailto:info@arabianlife.org">info@arabianlife.org <ArrowUpRight size={20} /></a></div>
        {page.image && <p className="imagery-note">{isArabic ? "الصور توضيحية مولدة بالذكاء الاصطناعي، ولا تمثل مشاركين فعليين." : "AI-generated imagery is illustrative and does not depict actual participants."}</p>}
      </article>
    </div>
    {related.length > 0 && <section className="editorial-related section"><div className="page-shell"><h2>{isArabic ? "استكشف أيضاً" : "Continue exploring"}</h2><div>{related.map(p => <Link key={p.slug} href={editorialHref(p)}><span>{p[locale].category}</span><h3>{p[locale].title}<ArrowUpRight size={22} /></h3></Link>)}</div></div></section>}
    <Footer />
  </main>;
}
