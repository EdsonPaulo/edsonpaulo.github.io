import type { ReactNode } from "react";
import { Annot } from "./Annot";

export function Section({ id, title, aside, children }: { id: string; title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 px-4 py-20 sm:px-8 md:py-28 lg:grid-cols-[16rem_1fr]">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <Annot>{`<section id="${id}">`}</Annot>
          <h2 id={`${id}-title`} className="mt-2 text-4xl font-semibold tracking-tight [font-stretch:85%] sm:text-5xl">
            {title}
          </h2>
          {aside}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
