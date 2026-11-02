"use client";

import { Activity, HeartPulse, ScanLine, Target } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const steps = {
  en: [
    ["01", "Scan", "A rapid digital view of biological and lifestyle signals."],
    ["02", "Profile", "Clear insight into personal chronic-disease risk."],
    ["03", "Act", "Practical goals shaped around everyday life."],
    ["04", "Sustain", "Motivation and continuity that help healthy habits last."],
  ],
  ar: [
    ["٠١", "الفحص", "قراءة رقمية سريعة للمؤشرات الحيوية ونمط الحياة."],
    ["٠٢", "التقييم", "رؤية واضحة لمخاطر الأمراض المزمنة الشخصية."],
    ["٠٣", "التطبيق", "أهداف عملية مصممة لتناسب الحياة اليومية."],
    ["٠٤", "الاستدامة", "تحفيز ومتابعة لترسيخ العادات الصحية."],
  ],
};

const icons = [ScanLine, Activity, Target, HeartPulse];

export function ModelSection() {
  const { locale, isArabic } = useLocale();

  return (
    <section id="model" className="model-section">
      <div className="page-shell">
        <div className="model-heading">
          <div>
            <p className="section-index">{isArabic ? "٠٢ — نموذج الخلود" : "02 — THE LONGEVITY MODEL"}</p>
            <h2>{isArabic ? <>من العلاج التفاعلي<br />إلى <em>الحيوية الاستباقية</em></> : <>From reactive treatment<br />to <em>proactive vitality</em></>}</h2>
          </div>
          <p>{isArabic ? "رحلة واحدة متصلة تبدأ بالفهم وتنتهي بعادات صحية قابلة للاستمرار." : "One connected journey—from understanding risk to sustaining healthier daily choices."}</p>
        </div>
        <div className="model-steps">
          {steps[locale].map(([number, title, copy], index) => {
            const Icon = icons[index];
            return (
              <article key={title}>
                <div className="model-step__top"><span>{number}</span><Icon size={24} strokeWidth={1.4} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
