import { Section } from "@/types";
import { CATEGORIES } from "./categories";
import { TAGS } from "./tags";

// モックセクションデータ（開発用）
export const MOCK_SECTIONS: Section[] = [
  {
    id: "1",
    slug: "hero-gradient-001",
    title: "グラデーションヒーロー",
    description: "美しいグラデーション背景を使用したモダンなヒーローセクション",
    categoryId: "1",
    category: CATEGORIES[0],
    tags: [TAGS[0], TAGS[9], TAGS[17]],
    codePath: "content/sections/hero-gradient-001/code.tsx",
    screenshotUrl: "/screenshots/hero-gradient-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    slug: "hero-minimal-001",
    title: "ミニマルヒーロー",
    description: "余白を活かしたシンプルで洗練されたヒーローセクション",
    categoryId: "1",
    category: CATEGORIES[0],
    tags: [TAGS[3], TAGS[4]],
    codePath: "content/sections/hero-minimal-001/code.tsx",
    screenshotUrl: "/screenshots/hero-minimal-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-14T00:00:00Z",
    updatedAt: "2024-01-14T00:00:00Z",
  },
  {
    id: "3",
    slug: "feature-bento-001",
    title: "ベントーグリッドフィーチャー",
    description: "Bento Gridレイアウトを使用した機能紹介セクション",
    categoryId: "3",
    category: CATEGORIES[2],
    tags: [TAGS[15], TAGS[11], TAGS[9]],
    codePath: "content/sections/feature-bento-001/code.tsx",
    screenshotUrl: "/screenshots/feature-bento-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-13T00:00:00Z",
    updatedAt: "2024-01-13T00:00:00Z",
  },
  {
    id: "4",
    slug: "pricing-glass-001",
    title: "ガラスモーフィズム料金表",
    description: "半透明効果を使用したエレガントな料金テーブル",
    categoryId: "4",
    category: CATEGORIES[3],
    tags: [TAGS[1], TAGS[9], TAGS[2]],
    codePath: "content/sections/pricing-glass-001/code.tsx",
    screenshotUrl: "/screenshots/pricing-glass-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
  },
  {
    id: "5",
    slug: "testimonial-carousel-001",
    title: "カルーセルテスティモニアル",
    description: "スライド形式のお客様の声セクション",
    categoryId: "5",
    category: CATEGORIES[4],
    tags: [TAGS[9], TAGS[12]],
    codePath: "content/sections/testimonial-carousel-001/code.tsx",
    screenshotUrl: "/screenshots/testimonial-carousel-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-11T00:00:00Z",
    updatedAt: "2024-01-11T00:00:00Z",
  },
  {
    id: "6",
    slug: "cta-gradient-001",
    title: "グラデーションCTA",
    description: "目を引くグラデーションを使用したCTAセクション",
    categoryId: "6",
    category: CATEGORIES[5],
    tags: [TAGS[0], TAGS[9], TAGS[4]],
    codePath: "content/sections/cta-gradient-001/code.tsx",
    screenshotUrl: "/screenshots/cta-gradient-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "7",
    slug: "stats-animated-001",
    title: "アニメーション統計",
    description: "数字がカウントアップするアニメーション付き統計セクション",
    categoryId: "10",
    category: CATEGORIES[9],
    tags: [TAGS[9], TAGS[12]],
    codePath: "content/sections/stats-animated-001/code.tsx",
    screenshotUrl: "/screenshots/stats-animated-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-09T00:00:00Z",
    updatedAt: "2024-01-09T00:00:00Z",
  },
  {
    id: "8",
    slug: "faq-accordion-001",
    title: "アコーディオンFAQ",
    description: "開閉式のFAQセクション",
    categoryId: "8",
    category: CATEGORIES[7],
    tags: [TAGS[12], TAGS[3]],
    codePath: "content/sections/faq-accordion-001/code.tsx",
    screenshotUrl: "/screenshots/faq-accordion-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2024-01-08T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
  },
];

export const getSectionBySlug = (slug: string): Section | undefined => {
  return MOCK_SECTIONS.find((section) => section.slug === slug);
};

export const getSectionsByCategory = (categorySlug: string): Section[] => {
  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return MOCK_SECTIONS.filter((section) => section.categoryId === category.id);
};

export const getSectionsByTag = (tagSlug: string): Section[] => {
  return MOCK_SECTIONS.filter((section) =>
    section.tags.some((tag) => tag.slug === tagSlug)
  );
};
