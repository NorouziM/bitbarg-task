/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bitbarg.com', 'api.bitbarg.me'],
  },
};

module.exports = nextConfig;
