/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
};

module.exports = nextConfig;
