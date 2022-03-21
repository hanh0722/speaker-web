/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
    @import "module/_variable.scss";
    @import "module/_mixin.scss";
    `
  },
  publicRuntimeConfig: {
    BASE_URL: process.env['BASE_URL']
  },
  optimizeFonts: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
       // for webpack 5 use
       and: [/\.(js|ts)x?$/]
      },

  use: ['@svgr/webpack'],
});

return config;
  },
}

module.exports = nextConfig
