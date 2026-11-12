import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { locales } from "@/content/types";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${profile.site}/${l}/`,
    lastModified: new Date(),
    alternates: { languages: { en: `${profile.site}/en/`, pt: `${profile.site}/pt/` } },
  }));
}
