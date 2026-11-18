"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { FiArrowUpRight, FiGithub, FiMaximize2 } from "react-icons/fi";
import type { Dict } from "@/content/i18n";
import { visibleProjects, type Project, type Tag } from "@/content/projects";
import type { Locale } from "@/content/types";

const galleryPriority = ["fila-livre", "phos-bot", "songsforge", "auravoy", "pageryn"];

const filters: ("all" | Tag)[] = ["all", "web", "mobile", "ai", "backend"];

function Links({ p, t }: { p: Project; t: Dict }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-crimson hover:underline">
          {t.projects.live}
          <FiArrowUpRight aria-hidden />
          <span className="sr-only">: {p.name}</span>
        </a>
      )}
      {p.repoUrl && (
        <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-paper">
          <FiGithub aria-hidden />
          {t.projects.code}
          <span className="sr-only">: {p.name}</span>
        </a>
      )}
    </div>
  );
}

function ProjectImage({ src, name, label }: { src: string; name: string; label: string }) {
  const id = useId();

  return (
    <>
      <button
        type="button"
        popoverTarget={id}
        aria-label={`${label}: ${name}`}
        className="relative mt-6 block w-full cursor-zoom-in rounded-2xl"
      >
        <Image src={src} alt="" width={1280} height={800} className="aspect-[16/9] w-full rounded-2xl object-cover object-top" />
        <span className="absolute right-2 bottom-2 rounded-full bg-ink/85 p-2 text-paper">
          <FiMaximize2 aria-hidden />
        </span>
      </button>
      <div
        id={id}
        popover="auto"
        className="pointer-events-none fixed inset-0 m-auto max-h-[86dvh] max-w-[min(92vw,72rem)] overflow-hidden rounded-xl border border-line bg-ink shadow-2xl shadow-black/70"
      >
        <Image src={src} alt={name} width={1280} height={800} className="h-auto max-h-[86dvh] w-auto max-w-full object-contain" />
      </div>
    </>
  );
}

function CaseStudy({ p, t, locale }: { p: Project; t: Dict; locale: Locale }) {
  const study = p.caseStudy;
  if (!study) return null;
  const sections = ["challenge", "role", "decision", "result"] as const;

  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
      <h4 className="text-3xl font-semibold tracking-tight">{p.name}</h4>
      <p className="mt-2 text-sm text-annot">{p.stack.join(", ")}</p>
      {p.image && (
        <ProjectImage src={p.image} name={p.name} label={t.projects.enlarge} />
      )}
      <dl className="mt-6 grid gap-5">
        {sections.map((section) => (
          <div key={section}>
            <dt className="text-sm font-semibold text-paper">{t.projects.caseLabels[section]}</dt>
            <dd className="mt-1 leading-relaxed text-muted">{study[section][locale]}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6">
        <Links p={p} t={t} />
      </div>
    </article>
  );
}

export function Projects({ t, locale }: { t: Dict; locale: Locale }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const match = (p: Project) => filter === "all" || p.tags.includes(filter);

  const cases = visibleProjects.filter((p) => p.caseStudy);
  const gallery = visibleProjects.filter((p) => !p.caseStudy && p.kind !== "archive" && match(p));
  const more = [
    ...galleryPriority.flatMap((slug) => gallery.filter((project) => project.slug === slug)),
    ...gallery.filter((project) => !galleryPriority.includes(project.slug)),
  ];
  const archive = visibleProjects.filter((p) => p.kind === "archive" && !p.caseStudy);

  return (
    <>
      <p className="max-w-2xl text-lg leading-relaxed text-paper/85">{t.projects.intro}</p>

      <h3 className="mt-10 text-2xl font-semibold tracking-tight">{t.projects.cases}</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((p) => <CaseStudy key={p.slug} p={p} t={t} locale={locale} />)}
      </div>

      <h3 id="project-gallery" className="mt-16 text-2xl font-semibold tracking-tight">{t.projects.more}</h3>
      <div role="group" aria-labelledby="project-gallery" className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-colors hover:text-paper aria-pressed:border-crimson aria-pressed:bg-crimson aria-pressed:text-ink"
          >
            {t.projects.filters[f]}
          </button>
        ))}
      </div>

      {more.length === 0 && <p className="mt-6 text-muted">{t.projects.empty}</p>}
      {more.length > 0 && (
        <ul className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {more.map((p) => (
            <li key={p.slug} className="border-t border-line pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <span className="shrink-0 text-sm text-muted">{p.status ? p.status[locale] : p.year}</span>
              </div>
              <p className="mt-2 leading-relaxed text-paper/85">{p.pitch[locale]}</p>
              <p className="mt-2 text-sm text-annot">{p.stack.join(", ")}</p>
              {(p.liveUrl || p.repoUrl) && (
                <div className="mt-3">
                  <Links p={p} t={t} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <h3 className="mt-20 text-2xl font-semibold tracking-tight">{t.projects.archive}</h3>
      <p className="mt-2 text-muted">{t.projects.archiveIntro}</p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {archive.map((p) => (
          <li key={p.slug} className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[3.5rem_11rem_1fr_auto] sm:items-baseline">
            <span className="text-sm text-muted">{p.year}</span>
            <span className="font-semibold">{p.name}</span>
            <span className="text-paper/80">
              {p.pitch[locale]} <span className="text-sm text-annot">{p.stack.join(", ")}</span>
            </span>
            <Links p={p} t={t} />
          </li>
        ))}
      </ul>
    </>
  );
}
