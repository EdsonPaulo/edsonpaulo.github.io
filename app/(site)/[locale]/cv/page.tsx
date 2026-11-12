import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FiGlobe, FiMail, FiPhone } from "react-icons/fi";
import { Rich } from "@/components/Rich";
import { experience } from "@/content/experience";
import { dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import { visibleProjects } from "@/content/projects";
import { skills } from "@/content/skills";
import type { Locale } from "@/content/types";

/** Printable CV built from the same content as the site; `npm run cv` turns it into public/cv/*.pdf. */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return { title: `${profile.shortName} — CV`, robots: { index: false }, alternates: { canonical: `/${locale}/cv/` } };
}

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");
/** Skills in the sidebar keep each group's most-used items (they are listed first in content/skills.ts). */
const SKILLS_PER_GROUP = 7;

function Heading({ children, className = "" }: { children: string; className?: string }) {
  return (
    <h2 className={`mb-2 flex items-center gap-2 text-[10.5pt] font-bold text-[#c8203a] ${className}`}>
      {children}
      <span aria-hidden className="h-px flex-1 bg-[#c8203a]/25" />
    </h2>
  );
}

function Contact({ href, icon, children }: { href: string; icon: ReactNode; children: string }) {
  return (
    <li>
      <a href={href} className="inline-flex items-center gap-1.5">
        <span className="text-[#c8203a]">{icon}</span>
        {children}
      </a>
    </li>
  );
}

const muted = "text-[#16131a]/60";

export default async function CV({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = dict[locale];
  const featured = visibleProjects.filter((p) => p.featured);

  return (
    <main className="cv mx-auto my-8 max-w-[210mm] bg-white px-[13mm] py-[11mm] text-[9pt] leading-[1.42] text-[#16131a] print:my-0 print:max-w-none print:p-0">
      <header className="flex items-end justify-between gap-6 border-b-2 border-[#c8203a] pb-3">
        <div>
          <h1 className="text-[26pt] font-extrabold leading-[0.95] tracking-tight [font-stretch:78%]">{profile.name}</h1>
          <p className="mt-1.5 text-[11.5pt] font-semibold text-[#c8203a]">{profile.role[locale]}</p>
          <p className={`mt-0.5 text-[8.5pt] ${muted}`}>{t.hero.available}</p>
        </div>
        <ul className="shrink-0 space-y-0.5 text-[8.5pt]">
          <Contact href={`mailto:${profile.email}`} icon={<FiMail />}>
            {profile.email}
          </Contact>
          <Contact href={`tel:${profile.phone.replace(/\s/g, "")}`} icon={<FiPhone />}>
            {profile.phone}
          </Contact>
          <Contact href={profile.site} icon={<FiGlobe />}>
            {strip(profile.site)}
          </Contact>
          <Contact href={profile.socials.linkedin} icon={<FaLinkedinIn />}>
            {strip(profile.socials.linkedin)}
          </Contact>
          <Contact href={profile.socials.github} icon={<FaGithub />}>
            {strip(profile.socials.github)}
          </Contact>
        </ul>
      </header>

      <dl className="mt-3 grid grid-cols-5 divide-x divide-[#16131a]/10 rounded-md bg-[#f6f2ef] py-2">
        {profile.stats.map((s) => (
          <div key={s.value + s.label.en} className="px-2.5">
            <dt className="sr-only">{s.label[locale]}</dt>
            <dd className="text-[15pt] font-extrabold leading-none text-[#c8203a] [font-stretch:80%]">{s.value}</dd>
            <dd className={`mt-1 text-[7pt] leading-tight ${muted}`}>{s.label[locale]}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 grid grid-cols-[1fr_58mm] gap-x-[7mm]">
        <div>
          <Heading>{t.cv.profile}</Heading>
          <p>{profile.intro[locale]}</p>

          <Heading className="mt-4">{t.work.title}</Heading>
          <ol className="space-y-3">
            {experience.map((role) => (
              <li key={role.company + role.period.en} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[10pt] font-bold">{role.company}</h3>
                  <span className={`shrink-0 text-[8pt] ${muted}`}>{role.period[locale]}</span>
                </div>
                <p className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold text-[#16131a]/80">{role.title[locale]}</span>
                  {role.url && (
                    <a href={role.url} className={`shrink-0 text-[8pt] ${muted}`}>
                      {strip(role.url)}
                    </a>
                  )}
                </p>
                <p className="mt-1">
                  <Rich text={role.summary[locale]} />
                </p>
                {role.points && (
                  <ul className="mt-1 list-disc space-y-0.5 pl-3.5 marker:text-[#c8203a]">
                    {role.points.map((p, i) => (
                      <li key={i}>
                        <Rich text={p[locale]} />
                      </li>
                    ))}
                  </ul>
                )}
                {role.products && (
                  <p className="mt-1">
                    <span className="font-semibold">{t.work.builtHere}:</span> {role.products.map((p) => p.name).join(", ")}.
                  </p>
                )}
                {role.stack && <p className={`mt-0.5 text-[8pt] ${muted}`}>{role.stack}</p>}
              </li>
            ))}
          </ol>
        </div>

        <aside className="self-start rounded-md [box-decoration-break:clone] [-webkit-box-decoration-break:clone] bg-[#f6f2ef] px-[4.5mm] py-[4mm] text-[8.25pt]">
          <Heading>{t.skills.title}</Heading>
          <dl className="space-y-1.5">
            {skills.map((g) => (
              <div key={g.group.en} className="break-inside-avoid">
                <dt className="font-bold">{g.group[locale]}</dt>
                <dd className="text-[#16131a]/80">{g.items.slice(0, SKILLS_PER_GROUP).join(", ")}</dd>
              </div>
            ))}
          </dl>

          <Heading className="mt-4">{t.skills.education}</Heading>
          <p className="font-bold">{profile.education.school[locale]}</p>
          <p className="text-[#16131a]/80">{profile.education.degree[locale]}</p>

          <Heading className="mt-4">{t.skills.languages}</Heading>
          <ul className="text-[#16131a]/80">
            {profile.languages.map((l) => (
              <li key={l.en}>{l[locale]}</li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="mt-5">
        <Heading>{t.cv.projects}</Heading>
        <ul className="grid grid-cols-2 gap-x-[7mm] gap-y-2.5">
          {featured.map((p) => (
            <li key={p.slug} className="break-inside-avoid border-l-2 border-[#c8203a]/40 pl-2.5">
              <p className="flex items-baseline justify-between gap-2">
                <span className="text-[9.5pt] font-bold">{p.name}</span>
                {p.liveUrl ? (
                  <a href={p.liveUrl} className={`truncate text-[7.5pt] ${muted}`}>
                    {strip(p.liveUrl)}
                  </a>
                ) : (
                  p.status && <span className={`text-[7.5pt] ${muted}`}>{p.status[locale]}</span>
                )}
              </p>
              <p>{p.pitch[locale]}</p>
              <p className={`mt-0.5 text-[7.5pt] ${muted}`}>{p.stack.join(", ")}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
