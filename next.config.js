/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This enables static export
    distDir: 'out',   // Output folder
    images: {
      unoptimized: true // GitHub Pages doesn't support Next.js image optimization
    },
  };
  
  module.exports = nextConfig;