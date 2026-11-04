// app/page.tsx
"use client";

import Link from "next/link";
import Reveal from "./components/Reveal";
import Quote from "./components/Quote";
import { useLang } from "./i18n/LanguageProvider";
import { serviceIds } from "./i18n/dictionaries";
import { landing } from "./i18n/landing";
import { tierPrices } from "./i18n/prices";
import "./css/home.css";

export default function Home() {
  const { dict: t, locale } = useLang();
  const l = landing[locale];
  const items = t.services.items;

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <Reveal as="h1" delay={0}>{t.hero.title}</Reveal>
              <Reveal as="p" delay={120} className="hero__lede">{t.hero.lede}</Reveal>
              <Reveal delay={240} className="hero__actions">
                <Link className="btn btn--primary btn--lg" href="/contact">{t.hero.primary}</Link>
                <Link className="btn btn--outline btn--lg" href="/services">{t.hero.secondary}</Link>
              </Reveal>
            </div>

            <Quote
              label={t.hero.pricesLabel}
              names={t.hero.tiers}
              texts={t.hero.tierText}
              lists={items.slice(0, 3).map((s) => s.items)}
              prices={tierPrices}
              from={t.ui.from}
              caption={t.hero.caption}
              stamp={l.facts.items[0]}
            />
          </div>
        </div>
      </section>

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

      <section id="services" className="section section--surface">
        <div className="container">
          <div className="head">
            <h2>{t.services.title}</h2>
            <p>{t.services.intro}</p>
          </div>

          <ul className="svc-cards">
            {items.map((s, i) => (
              <li key={i}>
                <Link href={`/services#${serviceIds[i]}`} className="svc-card">
                  <span className="svc-card__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <span className="svc-card__more">
                    {t.services.more} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link className="btn btn--primary btn--lg svc-all" href="/services">{t.services.all}</Link>
        </div>
      </section>

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
                    {`$${tierPrices[i].toLocaleString("en-US")}`}
                  </div>
                  <Link className="tier__link" href="/contact">{t.hero.primary}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

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