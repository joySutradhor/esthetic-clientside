/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Allow images from i.ibb.co
    },
    reactStrictMode: true, // Ensures best practices
    swcMinify: true, // Optimizes Next.js performance
  };
  
  export default nextConfig;
  
