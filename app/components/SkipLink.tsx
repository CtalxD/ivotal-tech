// app/components/SkipLink.tsx
"use client";

import { useLang } from "../i18n/LanguageProvider";

export default function SkipLink() {
  const { dict } = useLang();
  return <a className="skip-link" href="#main">{dict.ui.skip}</a>;
}