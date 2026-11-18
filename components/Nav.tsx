import Link from "next/link";
import type { Dict } from "@/content/i18n";
import type { Locale } from "@/content/types";
import { MobileMenu } from "./MobileMenu";

export function Nav({ t, locale }: { t: Dict; locale: Locale }) {
  const links = [
    ["about", t.nav.about],
    ["skills", t.nav.skills],
    ["experience", t.nav.work],
    ["projects", t.nav.projects],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8 lg:gap-6">
        <a href="#top" className="text-2xl font-bold tracking-tight">
          E<span className="text-crimson">P</span>G
        </a>
        <ul className="hidden items-center gap-4 text-sm text-muted md:flex lg:gap-6">
          {links.slice(0, -1).map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-paper">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-3">
          <div role="group" aria-label="Language" className="flex rounded-full border border-line p-0.5 text-xs font-semibold">
            {(["en", "pt"] as const).map((l) =>
              l === locale ? (
                <span key={l} aria-current="true" className="rounded-full bg-crimson px-2.5 py-1 text-ink">
                  {l.toUpperCase()}
                </span>
              ) : (
                <Link
                  key={l}
                  href={`/${l}/`}
                  // Keep the reader where they are; without this the router jumps to the bottom of the new page.
                  scroll={false}
                  hrefLang={l}
                  lang={l}
                  title={t.nav.switchTo}
                  className="rounded-full px-2.5 py-1 text-muted transition-colors hover:text-paper"
                >
                  {l.toUpperCase()}
                </Link>
              ),
            )}
          </div>
          <a href="#contact" className="hidden rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-crimson hover:text-crimson md:inline-flex">
            {t.nav.contact}
          </a>
          <MobileMenu links={links} labels={{ open: t.nav.menu, close: t.nav.close }} />
        </div>
      </nav>
    </header>
  );
}
