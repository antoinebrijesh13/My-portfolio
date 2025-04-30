/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/My-portfolio',
  assetPrefix: '/My-portfolio/',
  images: {
    unoptimized: true,
  },
};
export default nextConfig; 