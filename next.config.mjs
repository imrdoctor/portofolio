/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint : {
    ignoreDuringBuilds: true,
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: '4kwallpapers.com', // Add this line
          pathname: '**',
        },
      ],
    },
};
  
export default nextConfig;
