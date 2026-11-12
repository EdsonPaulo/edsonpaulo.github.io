import Link from "next/link";
import type { Dict } from "@/content/i18n";
import type { Locale } from "@/content/types";
import { MobileMenu } from "./MobileMenu";

export function Nav({ t, locale }: { t: Dict; locale: Locale }) {
  const other: Locale = locale === "en" ? "pt" : "en";
  const links = [
    ["about", t.nav.about],
    ["skills", t.nav.skills],
    ["experience", t.nav.work],
    ["projects", t.nav.projects],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-8">
        <a href="#top" className="text-2xl font-bold tracking-tight">
          E<span className="text-crimson">P</span>G
        </a>
        <ul className="ml-auto hidden gap-6 text-sm text-muted md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-paper">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href={`/${other}/`}
          hrefLang={other}
          lang={other}
          aria-label={t.nav.switchTo}
          title={t.nav.switchTo}
          className="ml-auto rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-crimson hover:text-paper md:ml-0"
        >
          <span className={locale === "pt" ? "text-paper" : ""}>PT</span>
          <span className="mx-1 text-line">/</span>
          <span className={locale === "en" ? "text-paper" : ""}>EN</span>
        </Link>
        <MobileMenu links={links} labels={{ open: t.nav.menu, close: t.nav.close }} />
      </nav>
    </header>
  );
}
