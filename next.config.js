/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  ...withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/]
    }
  }),
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
