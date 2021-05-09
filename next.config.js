const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
  },
  trailingSlash: true,
  assetPrefix: ghPages ? "/edsonpaulo.github.io/" : "", // customize this value
};
