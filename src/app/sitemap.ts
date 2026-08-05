import type { MetadataRoute } from "next";
import { desserts, pizzas, salades } from "./plat";
import { toSlug } from "@/lib/slug";

const BASE_URL = "https://www.lasicilienne.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/menu/pizza`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/menu/salade`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/menu/dessert`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${BASE_URL}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/confidentialite`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const menuPages: MetadataRoute.Sitemap = [
    ...pizzas.map((item) => ({
      url: `${BASE_URL}/menu/pizza/${toSlug(item.name)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...salades.map((item) => ({
      url: `${BASE_URL}/menu/salade/${toSlug(item.name)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...desserts.map((item) => ({
      url: `${BASE_URL}/menu/dessert/${toSlug(item.name)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...menuPages];
}
