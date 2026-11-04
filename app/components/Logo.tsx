// app/components/Logo.tsx
"use client";

import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";

export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 66" aria-hidden="true">
      <path className="logo_tile" d="M0 14 H27 L44 44 L68 28 L74 36 L46 64 Z" />
      <path
        className="logo_ball"
        d="M86 0 Q88 12 100 14 Q88 16 86 28 Q84 16 72 14 Q84 12 86 0Z"
      />
    </svg>
  );
}

export default function Logo() {
  const { dict } = useLang();
  return (
    <Link href="/" className="logo" aria-label={dict.ui.home}>
      <Mark />
      <span className="logo_name">
        ivotal<span> Technology</span>
      </span>
    </Link>
  );
}