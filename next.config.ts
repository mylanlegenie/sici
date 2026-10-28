import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // Include styles in the HTML to avoid a render-blocking CSS request.
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/favicon-v2.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/pizza-slide-1-v2.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/pizza-slide-2-v2.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/images-plat/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
    ];
  },
  images: {
    // Keep cold image requests fast: these sources are already WebP.
    formats: ["image/webp"],
    deviceSizes: [420, 520, 640, 750, 828, 1040, 1080, 1200, 1920, 2048, 3840],
    qualities: [65, 75],
    minimumCacheTTL: 3600,
  },
};

export default nextConfig;
