// app/components/Contact.tsx
"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import { serviceIds } from "../i18n/dictionaries";
import Pick, { type PickHandle } from "./Pick";
import "../css/contact.css";

const email = "evotaltechnologies@gmail.com";
const ids = serviceIds as readonly string[];

// Web3Forms access key from .env.local (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY)
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const budgets = [
  `${usd(400)} – ${usd(1000)}`,
  `${usd(1000)} – ${usd(2500)}`,
  `${usd(2500)} – ${usd(5000)}`,
  `${usd(5000)}+`,
];

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Step = CSSProperties & { "--i": number };
const step = (i: number): Step => ({ "--i": i });

// Splits a phrase into words so each one can drop into place in sequence.
function Say({ text, at }: { text: string; at: number }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word" style={step(at + i)}>
          {word}{" "}
        </span>
      ))}
    </>
  );
}

type Sent = { name: string; service: string; budget: string; email: string };

export default function Contact() {
  const { dict } = useLang();
  const c = dict.contact;
  const f = c.form;
  const requested = useSearchParams().get("service") ?? "";

  const [service, setService] = useState(ids.includes(requested) ? requested : "");
  const [budget, setBudget] = useState("");
  const [budgetError, setBudgetError] = useState(false);
  const [filled, setFilled] = useState({ name: false, email: false, phone: false, message: false });
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sent, setSent] = useState<Sent | null>(null);

  const budgetRef = useRef<PickHandle>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation so screen readers announce it.
  useEffect(() => {
    if (sent) thanksRef.current?.focus();
  }, [sent]);

  const serviceOptions = [
    { value: "", label: f.help },
    ...dict.services.items.map((s, i) => ({ value: serviceIds[i], label: lower(s.name) })),
  ];
  const budgetOptions = budgets.map((b) => ({ value: b, label: b }));

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget);
    const has = (k: string) => String(data.get(k) ?? "").trim().length > 0;
    setFilled({ name: has("name"), email: has("email"), phone: has("phone"), message: has("message") });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    // The custom dropdown can't use the browser's "required", so check it here.
    if (!budget) {
      setBudgetError(true);
      budgetRef.current?.open();
      return;
    }

    const data = new FormData(e.currentTarget);
    const index = ids.indexOf(service);
    const serviceName = index >= 0 ? dict.services.items[index].name : f.notSure;

    const summary: Sent = {
      name: String(data.get("name")),
      service: serviceName,
      budget: `${budget} USD`,
      email: String(data.get("email")),
    };

    setFailed(false);
    setSending(true);

    try {
      if (!ACCESS_KEY) throw new Error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY");

      // Let the paper plane fly for at least a moment while the request goes out.
      const [response] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: f.subject,
            from_name: "Ivotal Technology website",
            name: summary.name,
            email: summary.email, // Web3Forms uses this as the reply-to address
            phone: String(data.get("phone")),
            service: serviceName,
            budget: summary.budget,
            message: String(data.get("message")),
            botcheck: data.get("botcheck") ? true : false, // honeypot
          }),
        }),
        wait(900),
      ]);

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message ?? "Request failed");

      setSent(summary);
    } catch (error) {
      console.error("Contact form failed:", error);
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const again = () => {
    setSent(null);
    setService("");
    setBudget("");
    setBudgetError(false);
    setFailed(false);
    setFilled({ name: false, email: false, phone: false, message: false });
  };

  // Five required pieces: name, budget, email, phone, message.
  const progress = [filled.name, budget !== "", filled.email, filled.phone, filled.message];

  // Running word counter so the whole sentence reveals left to right.
  let n = 0;
  const say = (text: string) => {
    const at = n;
    n += text.split(" ").length;
    return <Say text={text} at={at} />;
  };
  const slot = () => step(n++);

  return (
    <section className="contact">
      <div className="container">
        <header className="contact__head">
          <h1>{c.title}</h1>
          <p className="contact__lede">{c.lede}</p>
        </header>

        {sent ? (
          <div className="thanks">
            <svg className="thanks__check" viewBox="0 0 80 80" width="88" height="88" aria-hidden="true">
              <circle cx="40" cy="40" r="36" pathLength={1} />
              <path d="M24 41l11 11 21-24" pathLength={1} />
            </svg>

            <h2 className="thanks__title" tabIndex={-1} ref={thanksRef}>
              {c.sent.title.replace("{name}", sent.name)}
            </h2>
            <p className="thanks__text">{c.sent.text}</p>

            <ul className="thanks__recap">
              {[sent.service, sent.budget, sent.email].map((item, i) => (
                <li key={i} style={step(i + 3)}>{item}</li>
              ))}
            </ul>

            <div className="thanks__actions">
              <button type="button" className="btn btn--primary btn--lg" onClick={again}>
                {c.sent.again}
              </button>
            </div>
          </div>
        ) : (
          <form className="letter" onSubmit={onSubmit} onChange={onChange}>
            <p className="letter__sentence">
              {say(f.hi)}
              <input
                className="blank blank--name"
                style={slot()}
                name="name"
                type="text"
                autoComplete="name"
                aria-label={f.name}
                placeholder={f.namePh}
                required
              />
              <span className="word" style={step(n++)}>. </span>
              {say(f.need)}
              <Pick
                label={f.service}
                value={service}
                options={serviceOptions}
                onChange={setService}
                style={slot()}
              />
              <span className="word" style={step(n++)}>. </span>
              {say(f.budgetLead)}
              <Pick
                ref={budgetRef}
                label={f.budget}
                value={budget}
                options={budgetOptions}
                placeholder={f.rangePick}
                invalid={budgetError && !budget}
                onChange={(v) => {
                  setBudget(v);
                  setBudgetError(false);
                }}
                style={slot()}
              />
              <span className="word" style={step(n++)}>. </span>
              {say(f.reach)}
              <input
                className="blank blank--email"
                style={slot()}
                name="email"
                type="email"
                autoComplete="email"
                aria-label={f.email}
                placeholder={f.emailPh}
                required
              />{" "}
              {say(f.orPhone)}
              <input
                className="blank blank--phone"
                style={slot()}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                minLength={7}
                aria-label={f.phone}
                placeholder={f.phonePh}
                required
              />
              <span className="word" style={step(n++)}>.</span>
            </p>

            {/* Fills in as the sentence is completed */}
            <div className="letter__progress" aria-hidden="true">
              {progress.map((on, i) => (
                <span key={i} data-on={on} />
              ))}
            </div>

            {/* Honeypot: hidden from people, bots tend to tick it */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            <div className="letter__more">
              <div className="field">
                <label htmlFor="c-message">{f.message}</label>
                <textarea id="c-message" name="message" rows={6} placeholder={f.placeholder} required />
              </div>

              <div>
                <h2 className="contact__sub">{c.listTitle}</h2>
                <ul className="contact__list">
                  {c.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="letter__send">
              <button
                type="submit"
                className={`btn btn--primary btn--lg send${sending ? " is-sending" : ""}`}
                disabled={sending}
              >
                <span>{f.send}</span>
                <svg className="send__plane" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d="M3 11.5 21 3l-8.5 18-2.3-7.2L3 11.5Z" fill="currentColor" />
                </svg>
              </button>
              <p className="contact__note">{f.hint} {dict.footer.prices}</p>
            </div>

            {failed && (
              <p className="contact__error" role="alert">
                {f.error}{" "}
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}
          </form>
        )}

        <div className="contact__direct">
          <p className="contact__label">{f.direct}</p>
          <a className="contact__mail" href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </section>
  );
}