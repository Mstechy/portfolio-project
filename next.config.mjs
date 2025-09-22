/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables Next.js optimization, fixes 404
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig