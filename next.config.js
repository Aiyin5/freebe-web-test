/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  distDir: "dist",
  eslint: {
    dirs: ['src'],
  },

  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
