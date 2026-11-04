// app/page.tsx
"use client";

import Reveal, { Words } from "./components/Reveal";
import { useLang } from "./i18n/LanguageProvider";
import "./css/home.css";

const tierKeys = ["a", "b", "c"];
const tierPrices = ["$400", "$1,000", "$1,500"];

// Replace with paths in /public (e.g. "/work/clinic.png") once the designs are ready.
const workImages = ["", "", ""];

export default function Home() {
  const { dict: t } = useLang();

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal as="h1" variant="words" delay={650}>
              <Words text={t.hero.title} />
            </Reveal>
            <Reveal as="p" variant="rise" delay={1150} className="hero__lede">{t.hero.lede}</Reveal>
            <Reveal variant="rise" delay={1300} className="hero__actions">
              <a className="btn btn--mint btn--lg" href="#contact">{t.hero.primary}</a>
              <a className="btn btn--outline btn--lg" href="#services">{t.hero.secondary}</a>
            </Reveal>
          </div>

          <figure className="stairs-wrap">
            <ul className="stairs" aria-label={t.hero.pricesLabel}>
              {t.hero.tiers.map((name, i) => (
                <li key={tierKeys[i]}>
                  <a className={`stairs__${tierKeys[i]}`} href="#services" style={{ ["--i" as string]: i }}>
                    <span className="stairs__name">{name}</span>
                    <span className="stairs__price">
                      <small>{t.ui.from}</small>
                      {tierPrices[i]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <figcaption>{t.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section__head">
            <Reveal as="h2" variant="words"><Words text={t.services.title} /></Reveal>
            <Reveal as="p" variant="rise" delay={200}>{t.services.intro}</Reveal>
          </div>
          <div className="services">
            {t.services.items.map((s, i) => (
              <Reveal as="article" variant="line" key={i} className="service">
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
                <ul className="ticks">
                  {s.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section section--dark">
        <div className="container">
          <div className="section__head">
            <Reveal as="h2" variant="words"><Words text={t.process.title} /></Reveal>
            <Reveal as="p" variant="rise" delay={200}>{t.process.intro}</Reveal>
          </div>
          <ol className="steps">
            {t.process.steps.map((s, i) => (
              <Reveal as="li" variant="line" delay={i * 140} key={i}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="section__head">
            <Reveal as="h2" variant="words"><Words text={t.work.title} /></Reveal>
            <Reveal as="p" variant="rise" delay={200}>{t.work.intro}</Reveal>
          </div>
          <div className="work">
            {t.work.kinds.map((kind, i) => (
              <Reveal as="figure" variant="mask" delay={i * 160} key={i} className="work__item">
                <div className="work__frame">
                  {workImages[i] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={workImages[i]} alt={`${t.work.projectName}, ${kind}`} />
                  ) : (
                    <span>{t.work.placeholder}</span>
                  )}
                </div>
                <figcaption>
                  <strong>{t.work.projectName}</strong>
                  <span>{kind}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta-band">
        <div className="container cta">
          <div>
            <Reveal as="h2" variant="words"><Words text={t.cta.title} /></Reveal>
            <Reveal as="p" variant="rise" delay={300}>{t.cta.text}</Reveal>
          </div>
          {/* Replace with your real address */}
          <Reveal variant="rise" delay={450}>
            <a className="btn btn--dark btn--lg" href="mailto:hello@ivotal.com">hello@ivotal.com</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}