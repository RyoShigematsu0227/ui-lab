import { MetadataRoute } from "next";
import { getSections, getSites } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ui-lab.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sections, sites] = await Promise.all([getSections(), getSites()]);

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/sites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/favorites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // セクションページ
  const sectionPages: MetadataRoute.Sitemap = sections.map((section) => ({
    url: `${BASE_URL}/sections/${section.slug}`,
    lastModified: new Date(section.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // サイト事例ページ
  const sitePages: MetadataRoute.Sitemap = sites.map((site) => ({
    url: `${BASE_URL}/sites/${site.slug}`,
    lastModified: new Date(site.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...sectionPages, ...sitePages];
}
