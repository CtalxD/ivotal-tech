// app/i18n/LanguageProvider.tsx
"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dictionaries, isLocale, type Dict, type Locale } from "./dictionaries";

const STORAGE_KEY = "ivotal-locale";

type Ctx = { locale: Locale; dict: Dict; setLocale: (l: Locale) => void };
const LanguageContext = createContext<Ctx | null>(null);

function pickMeta(dict: Dict, pathname: string | null) {
  if (pathname?.startsWith("/services")) return dict.servicesMeta;
  if (pathname?.startsWith("/contact")) return dict.contactMeta;
  return dict.meta;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && isLocale(saved)) setLocaleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const meta = pickMeta(dictionaries[locale], pathname);
    document.documentElement.lang = locale;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [locale, pathname]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, dict: dictionaries[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}