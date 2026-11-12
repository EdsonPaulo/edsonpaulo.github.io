import type { Dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import type { Locale } from "@/content/types";
import { Section } from "./Section";

export function Skills({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <Section id="skills" title={t.skills.title}>
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.group.en} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="font-semibold">{g.group[locale]}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-lg border border-line bg-surface/60 px-2.5 py-1 text-sm text-paper/90">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-muted">{t.skills.education}</h3>
          <p className="mt-2 text-xl font-semibold">{profile.education.school[locale]}</p>
          <p className="text-paper/85">{profile.education.degree[locale]}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-muted">{t.skills.languages}</h3>
          <ul className="mt-2 space-y-1 text-xl">
            {profile.languages.map((l) => (
              <li key={l.en}>{l[locale]}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
