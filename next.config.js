const { i18n } = require("./next-i18next.config");
const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

const localeSubpaths = {
  en: "en",
  pt: "pt",
};

module.exports = {
  i18n,
  trailingSlash: true,

  publicRuntimeConfig: {
    localeSubpaths,
  },
  assetPrefix: ghPages ? "/edsonpaulo.github.io/" : "", // customize this value
};
