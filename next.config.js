/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['chandanmalakar.live']
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  env: {
    SITE_NAME: 'Chandan Malakar Portfolio',
    SITE_URL: 'https://chandanmalakar.live',
    AUTHOR: 'Chandan Malakar'
  }
}

module.exports = nextConfig
