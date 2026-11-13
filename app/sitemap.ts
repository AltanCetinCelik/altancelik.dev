import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://altancelik.dev",
      lastModified: new Date("2026-11-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
