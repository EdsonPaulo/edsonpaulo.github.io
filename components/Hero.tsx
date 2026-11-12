import Image from "next/image";
import type { Dict } from "@/content/i18n";
import { profile } from "@/content/profile";
import type { Locale } from "@/content/types";
import { Annot } from "./Annot";
import { Socials } from "./Socials";

export function Hero({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <section id="top" className="doodle overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 pb-20 pt-6 sm:px-8 md:pt-10 lg:grid-cols-[1fr_20rem]">
        <div>
          <Annot className="write-in block">{"<h1>"}</Annot>
          <h1 className="mt-3">
            <span className="settle block text-xl text-muted sm:text-2xl" style={{ animationDelay: "0.2s" }}>
              {t.hero.hello}
            </span>
            <span
              className="settle mt-1 block text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.86] tracking-[-0.04em] [font-stretch:75%]"
              style={{ animationDelay: "0.35s" }}
            >
              Edson
              <br />
              Gregório
            </span>
          </h1>
          <Annot className="write-in mt-3 block" style={{ animationDelay: "0.9s" }}>
            {"</h1>"}
          </Annot>

          <p className="mt-8 max-w-xl text-2xl font-medium leading-snug [font-stretch:90%] sm:text-3xl">
            <span className="text-crimson">{profile.role[locale]}</span>
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{profile.intro[locale]}</p>

          <Socials className="-ml-3 mt-8" />
        </div>

        {/* On desktop the photo sits at the top and is sized by viewport height, so photo and caption fit in the first screen. */}
        <figure className="relative mx-auto w-64 lg:mx-0 lg:mt-20 lg:w-auto lg:self-start lg:justify-self-end">
          <Annot className="absolute -top-8 left-0">{"const me = () => {"}</Annot>
          <Image
            src="/img/edson.jpg"
            alt={profile.name}
            width={816}
            height={994}
            priority
            className="h-auto w-full rounded-[2rem] lg:h-[min(28rem,calc(100svh-13rem))] lg:w-auto"
          />
          <figcaption className="mt-3 text-sm text-muted lg:w-0 lg:min-w-full">{t.hero.available}</figcaption>
          <Annot className="absolute -bottom-9 right-0">{"}"}</Annot>
        </figure>
      </div>
    </section>
  );
}
