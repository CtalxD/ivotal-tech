// app/components/LangSwitch.tsx
"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function LangSwitch() {
  const { locale, setLocale, dict } = useLang();
  return (
    <div className="lang" role="group" aria-label={dict.ui.langLabel}>
      <button type="button" lang="en" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
      <button type="button" lang="es" aria-pressed={locale === "es"} onClick={() => setLocale("es")}>ES</button>
    </div>
  );
}