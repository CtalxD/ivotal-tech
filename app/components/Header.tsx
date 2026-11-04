// app/components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";
import { useLang } from "../i18n/LanguageProvider";
import "../css/header.css";

export default function Header() {
  const { dict } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [inProcess, setInProcess] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    setInProcess(false);
    if (pathname !== "/") return;
    const target = document.getElementById("process");
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => setInProcess(entry.isIntersecting), {
      rootMargin: "-30% 0px -50% 0px",
    });
    io.observe(target);
    return () => io.disconnect();
  }, [pathname]);

  const onHome = pathname === "/";
  const links = [
    { href: "/", label: dict.nav.home, active: onHome && !inProcess },
    { href: "/services", label: dict.nav.services, active: pathname.startsWith("/services") },
    { href: "/contact", label: dict.nav.contact, active: pathname.startsWith("/contact") },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Logo />

        <nav id="primary-nav" className={`site-nav${open ? " site-nav--open" : ""}`} aria-label={dict.ui.primaryNav}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={l.active ? "page" : undefined} onClick={close}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="site-nav__actions">
            <LangSwitch />
            <Link href="/contact" className="btn btn--primary" onClick={close}>{dict.nav.cta}</Link>
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