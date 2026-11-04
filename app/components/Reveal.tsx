// app/components/Reveal.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Tag = "div" | "section" | "article" | "h1" | "h2" | "p" | "ul" | "ol" | "li";

// Fades and lifts an element in once it scrolls into view. The animation lives in css/home.css.
export default function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: Tag;
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
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = as as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`reveal${on ? " is-in" : ""} ${className}`.trim()}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}