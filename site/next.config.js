const path = require('path');
const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withAntdLess({
    reactStrictMode: true,
    distDir: 'build',
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '.'),
        styles: path.resolve(__dirname, 'styles'),
        components: path.resolve(__dirname, 'components'),
      };

      return config;
    },
  }),
);
