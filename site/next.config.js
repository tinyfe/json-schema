const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  reactStrictMode: true,
  distDir: 'build',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
};

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(withAntdLess(config));
