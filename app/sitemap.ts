import { MetadataRoute } from "next";
import { getSections, getCategories, getTags, getSites } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ui-lab.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sections, categories, tags, sites] = await Promise.all([
    getSections(),
    getCategories(),
    getTags(),
    getSites(),
  ]);

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tags`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
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

  // カテゴリページ
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // タグページ
  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${BASE_URL}/tags/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // サイト事例ページ
  const sitePages: MetadataRoute.Sitemap = sites.map((site) => ({
    url: `${BASE_URL}/sites/${site.slug}`,
    lastModified: new Date(site.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...sectionPages,
    ...categoryPages,
    ...tagPages,
    ...sitePages,
  ];
}
