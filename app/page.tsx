// app/page.tsx
"use client";

import { useRef, useState } from "react";
import Reveal from "./components/Reveal";
import Scene from "./components/Scene";
import Preview, { type PreviewName } from "./components/Preview";
import { useLang } from "./i18n/LanguageProvider";
import { landing } from "./i18n/landing";
import "./css/home.css";

const tierPrices = ["$400", "$1,000", "$1,500"];

// One picture per service, in the same order as the dictionary
const previews: PreviewName[] = ["web", "app", "software", "design"];

export default function Home() {
  const { dict: t, locale } = useLang();
  const l = landing[locale];
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = t.services.items;
  const current = items[active];

  // Arrow keys, Home and End move between tabs, as people expect from a tab list
  function onTabKey(e: React.KeyboardEvent, i: number) {
    const n = items.length;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      {/* 1. Hero: outcome, one main action, proof of the work, and the facts that remove doubt */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <Reveal as="h1" delay={0}>{t.hero.title}</Reveal>
              <Reveal as="p" delay={120} className="hero__lede">{t.hero.lede}</Reveal>
              <Reveal delay={240} className="hero__actions">
                <a className="btn btn--primary btn--lg" href="#contact">{t.hero.primary}</a>
                <a className="btn btn--outline btn--lg" href="#services">{t.hero.secondary}</a>
              </Reveal>
            </div>
            <Scene />
          </div>

          <ul className="facts" aria-label={l.facts.label}>
            {l.facts.items.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Why: the reasons to pick this studio */}
      <section className="section">
        <div className="container">
          <div className="head">
            <h2>{l.why.title}</h2>
            <p>{l.why.intro}</p>
          </div>
          <div className="why">
            {l.why.items.map((w, i) => (
              <article key={i}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="section section--surface">
        <div className="container">
          <div className="head">
            <h2>{t.services.title}</h2>
            <p>{t.services.intro}</p>
          </div>

          <div className="svc">
            <div className="tabs" role="tablist" aria-label={t.services.title} aria-orientation="vertical">
              {items.map((s, i) => (
                <button
                  key={i}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  id={`tab-${i}`}
                  type="button"
                  role="tab"
                  className="tab"
                  aria-selected={active === i}
                  aria-controls="svc-panel"
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  {s.name}
                </button>
              ))}
            </div>

            <div key={active} id="svc-panel" role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0} className="panel">
              <div>
                <h3>{current.name}</h3>
                <p className="panel__text">{current.text}</p>
                <ul className="panel__list">
                  {current.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
              <Preview name={previews[active]} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prices: steps rise and darken with scope */}
      <section id="prices" className="section section--tint">
        <div className="container">
          <div className="head">
            <h2>{t.hero.pricesLabel}</h2>
            <p>{t.hero.caption}</p>
          </div>
          <ul className="tiers">
            {t.hero.tiers.map((name, i) => (
              <li key={i} className={`tier tier--${i + 1}`}>
                <div>
                  <h3 className="tier__name">{name}</h3>
                  <p className="tier__text">{t.hero.tierText[i]}</p>
                </div>
                <div>
                  <div className="tier__price">
                    <small>{t.ui.from}</small>
                    {tierPrices[i]}
                  </div>
                  <a className="tier__link" href="#contact">{t.hero.primary}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Process: a real sequence, so numbered and joined by a rail */}
      <section id="process" className="section section--deep">
        <div className="container">
          <div className="head">
            <h2>{t.process.title}</h2>
            <p>{t.process.intro}</p>
          </div>
          <ol className="steps">
            {t.process.steps.map((s, i) => (
              <li key={i}>
                <span className="steps__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Questions: clears the last doubts before the final action */}
      <section id="faq" className="section">
        <div className="container faq">
          <div className="faq__intro">
            <h2>{l.faq.title}</h2>
            <p>{l.faq.intro}</p>
          </div>
          <div>
            {l.faq.items.map((f, i) => (
              <details className="qa" key={`${locale}-${i}`}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final action */}
      <section id="contact" className="cta-band">
        <div className="container cta">
          <h2>{t.cta.title}</h2>
          <div>
            <p>{t.cta.text}</p>
            {/* Replace with your real address */}
            <a className="btn btn--primary btn--lg" href="mailto:hello@ivotal.com">hello@ivotal.com</a>
          </div>
        </div>
      </section>
    </>
  );
}