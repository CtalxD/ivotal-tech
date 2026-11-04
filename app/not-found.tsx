// app/not-found.tsx
"use client";

import Link from "next/link";
import { useLang } from "./i18n/LanguageProvider";
import "./css/not-found.css";

// Replaces Next.js's built-in 404 page, which injects its own black page styles.
export default function NotFound() {
  const { dict } = useLang();
  const t = dict.notFound;

  return (
    <section className="nf">
      <div className="container nf__inner">
        <p className="nf__code" aria-hidden="true">404</p>
        <h1>{t.title}</h1>
        <p className="nf__text">{t.text}</p>
        <Link href="/" className="btn btn--primary btn--lg">{t.button}</Link>
      </div>
    </section>
  );
}