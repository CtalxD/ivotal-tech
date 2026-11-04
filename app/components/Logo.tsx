// app/components/Logo.tsx
"use client";

import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";

// Placeholder mark: a lowercase "i" (stem and dot) set beside a "V", inside a rounded tile.
export default function Logo() {
  const { dict } = useLang();
  return (
    <Link href="/" className="logo" aria-label={dict.ui.home}>
      <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
        <rect className="logo__tile" width="40" height="40" rx="12" />
        <circle className="logo__dot" cx="10.5" cy="11" r="3" />
        <rect className="logo__glyph" x="8.25" y="17" width="4.5" height="14" />
        <path className="logo__glyph logo__v" d="M17.5 16.5 L24 31 L30.5 16.5" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">ivotal</span>
        <span className="logo__sub">Technology</span>
      </span>
    </Link>
  );
}