const webpack = require('webpack')

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  cssModules: true,
});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  poweredByHeader: false,
  exportTrailingSlash: true,
  assetPrefix:
    process.env.APP_MODE === "production"
      ? process.env.BASE_URL
      : "http://localhost:3000/",
  publicRuntimeConfig: {
    basePath:
      process.env.APP_MODE === "production"
        ? process.env.BASE_URL
        : "http://localhost:3000/",
  },
};
