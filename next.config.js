/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || 'https://ai_skill_insight_engine.vercel.app',
  },
}

module.exports = nextConfig
