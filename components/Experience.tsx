import type { Dict } from "@/content/i18n";
import { experience } from "@/content/experience";
import type { Locale } from "@/content/types";
import { Section } from "./Section";

export function Experience({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <Section id="experience" title={t.work.title}>
      <ol className="relative border-l border-line">
        {experience.map((role, i) => (
          <li key={role.company + role.period.en} className="relative pb-14 pl-8 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-2 size-3.5 rounded-full border-2 ${i === 0 ? "border-crimson bg-crimson" : "border-line bg-ink"}`}
            />
            <p className="text-sm text-muted">{role.period[locale]}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight">
              {role.company}
              <span className="font-normal text-muted"> / {role.title[locale]}</span>
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-paper/85">{role.summary[locale]}</p>
            {role.stack && <p className="mt-2 text-sm text-annot">{role.stack}</p>}

            {role.points && (
              <ul className="mt-5 max-w-2xl space-y-3 text-paper/85">
                {role.points.map((p, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed">
                    <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-crimson" />
                    {p[locale]}
                  </li>
                ))}
              </ul>
            )}

            {role.products && (
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-muted">{t.work.builtHere}</h4>
                <dl className="mt-3 divide-y divide-line rounded-2xl border border-line bg-surface/50">
                  {role.products.map((p) => (
                    <div key={p.name} className="grid gap-1 px-5 py-4 md:grid-cols-[12rem_1fr] md:gap-6">
                      <dt className="font-semibold">{p.name}</dt>
                      <dd>
                        <p className="leading-relaxed text-paper/85">{p.note[locale]}</p>
                        <p className="mt-1 text-sm text-annot">{p.stack}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
