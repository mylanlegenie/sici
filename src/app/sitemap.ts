import type { MetadataRoute } from "next";
import { categories, getProductsByCategory } from "./menu/catalog";
import toSlug from "./slug";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl("/pizza-slide-1.webp"),
        absoluteUrl("/pizza-slide-2.webp"),
      ],
    },
    {
      url: absoluteUrl("/contact"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/mentions-legales"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: absoluteUrl("/confidentialite"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const menuPages: MetadataRoute.Sitemap = categories.flatMap((category) => [
    {
      url: absoluteUrl(`/menu/${toSlug(category)}`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...getProductsByCategory(category).map((product) => ({
      url: absoluteUrl(
        `/menu/${toSlug(category)}/${toSlug(product.name)}`,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(product.image
        ? { images: [absoluteUrl(product.image)] }
        : {}),
    })),
  ]);

  return [...staticPages, ...menuPages];
}
