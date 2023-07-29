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
  images: {
    loader: 'akamai',
    path: '',
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '',
      },
    ],
  },
  assetPrefix: '/next_intro_hw',
};


export default nextConfig;
 