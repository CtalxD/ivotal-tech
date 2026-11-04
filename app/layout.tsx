// app/layout.tsx
import type { Metadata } from "next";
import { Familjen_Grotesk, Newsreader } from "next/font/google";
import { LanguageProvider } from "./i18n/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import { getYear } from "./components/year";
import "./globals.css";

const display = Familjen_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Newsreader({ subsets: ["latin"], axes: ["opsz"], variable: "--font-body", display: "swap" });

// English metadata for crawlers. LanguageProvider updates the title and description when the visitor switches language.
export const metadata: Metadata = {
  title: "Ivotal Technology | Websites, web apps and custom software",
  description:
    "Ivotal Technology is a remote development studio building websites, web applications and custom software for businesses across Mexico and Latin America. Websites from $400 USD.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const year = await getYear();

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <noscript>
          <style>{`.reveal,.reveal *{opacity:1!important;transform:none!important;clip-path:none!important}.curtain{display:none}`}</style>
        </noscript>
        <LanguageProvider>
          <div className="progress" aria-hidden="true" />
          <SkipLink />
          <Header />
          <main id="main">{children}</main>
          <Footer year={year} />
        </LanguageProvider>
      </body>
    </html>
  );
}