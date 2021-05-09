const { i18n } = require("./next-i18next.config");

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
};
