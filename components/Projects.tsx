"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Dict } from "@/content/i18n";
import { visibleProjects, type Project, type Tag } from "@/content/projects";
import type { Locale } from "@/content/types";

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

function Cover({ p }: { p: Project }) {
  if (p.image)
    return (
      <Image src={p.image} alt="" width={1280} height={800} className="aspect-[16/10] w-full object-cover object-top" />
    );
  return (
    <div aria-hidden className="grid aspect-[16/10] w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#2c2533,transparent_60%)]">
      <span className="text-6xl font-extrabold tracking-tight text-line [font-stretch:75%]">{p.name}</span>
    </div>
  );
}

function FeaturedCard({ p, t, locale }: { p: Project; t: Dict; locale: Locale }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface/60">
      <div className="overflow-hidden border-b border-line">
        <Cover p={p} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
          <span className="shrink-0 text-sm text-muted">{p.status ? p.status[locale] : p.year}</span>
        </div>
        <p className="mt-3 leading-relaxed text-paper/85">{p.pitch[locale]}</p>
        <p className="mt-4 text-sm leading-relaxed text-annot">{p.stack.join(", ")}</p>
        <div className="mt-auto pt-6">
          <Links p={p} t={t} />
        </div>
      </div>
    </article>
  );
}

export function Projects({ t, locale }: { t: Dict; locale: Locale }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const match = (p: Project) => filter === "all" || p.tags.includes(filter);

  const featured = visibleProjects.filter((p) => p.featured && match(p));
  const more = visibleProjects.filter((p) => !p.featured && p.kind !== "archive" && match(p));
  const archive = visibleProjects.filter((p) => p.kind === "archive");

  return (
    <>
      <p className="max-w-2xl text-lg leading-relaxed text-paper/85">{t.projects.intro}</p>

      <div role="group" aria-label={t.projects.title} className="mt-8 flex flex-wrap gap-2">
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

      {featured.length + more.length === 0 && <p className="mt-10 text-muted">{t.projects.empty}</p>}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {featured.map((p) => (
          <FeaturedCard key={p.slug} p={p} t={t} locale={locale} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <h3 className="mt-20 text-2xl font-semibold tracking-tight">{t.projects.more}</h3>
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
        </>
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
