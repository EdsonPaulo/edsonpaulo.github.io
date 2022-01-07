const ghPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  trailingSlash: true,
  assetPrefix: ghPages ? "/edsonpaulo.github.io/" : "", // customize this value
};
