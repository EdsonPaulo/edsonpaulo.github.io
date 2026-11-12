import type { Metadata } from "next";
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

function Heading({ children }: { children: string }) {
  return <h2 className="mb-2 mt-5 border-b border-[#16131a]/15 pb-1 text-[11pt] font-bold text-[#c8203a]">{children}</h2>;
}

export default async function CV({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = dict[locale];
  const featured = visibleProjects.filter((p) => p.featured);

  return (
    <main className="cv mx-auto my-8 max-w-[210mm] bg-white px-[14mm] py-[12mm] text-[9.5pt] leading-[1.45] text-[#16131a] print:my-0 print:max-w-none print:p-0">
      <header>
        <h1 className="text-[24pt] font-extrabold leading-none tracking-tight [font-stretch:80%]">{profile.name}</h1>
        <p className="mt-1 text-[12pt] font-semibold text-[#c8203a]">{profile.role[locale]}</p>
        <p className="mt-2 flex flex-wrap gap-x-4 text-[9pt] text-[#16131a]/70">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.phone}</span>
          <a href={profile.site}>{strip(profile.site)}</a>
          <a href={profile.socials.linkedin}>{strip(profile.socials.linkedin)}</a>
          <a href={profile.socials.github}>{strip(profile.socials.github)}</a>
          <span>{t.hero.available}</span>
        </p>
        <p className="mt-3">{profile.intro[locale]}</p>
      </header>

      <Heading>{t.work.title}</Heading>
      <ol className="space-y-3">
        {experience.map((role) => (
          <li key={role.company + role.period.en} className="break-inside-avoid">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold">
                {role.company} <span className="font-normal text-[#16131a]/70">/ {role.title[locale]}</span>
              </h3>
              <span className="shrink-0 text-[8.5pt] text-[#16131a]/60">{role.period[locale]}</span>
            </div>
            <p>
              <Rich text={role.summary[locale]} />
            </p>
            {role.points && (
              <ul className="mt-1 list-disc space-y-0.5 pl-4 marker:text-[#c8203a]">
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
            {role.stack && <p className="text-[8.5pt] text-[#16131a]/60">{role.stack}</p>}
          </li>
        ))}
      </ol>

      <Heading>{t.cv.projects}</Heading>
      <ul className="space-y-1.5">
        {featured.map((p) => (
          <li key={p.slug} className="break-inside-avoid">
            <span className="font-bold">{p.name}</span>
            {p.liveUrl && <a href={p.liveUrl} className="ml-2 text-[8.5pt] text-[#16131a]/60">{strip(p.liveUrl)}</a>}
            {p.status && <span className="ml-2 text-[8.5pt] text-[#16131a]/60">{p.status[locale]}</span>}
            <span className="block">{p.pitch[locale]}</span>
            <span className="block text-[8.5pt] text-[#16131a]/60">{p.stack.join(", ")}</span>
          </li>
        ))}
      </ul>

      <Heading>{t.skills.title}</Heading>
      <dl className="grid grid-cols-[8.5rem_1fr] gap-x-3 gap-y-1">
        {skills.map((g) => (
          <div key={g.group.en} className="contents">
            <dt className="font-semibold">{g.group[locale]}</dt>
            <dd>{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <div className="grid break-inside-avoid grid-cols-2 gap-6">
        <section>
          <Heading>{t.skills.education}</Heading>
          <p className="font-semibold">{profile.education.school[locale]}</p>
          <p>{profile.education.degree[locale]}</p>
        </section>
        <section>
          <Heading>{t.skills.languages}</Heading>
          <p>{profile.languages.map((l) => l[locale]).join(" · ")}</p>
        </section>
      </div>
    </main>
  );
}
