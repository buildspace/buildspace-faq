const nextConfig = {
  reactStrictMode: true,
  basePath: "/help",
  assetPrefix: "/help/",
}

const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.js",
    unstable_staticImage: true,
});

module.exports = withNextra(nextConfig);