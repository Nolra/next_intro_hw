/**
 * @type {import('next').NextConfig}
 */

const repo = 'next_intro_hw'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = process.env.NODE_ENV === 'production' ? {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
} : {
  basePath: basePath,
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
 


// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = '';
// let basePath = '/'

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

// const nextConfig = {
//   assetPrefix: isGithubActions ? assetPrefix : undefined,
//   basePath: isGithubActions ? basePath : '/',
//   images: {
//     loader: 'imgix',
//     path: 'https://nolra.github.io/next_intro_hw',
//   },
// }

// export default nextConfig;