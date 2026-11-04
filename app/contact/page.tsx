// app/contact/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact | Ivotal Technology",
  description:
    "Tell Ivotal Technology what you need to build. We reply with questions and a starting price.",
};

export default function ContactPage() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}