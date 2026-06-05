/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turbopack is default in Next.js 16, but we might need webpack for some plugins
  // For now, we'll try to keep it simple
};

module.exports = nextConfig;
