import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Analytics from "@/components/Analytics";
import WhatsApp from "@/components/WhatsApp";
import { dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import { coreStack } from "@/content/skills";
import { isLocale, locales } from "@/content/types";
import "../../globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], axes: ["wdth"], variable: "--font-bricolage", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export const viewport: Viewport = { themeColor: "#16131a" };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dict[locale];
  return {
    metadataBase: new URL(profile.site),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${locale}/`, languages: { en: "/en/", pt: "/pt/", "x-default": "/en/" } },
    openGraph: {
      type: "profile",
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}/`,
      locale: locale === "pt" ? "pt_PT" : "en_US",
      alternateLocale: locale === "pt" ? "en_US" : "pt_PT",
      siteName: profile.shortName,
      images: [{ url: "/img/edson.jpg", width: 816, height: 994, alt: profile.name }],
    },
    twitter: { card: "summary", title: t.meta.title, description: t.meta.description, images: ["/img/edson.jpg"] },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [profile.shortName, "Edson Paulo"],
  jobTitle: "Senior Software Engineer & Tech Lead",
  worksFor: { "@type": "Organization", name: "sheerME", url: "https://sheerme.com" },
  address: { "@type": "PostalAddress", addressLocality: "Luanda", addressCountry: "AO" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Católica de Angola" },
  knowsAbout: coreStack,
  knowsLanguage: ["pt", "en"],
  url: profile.site,
  image: `${profile.site}/img/edson.jpg`,
  sameAs: Object.values(profile.socials),
};

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale === "pt" ? "pt" : "en"} className={`${bricolage.variable} ${caveat.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
        <WhatsApp locale={locale} />
        <Analytics />
        {process.env.VERCEL === "1" && <VercelAnalytics />}
      </body>
    </html>
  );
}
