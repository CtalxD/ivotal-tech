// app/components/Quote.tsx
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

function useCountUp(target: number) {
  const [value, setValue] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = target;
      setValue(target);
      return;
    }
    const start = from.current;
    const t0 = performance.now();
    const duration = 600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(start + (target - start) * eased);
      from.current = v;
      setValue(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return value;
}

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Quote({
  label,
  names,
  texts,
  lists,
  prices,
  from,
  caption,
  stamp,
}: {
  label: string;
  names: string[];
  texts: string[];
  lists: string[][];
  prices: number[];
  from: string;
  caption: string;
  stamp: string;
}) {
  const [i, setI] = useState(0);
  const shown = useCountUp(prices[i]);

  return (
    <div className="quote">
      <span className="quote__stamp" aria-hidden="true">{stamp}</span>

      <fieldset className="quote__pick">
        <legend className="quote__label">{label}</legend>
        <div className="quote__chips">
          {names.map((n, k) => (
            <label key={k} className="quote__chip">
              <input
                type="radio"
                name="quote-tier"
                className="sr-only"
                checked={i === k}
                onChange={() => setI(k)}
              />
              <span>{n}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div key={i} className="quote__body">
        <p className="quote__text">{texts[i]}</p>
        <ul className="quote__list">
          {lists[i].map((it, j) => (
            <li key={j} style={{ "--n": j } as CSSProperties}>{it}</li>
          ))}
        </ul>
      </div>

      <div className="quote__tear" aria-hidden="true" />

      <div className="quote__foot">
        <p className="sr-only" aria-live="polite">{names[i]}: {from} {usd(prices[i])}</p>
        <div className="quote__price" aria-hidden="true">
          <small>{from}</small>
          {usd(shown)}
        </div>
        <p className="quote__caption">{caption}</p>
        <div className="quote__bars" aria-hidden="true" />
      </div>
    </div>
  );
}