// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";
import { useLang } from "../i18n/LanguageProvider";
import "../css/header.css";

export default function Header() {
  const { dict } = useLang();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: "/#services", label: dict.nav.services },
    { href: "/#process", label: dict.nav.process },
    { href: "/#work", label: dict.nav.work },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Logo />

        <nav id="primary-nav" className={`site-nav${open ? " site-nav--open" : ""}`} aria-label={dict.ui.primaryNav}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={close}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="site-nav__actions">
            <LangSwitch />
            <Link href="/#contact" className="btn btn--mint" onClick={close}>{dict.nav.cta}</Link>
          </div>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? dict.ui.menuClose : dict.ui.menuOpen}</span>
          <span className="menu-btn__bars" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}