/**
 * @type {import('next').NextConfig}
 */

const nextConfig = process.env.NODE_ENV === 'development' ? {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
} : {
  basePath: '/next_intro_hw',
  assetPrefix: 'https://nolra.github.io/next_intro_hw',
  images: {
    loader: 'akamai',
    path: '',
    domains: ['via.placeholder.com'],
  },
};


export default nextConfig;
 
