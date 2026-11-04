// app/services/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Ivotal Technology",
  description:
    "Websites, web applications, custom software and interface design from Ivotal Technology, a remote studio working across Mexico and Latin America.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}