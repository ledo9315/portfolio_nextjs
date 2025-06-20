/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance Optimierungen
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Bild-Optimierungen für Production
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 Jahr Cache
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Bundle-Optimierungen
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    webVitalsAttribution: ["CLS", "LCP"],
  },

  // Webpack Bundle Analyzer für Production (optional)
  webpack: (config, { buildId, dev, isServer, webpack }) => {
    // Bundle-Size-Optimierungen
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        lucide: {
          name: "lucide",
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          chunks: "all",
          priority: 10,
        },
        framer: {
          name: "framer-motion",
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          chunks: "all",
          priority: 10,
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
