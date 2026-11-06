import { researchData } from "@/lib/research-data";

export function ResearchChart({ index, locale }: { index: number; locale: "en" | "ar" }) {
  const data = researchData[index];
  const ar = locale === "ar";
  return <section className="research-chart" id="study-data" aria-labelledby="study-data-heading">
    <h2 id="study-data-heading">{ar ? "النتائج بالأرقام" : "The findings, in figures"}</h2>
    <p>{ar ? "نسبة المشاركين المسجلين لكل مؤشر (%)" : "Participants recorded against each measure (%)"}</p>
    <div className="chart-legend">{data.groups[locale].map((label, i) => <span key={label}><i className={`series-${i}`} />{label}</span>)}</div>
    <div className="chart-rows">{data.rows.map(row => <div className="chart-row" key={row.en}><h3>{row[locale]}</h3>{row.values.map((value, i) => <div className="chart-value" key={i}><div className="chart-track"><div className={`chart-bar series-${i}`} style={{ width: `${value}%` }} /></div><span dir="ltr">{value}%<span className="sr-only"> — {data.groups[locale][i]}</span></span></div>)}</div>)}</div>
    <p className="chart-note">{data.note[locale]}</p>
    <details className="chart-table"><summary>{ar ? "عرض جدول البيانات" : "View the data table"}</summary><div><table><caption className="sr-only">{ar ? "قيم الرسم البياني بالنسب المئوية" : "Chart values in percent"}</caption><thead><tr><th scope="col">{ar ? "المؤشر" : "Measure"}</th>{data.groups[locale].map(g => <th key={g} scope="col">{g}</th>)}</tr></thead><tbody>{data.rows.map(row => <tr key={row.en}><th scope="row">{row[locale]}</th>{row.values.map((v,i) => <td key={i}>{v}%</td>)}</tr>)}</tbody></table></div></details>
  </section>;
}
