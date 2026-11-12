import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiDocker,
  SiExpo,
  SiFigma,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
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

/**
 * Logo and brand colour per core-stack name; a name without an entry renders as text only.
 * Brands whose official colour is black (Next.js, Expo) use white so they stay visible on the dark page.
 */
const icons: Record<string, { Icon: IconType; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  Expo: { Icon: SiExpo, color: "#FFFFFF" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Stripe: { Icon: SiStripe, color: "#635BFF" },
  "AI / LLMs": { Icon: SiAnthropic, color: "#D97757" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  Java: { Icon: SiOpenjdk, color: "#F89820" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
};

/** How many items per group get the strong chip style; the rest read as supporting text. */
const TOP = 3;

export function Skills({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <Section id="skills" title={t.skills.title}>
      <h3 className="text-sm font-semibold text-muted">{t.skills.core}</h3>
      <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-6">
        {coreStack.map((name) => {
          const logo = icons[name];
          return (
            <li key={name} className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface/50 px-2 py-4 text-center">
              {logo && <logo.Icon aria-hidden className="size-7" style={{ color: logo.color }} />}
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
