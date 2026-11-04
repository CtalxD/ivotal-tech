// app/services/page.tsx
"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";
import { serviceIds } from "../i18n/dictionaries";
import { landing } from "../i18n/landing";
import { tierPrices } from "../i18n/prices";
import "../css/home.css";
import "../css/services.css";

const pad = (i: number) => String(i + 1).padStart(2, "0");
const idList = serviceIds as readonly string[];

export default function ServicesPage() {
  const { dict: t, locale } = useLang();
  const s = t.svcPage;
  const items = t.services.items;
  const facts = landing[locale].facts;
  const [active, setActive] = useState(0);
  const lab = useRef<HTMLElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const i = idList.indexOf(window.location.hash.slice(1));
      if (i >= 0) setActive(i);
    };
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a");
      if (link && new URL(link.href, window.location.href).pathname === "/services") {
        window.setTimeout(fromHash, 100);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const select = (i: number) => {
    setActive(i);
    window.history.replaceState(null, "", `#${serviceIds[i]}`);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const steps: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = steps[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + items.length) % items.length;
    select(next);
    document.getElementById(`tab-${serviceIds[next]}`)?.focus();
  };

  const jumpTo = (i: number) => {
    select(i);
    lab.current?.scrollIntoView({ behavior: "smooth" });
  };

  const it = items[active];
  const price = tierPrices[active];

  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <h1>{t.services.title}</h1>
          <p className="svc-hero__lede">{t.services.intro}</p>
        </div>
      </section>

      <section ref={lab} className="svc-lab">
        <div className="container svc-lab__grid">
          <div className="svc-tabs" role="tablist" aria-label={t.services.jump} onKeyDown={onKeyDown}>
            {items.map((x, i) => (
              <button
                key={serviceIds[i]}
                type="button"
                role="tab"
                id={`tab-${serviceIds[i]}`}
                aria-selected={i === active}
                aria-controls={`panel-${serviceIds[i]}`}
                tabIndex={i === active ? 0 : -1}
                className="svc-tab"
                onClick={() => select(i)}
              >
                <span className="svc-tab__n" aria-hidden="true">{pad(i)}</span>
                <span className="svc-tab__name">{x.name}</span>
                <span className="svc-tab__price">
                  {tierPrices[i] ? `${t.ui.from} $${tierPrices[i].toLocaleString("en-US")}` : s.scoped}
                </span>
              </button>
            ))}
          </div>

          <div
            key={active}
            role="tabpanel"
            id={`panel-${serviceIds[active]}`}
            aria-labelledby={`tab-${serviceIds[active]}`}
            className="svc-sheet"
          >
            <header className="svc-sheet__head">
              <div>
                <h2>{it.name}</h2>
                <p className="svc-sheet__text">{it.text}</p>
              </div>
              <div className="svc-sheet__price">
                <span>{s.price}</span>
                <strong>
                  {price ? (
                    <>
                      <small>{t.ui.from}</small>
                      {`$${price.toLocaleString("en-US")}`}
                    </>
                  ) : (
                    s.scoped
                  )}
                </strong>
              </div>
            </header>

            <div className="svc-sheet__cols">
              <section className="svc-col svc-col--in">
                <h3>{s.includedLabel}</h3>
                <ul>
                  {it.items.map((x, j) => (
                    <li key={j}>{x}</li>
                  ))}
                </ul>
              </section>

              <section className="svc-col svc-col--extra">
                <h3>{s.extraLabel}</h3>
                <ul>
                  {s.extras[active].map((x, j) => (
                    <li key={j}>{x}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="svc-sheet__fit">
              <h3>{s.fit}</h3>
              <ul className="svc-fit">
                {s.fits[active].map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>

            <footer className="svc-sheet__foot">
              <p>{price ? s.priceNote : s.scopedNote}</p>
              <Link className="btn btn--primary" href={`/contact?service=${serviceIds[active]}`}>{s.start}</Link>
            </footer>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="head">
            <h2>{s.pickTitle}</h2>
            <p>{s.pickIntro}</p>
          </div>
          <ul className="svc-pick">
            {items.map((x, i) => (
              <li key={i}>
                <a
                  href={`#${serviceIds[i]}`}
                  className="svc-pick__card"
                  onClick={(e) => {
                    e.preventDefault();
                    jumpTo(i);
                  }}
                >
                  <span className="svc-pick__n" aria-hidden="true">{pad(i)}</span>
                  <h3>{x.name}</h3>
                  <p><strong>{s.pickIf}</strong> {s.pick[i].charAt(0).toLowerCase() + s.pick[i].slice(1)}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="head">
            <h2>{s.includedTitle}</h2>
            <p>{s.includedIntro}</p>
          </div>
          <ul className="svc-tickets">
            {facts.items.map((f, i) => (
              <li key={i} className="ticket">
                <span className="ticket__check" aria-hidden="true" />
                <p className="ticket__text">{f}</p>
                <span className="ticket__stub">{facts.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta">
          <h2>{t.cta.title}</h2>
          <div>
            <p>{t.cta.text}</p>
            <Link className="btn btn--primary btn--lg" href="/contact">{t.nav.cta}</Link>
          </div>
        </div>
      </section>
    </>
  );
}