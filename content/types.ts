export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export type L = Record<Locale, string>;

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);
