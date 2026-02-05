import { supabase, isSupabaseEnabled } from "./client";
import { Section, Category, Tag, Site } from "@/types";
import { MOCK_SECTIONS, getSectionBySlug as getMockSectionBySlug, getSectionsByCategory as getMockSectionsByCategory, getSectionsByTag as getMockSectionsByTag } from "@/data/mock-sections";
import { CATEGORIES, getCategoryBySlug as getMockCategoryBySlug } from "@/data/categories";
import { TAGS, getTagBySlug as getMockTagBySlug } from "@/data/tags";
import { MOCK_SITES, getSiteBySlug as getMockSiteBySlug } from "@/data/mock-sites";

// セクション取得
export async function getSections(): Promise<Section[]> {
  if (!isSupabaseEnabled || !supabase) {
    return MOCK_SECTIONS;
  }

  const { data, error } = await supabase
    .from("sections")
    .select(`
      *,
      category:categories(*),
      tags:section_tags(tag:tags(*))
    `)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("セクション取得エラー:", error);
    return MOCK_SECTIONS;
  }

  return data.map(transformSection);
}

export async function getSectionBySlug(slug: string): Promise<Section | undefined> {
  if (!isSupabaseEnabled || !supabase) {
    return getMockSectionBySlug(slug);
  }

  const { data, error } = await supabase
    .from("sections")
    .select(`
      *,
      category:categories(*),
      tags:section_tags(tag:tags(*))
    `)
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) {
    return getMockSectionBySlug(slug);
  }

  return transformSection(data);
}

export async function getSectionsByCategory(categorySlug: string): Promise<Section[]> {
  if (!isSupabaseEnabled || !supabase) {
    return getMockSectionsByCategory(categorySlug);
  }

  const { data, error } = await supabase
    .from("sections")
    .select(`
      *,
      category:categories!inner(*),
      tags:section_tags(tag:tags(*))
    `)
    .eq("categories.slug", categorySlug)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("カテゴリ別セクション取得エラー:", error);
    return getMockSectionsByCategory(categorySlug);
  }

  return data.map(transformSection);
}

export async function getSectionsByTag(tagSlug: string): Promise<Section[]> {
  if (!isSupabaseEnabled || !supabase) {
    return getMockSectionsByTag(tagSlug);
  }

  const { data, error } = await supabase
    .from("sections")
    .select(`
      *,
      category:categories(*),
      tags:section_tags!inner(tag:tags!inner(*))
    `)
    .eq("section_tags.tags.slug", tagSlug)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("タグ別セクション取得エラー:", error);
    return getMockSectionsByTag(tagSlug);
  }

  return data.map(transformSection);
}

// カテゴリ取得
export async function getCategories(): Promise<Category[]> {
  if (!isSupabaseEnabled || !supabase) {
    return CATEGORIES;
  }

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("カテゴリ取得エラー:", error);
    return CATEGORIES;
  }

  return data.map(transformCategory);
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  if (!isSupabaseEnabled || !supabase) {
    return getMockCategoryBySlug(slug);
  }

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return getMockCategoryBySlug(slug);
  }

  return transformCategory(data);
}

// タグ取得
export async function getTags(): Promise<Tag[]> {
  if (!isSupabaseEnabled || !supabase) {
    return TAGS;
  }

  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("タグ取得エラー:", error);
    return TAGS;
  }

  return data.map(transformTag);
}

export async function getTagBySlug(slug: string): Promise<Tag | undefined> {
  if (!isSupabaseEnabled || !supabase) {
    return getMockTagBySlug(slug);
  }

  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return getMockTagBySlug(slug);
  }

  return transformTag(data);
}

// サイト事例取得
export async function getSites(): Promise<Site[]> {
  if (!isSupabaseEnabled || !supabase) {
    return MOCK_SITES;
  }

  const { data, error } = await supabase
    .from("sites")
    .select(`
      *,
      tags:site_tags(tag:tags(*))
    `)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("サイト事例取得エラー:", error);
    return MOCK_SITES;
  }

  return data.map(transformSite);
}

export async function getSiteBySlug(slug: string): Promise<Site | undefined> {
  if (!isSupabaseEnabled || !supabase) {
    return getMockSiteBySlug(slug);
  }

  const { data, error } = await supabase
    .from("sites")
    .select(`
      *,
      tags:site_tags(tag:tags(*))
    `)
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !data) {
    return getMockSiteBySlug(slug);
  }

  return transformSite(data);
}

// データ変換関数
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSection(data: any): Section {
  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    categoryId: data.category_id,
    category: data.category ? transformCategory(data.category) : undefined,
    tags: data.tags?.map((t: { tag: unknown }) => transformTag(t.tag)) || [],
    codePath: data.code_path,
    screenshotUrl: data.screenshot_url || "",
    screenshotMobileUrl: data.screenshot_mobile_url,
    isPublished: data.is_published,
    generatedBy: data.generated_by,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformCategory(data: any): Category {
  return {
    id: data.id,
    slug: data.slug,
    name: data.name,
    description: data.description,
    icon: data.icon,
    sortOrder: data.sort_order,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformTag(data: any): Tag {
  return {
    id: data.id,
    slug: data.slug,
    name: data.name,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSite(data: any): Site {
  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    url: data.url,
    description: data.description,
    screenshotUrl: data.screenshot_url || "",
    tags: data.tags?.map((t: { tag: unknown }) => transformTag(t.tag)) || [],
    isPublished: data.is_published,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}
