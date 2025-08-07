/** @type {import('next').NextConfig} */
const repoName = 'evidentiaai.github.io'
const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
