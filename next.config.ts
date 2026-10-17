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
        source: "/pizza-slide-1.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
          },
        ],
      },
      {
        source: "/pizza-slide-2.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
          },
        ],
      },
      {
        source: "/images-plat/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
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
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
