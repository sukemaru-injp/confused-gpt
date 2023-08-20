/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: { ssr: true, minify: true },
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
