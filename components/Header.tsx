"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./Brand";
import { useLocale } from "./LocaleProvider";
import Link from "next/link";

function NavigationLinks({ arabic, onNavigate }: { arabic: boolean; onNavigate: () => void }) {
  const label = (en: string, ar: string) => arabic ? ar : en;
  const link = (href: string, en: string, ar: string) => <Link href={href} onClick={onNavigate}>{label(en, ar)}</Link>;
  return <>
    {link("/#who-we-are", "Who we are", "من نحن")}
    {link("/#partners", "Associates", "شركاؤنا")}
    {link("/longevity-model", "Our model", "نموذجنا")}
    <details className="nav-group" name="site-navigation"><summary>{label("What we do", "ماذا نقدم")}<ChevronDown size={14} /></summary><div className="nav-dropdown">
      {link("/#what-we-do", "Overview", "نظرة عامة")}
      {link("/programmes/corporate-health", "Corporate Health", "الصحة المؤسسية")}
      <details className="nav-subgroup"><summary>{label("Community Health", "صحة المجتمع")}<ChevronDown size={14} /></summary><div>
        {link("/programmes/community-health", "Community overview", "نظرة عامة على صحة المجتمع")}
        {link("/programmes/weight-loss-challenge", "Weight Loss Challenge", "تحدي إنقاص الوزن")}
        {link("/programmes/diabetes-challenge", "Diabetes Challenge", "تحدي السكري")}
      </div></details>
    </div></details>
    <details className="nav-group" name="site-navigation"><summary>{label("Research", "الأبحاث")}<ChevronDown size={14} /></summary><div className="nav-dropdown">
      {link("/#research", "All research", "جميع الأبحاث")}
      {link("/research/uae-industrial-health", "UAE Industrial Health", "صحة القطاع الصناعي الإماراتي")}
      {link("/research/urban-lifestyle", "Urban Lifestyle Study", "دراسة نمط الحياة الحضري")}
      <details className="nav-subgroup"><summary>{label("Lifestyle & Longevity", "نمط الحياة والديمومة الصحية")}<ChevronDown size={14} /></summary><div>
        {link("/research/child-vs-adult", "Child vs Adult", "الطفل مقارنة بالبالغ")}
        {link("/research/male-vs-female", "Male vs Female", "الرجل مقارنة بالمرأة")}
        {link("/research/ageing-and-health", "Ageing & Health", "التقدم في العمر والصحة")}
      </div></details>
    </div></details>
    <details className="nav-group" name="site-navigation"><summary>{label("Academia", "الأكاديمية")}<ChevronDown size={14} /></summary><div className="nav-dropdown">
      {link("/academia/lifestyle-medicine", "Lifestyle Medicine", "طب نمط الحياة")}
      {link("/academia/health-workshops", "Health Workshops", "ورش العمل الصحية")}
    </div></details>
    {link("/#contact", "Contact", "تواصل معنا")}
  </>;
}

export function Header() {
  const { isArabic, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeNavigation = () => {
    setMenuOpen(false);
    headerRef.current?.querySelectorAll("details[open]").forEach(el => el.removeAttribute("open"));
  };

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) setLanguageOpen(false);
      if (!headerRef.current?.contains(event.target as Node)) headerRef.current?.querySelectorAll("details[open]").forEach(el => el.removeAttribute("open"));
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header ref={headerRef} className="site-header" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"} onKeyDown={event => { if (event.key === "Escape") { closeNavigation(); setLanguageOpen(false); } }}>
      <div className="header-pill">
        <Brand />
        <nav className="desktop-nav" aria-label={isArabic ? "روابط الموقع" : "Site links"}>
          <NavigationLinks arabic={isArabic} onNavigate={closeNavigation} />
        </nav>
        <div className="header-actions">
          <div className="language-menu" ref={languageRef}>
            <button className="language-button" type="button" onClick={() => setLanguageOpen((value) => !value)} aria-expanded={languageOpen} aria-haspopup="listbox">
              {isArabic ? "العربية" : "English"}<ChevronDown size={17} aria-hidden="true" />
            </button>
            {languageOpen && (
              <div className="language-options" role="listbox" aria-label="Language">
                <button type="button" role="option" aria-selected={!isArabic} onClick={() => { setLocale("en"); setLanguageOpen(false); }}>English</button>
                <button type="button" role="option" aria-selected={isArabic} onClick={() => { setLocale("ar"); setLanguageOpen(false); }}>العربية</button>
              </div>
            )}
          </div>
          <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={isArabic ? (menuOpen ? "إغلاق القائمة" : "فتح القائمة") : (menuOpen ? "Close menu" : "Open menu")}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`} inert={!menuOpen} aria-hidden={!menuOpen}>
        <div>
          <NavigationLinks arabic={isArabic} onNavigate={closeNavigation} />
        </div>
      </div>
    </header>
  );
}
