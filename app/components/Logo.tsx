// app/components/Logo.tsx
"use client";

import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";

// Mark: a rounded square with a V cut into its top edge and a ball resting where the V closes.
// The V is the "V" of ivotal, the ball is the "i" dot and the pivot the studio turns on.
export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path
        className="logo__tile"
        d="M7 0H25A7 7 0 0 1 32 7V25A7 7 0 0 1 25 32H7A7 7 0 0 1 0 25V7A7 7 0 0 1 7 0Z"
      />
      <path className="logo__wedge" d="M7.5 -2L24.5 -2L16 17Z" />
      <circle className="logo__ball" cx="16" cy="7.2" r="3.8" />
    </svg>
  );
}

export default function Logo() {
  const { dict } = useLang();
  return (
    <Link href="/" className="logo" aria-label={dict.ui.home}>
      <Mark />
      <span className="logo__name">
        ivotal<span> Technology</span>
      </span>
    </Link>
  );
}