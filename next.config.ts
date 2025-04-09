import type { NextConfig } from "next"
import withBundleAnalyzer from "@next/bundle-analyzer"

const isAnalyze = process.env.ANALYZE === "true"

const nextConfig: NextConfig = {
  reactStrictMode: true, // Better warnings in dev

  images: {
    formats: ['image/webp', 'image/avif'], // Modern formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "cdn.jsdelivr.net",
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
        // {
        //   key: "Content-Security-Policy",
        //   value:
        //     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
        // },
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
      ],
    },
  ],
  

  experimental: {
    scrollRestoration: true, // smoother back/forward nav
    optimizeCss: true,
    
  },
  serverExternalPackages: ['firebase-admin', 'sharp'], // server only packages
  
  // Only if you're exporting static site:
  // output: "export",

  trailingSlash: false, // helpful for SEO
  poweredByHeader: false, // hide Next.js header
}

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig