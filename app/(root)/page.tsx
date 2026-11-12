import type { Metadata } from "next";
import { dict } from "@/content/i18n";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: dict.en.meta.title,
  robots: { index: false },
  alternates: { canonical: "/en/", languages: { en: "/en/", pt: "/pt/" } },
};

const link = { color: "#e8364f", margin: "0 0.5em" };

/** "/" sends everyone to English; Portuguese is one click away in the nav. */
export default function Root() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: 'location.replace("/en/" + location.hash)' }} />
      <p>
        <a href="/en/" style={link}>
          English
        </a>
        <a href="/pt/" style={link}>
          Português
        </a>
      </p>
    </>
  );
}
