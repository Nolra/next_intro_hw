// const nextConfig = process.env.NODE_ENV === 'production' ? {
//   // basePath: '/next_intro_hw',
//   assetPrefix: 'https://nolra.github.io/next_intro_hw',
//   images: {
//     loader: 'akamai',
//     path: '',
//     // domains: ['via.placeholder.com'],
//   },
// } : {
//   reactStrictMode: true,
//   images: {
//     domains: ['via.placeholder.com'],
//   },
// };

// export default nextConfig;
 
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