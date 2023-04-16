/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['objectstorage.us-ashburn-1.oraclecloud.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'objectstorage.us-ashburn-1.oraclecloud.com',
      },
    ],
  },
}

module.exports = nextConfig
