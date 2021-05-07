module.exports = {
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    // localeDetection: false,
    localePath: typeof window === "undefined" ? "public/locales" : "locales",
  },
};
