// app/components/Contact.tsx
"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "../i18n/LanguageProvider";
import { serviceIds } from "../i18n/dictionaries";
import "../css/contact.css";

const email = "hello@ivotal.com";

export default function Contact() {
  const { dict } = useLang();
  const c = dict.contact;
  const f = c.form;
  const requested = useSearchParams().get("service") ?? "";
  const [service, setService] = useState(
    (serviceIds as readonly string[]).includes(requested) ? requested : ""
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const index = (serviceIds as readonly string[]).indexOf(service);
    const serviceName = index >= 0 ? dict.services.items[index].name : f.notSure;

    const body = [
      `${f.name}: ${data.get("name")}`,
      `${f.email}: ${data.get("email")}`,
      `${f.service} ${serviceName}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact">
      <div className="container contact__grid">
        <div>
          <h1>{c.title}</h1>
          <p className="contact__lede">{c.lede}</p>

          <h2 className="contact__sub">{c.listTitle}</h2>
          <ul className="contact__list">
            {c.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <p className="contact__label">{f.direct}</p>
          <a className="contact__mail" href={`mailto:${email}`}>{email}</a>
        </div>

        <form className="contact__card" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="c-name">{f.name}</label>
            <input id="c-name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="field">
            <label htmlFor="c-email">{f.email}</label>
            <input id="c-email" name="email" type="email" autoComplete="email" required />
          </div>

          <div className="field">
            <label htmlFor="c-service">{f.service}</label>
            <select id="c-service" value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">{f.notSure}</option>
              {dict.services.items.map((s, i) => (
                <option key={serviceIds[i]} value={serviceIds[i]}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="c-message">{f.message}</label>
            <textarea id="c-message" name="message" rows={6} placeholder={f.placeholder} required />
          </div>

          <button type="submit" className="btn btn--primary btn--lg">{f.send}</button>
          <p className="contact__note">{f.hint} {dict.footer.prices}</p>
        </form>
      </div>
    </section>
  );
}