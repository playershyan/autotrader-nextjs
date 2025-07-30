/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization for vehicle photos
    images: {
      domains: [
        'res.cloudinary.com', // Cloudinary CDN
        'images.unsplash.com', // For development placeholder images
        'via.placeholder.com', // For testing
      ],
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      // Optimize for vehicle images
      minimumCacheTTL: 31536000, // 1 year cache for vehicle images
    },
  
    // Experimental features for performance
    experimental: {
      // Server actions for form handling
      serverActions: true,serverActions: {
        allowedOrigins: ["localhost:3000"],
      },
      // PPR for better performance
      ppr: false, // Enable when stable
      // Optimized loading
      optimizePackageImports: ['lucide-react', 'date-fns', 'lodash'],
    },
  
    // Compression for Sri Lankan mobile users
    compress: true,
  
    // Security headers
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options', 
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
          ],
        }
      ]
    },
  
    // Output configuration for deployment
    output: 'standalone', // Good for Docker deployments if needed later
    
    // ESLint configuration
    eslint: {
      // Allow production builds to complete even if there are ESLint errors
      ignoreDuringBuilds: false,
    },
  
    // TypeScript configuration
    typescript: {
      // Don't type-check during builds (faster builds, but risky)
      ignoreBuildErrors: false,
    },
  }
  
  module.exports = nextConfig