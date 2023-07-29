/**
 * @type {import('next').NextConfig}
 */

const nextConfig = process.env.NODE_ENV === 'development' ? {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
} : {
  images: {
    loader: 'akamai',
    path: '',
    domains: ['via.placeholder.com'],
  },
  assetPrefix: 'https://nolra.github.io/next_intro_hw',
};


export default nextConfig;
 
