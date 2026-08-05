import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.lasicilienne.fr/sitemap.xml",
    host: "https://www.lasicilienne.fr",
  };
}
