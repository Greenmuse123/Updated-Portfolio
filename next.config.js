/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
            comment: 'Cache static assets for 1 year'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://assets.calendly.com https://www.googletagmanager.com https://va.vercel-scripts.com https://googleads.g.doubleclick.net https://www.googleadservices.com; style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com; img-src 'self' data: https://eliasmusleh.com https://images.ctfassets.net https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com; connect-src 'self' https://api.calendly.com https://www.google-analytics.com https://vitals.vercel-insights.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://www.googleadservices.com; font-src 'self' https://fonts.gstatic.com data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; frame-src https://calendly.com https://assets.calendly.com https://www.googletagmanager.com https://td.doubleclick.net https://www.googleadservices.com; block-all-mixed-content; upgrade-insecure-requests;",
            comment: 'Restrict sources with allowances for Calendly'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
            comment: 'Enforce HTTPS with HSTS'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
            comment: 'Prevent clickjacking'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
            comment: 'Mitigate cross-origin attacks'
          }
        ],
      },
    ];
  },
  experimental: {
    mdxRs: true,
    optimizePackageImports: [
      'react',
      'react-dom',
      'next',
      '@tailwindcss'
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eliasmusleh.com',
        pathname: '/images/**',
      },
    ],
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX(nextConfig)