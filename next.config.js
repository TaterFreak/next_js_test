const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL,
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
      port: '',
      pathname: '*',
    },
  ],
  images: {
    domains: ['via.placeholder.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
