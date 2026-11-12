import { About } from "@/components/About";
import { ContactDetails, ContactForm } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { dict } from "@/content/i18n";
import type { Locale } from "@/content/types";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale; // validated in layout
  const t = dict[locale];
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-crimson focus:px-4 focus:py-2 focus:text-ink">
        {t.nav.about}
      </a>
      <Nav t={t} locale={locale} />
      <main>
        <Hero t={t} locale={locale} />
        <About t={t} locale={locale} />
        <Skills t={t} locale={locale} />
        <Experience t={t} locale={locale} />
        <Section id="projects" title={t.projects.title}>
          <Projects t={t} locale={locale} />
        </Section>
        <Section id="contact" title={t.contact.title}>
          <p className="max-w-2xl text-lg leading-relaxed text-paper/85">{t.contact.intro}</p>
          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_18rem]">
            <ContactForm t={t} />
            <ContactDetails t={t} locale={locale} />
          </div>
        </Section>
      </main>
      <Footer t={t} />
    </>
  );
}
