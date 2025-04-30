/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/My-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/My-portfolio/' : '',
  images: {
    unoptimized: true,
  },
}
export default nextConfig;