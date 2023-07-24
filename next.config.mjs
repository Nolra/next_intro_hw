/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? 'https://nolra.github.io/next_deploy' : undefined,
};

export default nextConfig;


 
