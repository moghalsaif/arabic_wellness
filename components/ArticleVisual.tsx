import type { ArticleVisualData } from "@/lib/article-visuals";
import type { Locale } from "./LocaleProvider";

export function ArticleVisual({ visual, locale, chapters }: { visual: ArticleVisualData; locale: Locale; chapters?: { heading: string }[] }) {
  return <figure className={`article-visual article-visual--${visual.type}`}>
    <figcaption>{visual.title[locale]}</figcaption>
    {visual.type === "table" && <>{visual.columns.length > 2 && <p className="article-table-hint">{locale === "ar" ? "اسحب أفقياً لعرض جميع الأعمدة" : "Swipe across to see all columns"}</p>}<div className="article-table-scroll" role="region" aria-label={visual.title[locale]} tabIndex={0}><table data-columns={visual.columns.length}><caption className="sr-only">{visual.title[locale]}</caption><thead><tr>{visual.columns.map((col,i) => <th scope="col" key={i}>{col[locale]}</th>)}</tr></thead><tbody>{visual.rows.map((row,i) => <tr key={i}>{row.map((cell,j) => j === 0 ? <th scope="row" key={j}>{cell[locale]}</th> : <td key={j}>{cell[locale]}</td>)}</tr>)}</tbody></table></div></>}
    {visual.type === "process" && <ol className="article-process">{visual.steps.map((step,i) => <li key={i}><span className="process-step-number" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><strong>{step.label[locale]}</strong><span>{step.description[locale]}</span></li>)}</ol>}
    {visual.type === "topics" && <dl className="article-topic-guide">{visual.groups.map(group => <div key={group.label.en}><dt>{group.label[locale]}</dt><dd>{group.chapters.map(i => <a key={i} href={`#chapter-${i}`}>{chapters?.[i]?.heading}<span aria-hidden="true">{locale === "ar" ? "↙" : "↘"}</span></a>)}</dd></div>)}</dl>}
    {visual.note && <p className="article-visual-note">{visual.note[locale]}</p>}
  </figure>;
}
