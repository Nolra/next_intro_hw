/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'prod'
const nextConfig = isProd ? {
  images: {
    loader: 'akamai',
    path: '',
    domains: ['via.placeholder.com'],
  },
  assetPrefix: 'https://nolra.github.io/next_intro_hw',
} : {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
};


export default nextConfig;
 
