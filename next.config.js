/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
