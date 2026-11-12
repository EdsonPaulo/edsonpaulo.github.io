import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiExpo,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { Dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import { coreStack, skills } from "@/content/skills";
import type { Locale } from "@/content/types";
import { Section } from "./Section";

/** Logo per core-stack name; a name without one here renders as text only. */
const icons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Expo: SiExpo,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  "Tailwind CSS": SiTailwindcss,
  Stripe: SiStripe,
  "AI / LLMs": SiAnthropic,
  "Spring Boot": SiSpringboot,
  Figma: SiFigma,
};

/** How many items per group get the strong chip style; the rest read as supporting text. */
const TOP = 3;

export function Skills({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <Section id="skills" title={t.skills.title}>
      <h3 className="text-sm font-semibold text-muted">{t.skills.core}</h3>
      <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-6">
        {coreStack.map((name) => {
          const Icon = icons[name];
          return (
            <li key={name} className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface/50 px-2 py-4 text-center">
              {Icon && <Icon aria-hidden className="size-7 text-paper" />}
              <span className="text-xs font-medium text-paper/85">{name}</span>
            </li>
          );
        })}
      </ul>

      <dl className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((g) => (
          <div key={g.group.en} className="rounded-2xl border border-line p-5">
            <dt className="font-semibold">{g.group[locale]}</dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-1.5">
                {g.items.slice(0, TOP).map((item) => (
                  <li key={item} className="rounded-lg border border-paper/20 bg-paper/5 px-2.5 py-1 text-sm text-paper">
                    {item}
                  </li>
                ))}
              </ul>
              {g.items.length > TOP && <p className="mt-3 text-sm leading-relaxed text-muted">{g.items.slice(TOP).join(", ")}</p>}
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
