"use client";

import { useEffect, useRef, useState } from "react";

type IndexItem = { id: string; label: string };

export function ArticleIndex({ items, isArabic, researcher = false }: { items: IndexItem[]; isArabic: boolean; researcher?: boolean }) {
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    let disposed = false;
    const sections = items.map(item => ({ id: item.id, node: document.getElementById(item.id) })).filter(item => item.node);
    const update = () => {
      frame = 0;
      const readingLine = Math.min(220, window.innerHeight * .28);
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        if (section.node!.getBoundingClientRect().top <= readingLine) current = section.id;
      }
      setActive(previous => previous === current ? previous : current);
      const nav = navRef.current;
      const link = nav && [...nav.querySelectorAll<HTMLAnchorElement>("a")].find(a => a.hash === `#${current}`);
      if (nav && link) {
        if (markerRef.current) {
          markerRef.current.style.transform = `translate3d(0, ${link.offsetTop + (link.offsetHeight - 20) / 2}px, 0)`;
          markerRef.current.style.opacity = "1";
        }
        // Keep the active entry inside a long index without moving the document.
        const top = link.offsetTop;
        if (top < nav.scrollTop || top + link.offsetHeight > nav.scrollTop + nav.clientHeight) {
          nav.scrollTo({ top: Math.max(0, top - nav.clientHeight / 2), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }
      }
    };
    const schedule = () => { if (!frame && !disposed) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    const article = document.querySelector(".detail-article");
    if (article) observer.observe(article);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    document.fonts.ready.then(schedule);
    schedule();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [items]);

  return <aside className="detail-outline article-index">
    <h2>{isArabic ? "في هذه الصفحة" : "On this page"}</h2>
    <nav className="article-index-nav" ref={navRef} aria-label={isArabic ? "فهرس المقال" : "Article contents"}>
      <span className="article-index-marker" ref={markerRef} aria-hidden="true" />
      {items.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} className={active === item.id ? "is-active" : undefined}>{item.label}</a>)}
    </nav>
    {researcher && <p>{isArabic ? "الباحث: البروفيسور أدريان كينيدي" : "Research by Prof Adrian Kennedy"}</p>}
  </aside>;
}
