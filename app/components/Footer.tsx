// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";
import { useLang } from "../i18n/LanguageProvider";
import "../css/footer.css";

export default function Footer({ year }: { year: number }) {
  const { dict } = useLang();
  const f = dict.footer;

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>{f.blurb}</p>
        </div>

        <nav aria-label={f.services}>
          <h2>{f.services}</h2>
          <ul>
            <li><Link href="/#services">{f.links.websites}</Link></li>
            <li><Link href="/#services">{f.links.apps}</Link></li>
            <li><Link href="/#services">{f.links.software}</Link></li>
            <li><Link href="/#services">{f.links.design}</Link></li>
          </ul>
        </nav>

        <nav aria-label={f.company}>
          <h2>{f.company}</h2>
          <ul>
            <li><Link href="/#process">{f.links.how}</Link></li>
            <li><Link href="/#work">{f.links.work}</Link></li>
            <li><Link href="/#contact">{f.links.contact}</Link></li>
          </ul>
        </nav>

        <div>
          <h2>{f.language}</h2>
          <LangSwitch />
        </div>
      </div>

      <div className="container site-footer__base">
        <p>&copy; {year} Ivotal Technology. {f.rights}</p>
        <p>{f.prices}</p>
      </div>
    </footer>
  );
}