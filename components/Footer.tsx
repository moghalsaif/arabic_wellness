"use client";

import { Brand } from "./Brand";
import { useLocale } from "./LocaleProvider";
import Link from "next/link";

export function Footer() {
  const { isArabic } = useLocale();
  return (
    <footer className="site-footer">
      <div className="footer-sky" aria-hidden="true">
        <svg className="uae-flag" viewBox="0 0 180 410" role="presentation">
          <path className="flag-pole" d="M19 407V7" />
          <g className="flag-cloth">
            <path fill="#cf2334" d="M22 18h29v72H22z" />
            <path fill="#138b58" d="M51 18c35 0 55 14 98 5v24c-43 9-63-5-98-5z" />
            <path fill="#f6f5ef" d="M51 42c35 0 55 14 98 5v24c-43 9-63-5-98-5z" />
            <path fill="#11161a" d="M51 66c35 0 55 14 98 5v24c-43 9-63-5-98-5z" />
          </g>
        </svg>
        <svg className="footer-dunes" viewBox="0 0 1440 230" preserveAspectRatio="none" role="presentation">
          <path d="M0 84C170 44 265 51 425 83S660 108 810 78 1110 48 1250 76 1380 91 1440 77V230H0Z" />
        </svg>
      </div>
      <div className="footer-content">
        <div className="page-shell footer-inner">
          <div><Brand inverse /><p>{isArabic ? "حياة أطول تبدأ بصحة أفضل اليوم." : "Longer lives begin with better health today."}</p></div>
          <nav aria-label={isArabic ? "روابط التذييل" : "Footer links"}><Link href="/#vision">{isArabic ? "الرؤية" : "Vision"}</Link><Link href="/#who-we-are">{isArabic ? "من نحن" : "Who we are"}</Link><Link href="/#what-we-do">{isArabic ? "البرامج" : "Programmes"}</Link><Link href="/#research">{isArabic ? "الأبحاث" : "Research"}</Link><Link href="/#contact">{isArabic ? "تواصل معنا" : "Contact"}</Link></nav>
          <div className="socials">
            <a href="#contact" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.57 1.97 3.57 4.53v5.24Z" /></svg>
            </a>
            <a href="#contact" aria-label="Instagram">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="#contact" aria-label="YouTube">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path fillRule="evenodd" d="M21.58 6.19a2.51 2.51 0 0 0-1.77-1.78C18.25 4 12 4 12 4s-6.25 0-7.81.41a2.51 2.51 0 0 0-1.77 1.78A26.24 26.24 0 0 0 2 12c0 1.95.14 3.9.42 5.81a2.51 2.51 0 0 0 1.77 1.78C5.75 20 12 20 12 20s6.25 0 7.81-.41a2.51 2.51 0 0 0 1.77-1.78A26.24 26.24 0 0 0 22 12c0-1.95-.14-3.9-.42-5.81ZM10 15.5v-7l6 3.5-6 3.5Z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
        <div className="page-shell footer-base"><span>© 2026 ARABIAN LIFE LONGEVITY HEALTHTECH DIFC LTD</span><span>{isArabic ? "دبي، الإمارات العربية المتحدة" : "Dubai, United Arab Emirates"}</span></div>
      </div>
    </footer>
  );
}
