import type { Dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import type { Locale } from "@/content/types";
import { Section } from "./Section";

export function About({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-paper/90">
        {profile.about.map((p, i) => (
          <p key={i}>{p[locale]}</p>
        ))}
      </div>
      <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-5">
        {profile.stats.map((s) => (
          <div key={s.value} className="border-l-2 border-crimson pl-4">
            <dt className="sr-only">{s.label[locale]}</dt>
            <dd className="text-5xl font-bold tracking-tight [font-stretch:80%]">{s.value}</dd>
            <dd className="mt-2 text-sm leading-snug text-muted">{s.label[locale]}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
