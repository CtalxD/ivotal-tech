// app/components/Reveal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "words" | "rise" | "line" | "mask";
type Tag = "div" | "section" | "article" | "h1" | "h2" | "p" | "ul" | "ol" | "li" | "figure";

// Adds "is-in" once the element scrolls into view. The animation itself lives in css/home.css.
export default function Reveal({
  as = "div",
  variant = "rise",
  delay = 0,
  className = "",
  children,
}: {
  as?: Tag;
  variant?: Variant;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = as as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`reveal reveal--${variant}${on ? " is-in" : ""} ${className}`.trim()}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}

// Splits a sentence into words that slide up out of a mask, one after another.
export function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i}>
          <span className="word">
            <span style={{ "--w": i } as React.CSSProperties}>{word}</span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}