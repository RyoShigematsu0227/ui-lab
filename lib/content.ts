import fs from "fs";
import path from "path";
import { Section, Category, Tag, Site } from "@/types";
import {
  CATEGORIES,
  getCategoryBySlug as findCategoryBySlug,
} from "@/data/categories";
import { TAGS, getTagBySlug as findTagBySlug } from "@/data/tags";

// metadata.json のスキーマ型
interface SectionMetadata {
  title: string;
  description: string;
  category: string;
  tags: string[];
  screenshotUrl?: string;
  screenshotMobileUrl?: string;
  isPublished?: boolean;
  generatedBy?: "ai" | "manual";
  createdAt: string;
  updatedAt?: string;
}

// サイト事例 JSON のスキーマ型
interface SiteMetadata {
  title: string;
  url: string;
  description: string;
  screenshotUrl?: string;
  tags: string[];
  isPublished?: boolean;
  createdAt: string;
  updatedAt?: string;
}

const SECTIONS_DIR = path.join(process.cwd(), "content/sections");
const SITES_DIR = path.join(process.cwd(), "content/sites");

// モジュールレベルキャッシュ
let cachedSections: Section[] | null = null;
let cachedSites: Site[] | null = null;

function loadSectionMetadata(slug: string): SectionMetadata | null {
  const metadataPath = path.join(SECTIONS_DIR, slug, "metadata.json");
  try {
    const raw = fs.readFileSync(metadataPath, "utf-8");
    return JSON.parse(raw) as SectionMetadata;
  } catch {
    return null;
  }
}

function metadataToSection(slug: string, meta: SectionMetadata): Section {
  const category = findCategoryBySlug(meta.category);
  const tags = meta.tags
    .map((tagSlug) => findTagBySlug(tagSlug))
    .filter((t): t is Tag => t !== undefined);

  return {
    id: slug,
    slug,
    title: meta.title,
    description: meta.description,
    categoryId: category?.id ?? "",
    category,
    tags,
    codePath: `content/sections/${slug}/code.tsx`,
    screenshotUrl: meta.screenshotUrl ?? `/screenshots/${slug}.png`,
    screenshotMobileUrl: meta.screenshotMobileUrl,
    isPublished: meta.isPublished ?? true,
    generatedBy: meta.generatedBy ?? "ai",
    createdAt: meta.createdAt,
    updatedAt: meta.updatedAt ?? meta.createdAt,
  };
}

function loadSiteMetadata(slug: string): SiteMetadata | null {
  const sitePath = path.join(SITES_DIR, `${slug}.json`);
  try {
    const raw = fs.readFileSync(sitePath, "utf-8");
    return JSON.parse(raw) as SiteMetadata;
  } catch {
    return null;
  }
}

function metadataToSite(slug: string, meta: SiteMetadata): Site {
  const tags = meta.tags
    .map((tagSlug) => findTagBySlug(tagSlug))
    .filter((t): t is Tag => t !== undefined);

  return {
    id: slug,
    slug,
    title: meta.title,
    url: meta.url,
    description: meta.description,
    screenshotUrl: meta.screenshotUrl ?? "",
    tags,
    isPublished: meta.isPublished ?? true,
    createdAt: meta.createdAt,
    updatedAt: meta.updatedAt ?? meta.createdAt,
  };
}

// セクション取得
export async function getSections(): Promise<Section[]> {
  if (cachedSections) return cachedSections;

  const dirs = fs
    .readdirSync(SECTIONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const sections = dirs
    .map((slug) => {
      const meta = loadSectionMetadata(slug);
      if (!meta) return null;
      return metadataToSection(slug, meta);
    })
    .filter((s): s is Section => s !== null && s.isPublished)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  cachedSections = sections;
  return sections;
}

export async function getSectionBySlug(
  slug: string
): Promise<Section | undefined> {
  const meta = loadSectionMetadata(slug);
  if (!meta) return undefined;
  const section = metadataToSection(slug, meta);
  return section.isPublished ? section : undefined;
}

export async function getSectionsByCategory(
  categorySlug: string
): Promise<Section[]> {
  const sections = await getSections();
  return sections.filter((s) => s.category?.slug === categorySlug);
}

export async function getSectionsByTag(tagSlug: string): Promise<Section[]> {
  const sections = await getSections();
  return sections.filter((s) => s.tags.some((t) => t.slug === tagSlug));
}

// カテゴリ取得
export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | undefined> {
  return findCategoryBySlug(slug);
}

// タグ取得
export async function getTags(): Promise<Tag[]> {
  return TAGS;
}

export async function getTagBySlug(slug: string): Promise<Tag | undefined> {
  return findTagBySlug(slug);
}

// サイト事例取得
export async function getSites(): Promise<Site[]> {
  if (cachedSites) return cachedSites;

  let files: string[];
  try {
    files = fs
      .readdirSync(SITES_DIR)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(".json", ""));
  } catch {
    return [];
  }

  const sites = files
    .map((slug) => {
      const meta = loadSiteMetadata(slug);
      if (!meta) return null;
      return metadataToSite(slug, meta);
    })
    .filter((s): s is Site => s !== null && s.isPublished)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  cachedSites = sites;
  return sites;
}

export async function getSiteBySlug(
  slug: string
): Promise<Site | undefined> {
  const meta = loadSiteMetadata(slug);
  if (!meta) return undefined;
  const site = metadataToSite(slug, meta);
  return site.isPublished ? site : undefined;
}
