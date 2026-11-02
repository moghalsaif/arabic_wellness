"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export type Locale = "en" | "ar";

type LocaleContextValue = {
  locale: Locale;
  isArabic: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readLocale(): Locale {
  try { return window.localStorage.getItem("arabian-life-locale") === "ar" ? "ar" : "en"; }
  catch { return "en"; }
}
function subscribeLocale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("arabian-life-language", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("arabian-life-language", callback);
  };
}
function writeLocale(locale: Locale) {
  window.localStorage.setItem("arabian-life-locale", locale);
  window.dispatchEvent(new Event("arabian-life-language"));
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readLocale, () => "en" as Locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      isArabic: locale === "ar",
      setLocale: writeLocale,
      toggleLocale: () => writeLocale(locale === "en" ? "ar" : "en"),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}
