// カテゴリ型
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  sortOrder: number;
}

// タグ型
export interface Tag {
  id: string;
  slug: string;
  name: string;
}

// セクション型
export interface Section {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  category?: Category;
  tags: Tag[];
  codePath: string;
  screenshotUrl: string;
  screenshotMobileUrl?: string;
  isPublished: boolean;
  generatedBy: "ai" | "manual";
  createdAt: string;
  updatedAt: string;
}

// ソートオプション型
export type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

// セクションバリエーション型
export interface SectionVariant {
  id: string;
  sectionId: string;
  label: string;
  codePath: string;
  screenshotUrl: string;
  sortOrder: number;
}

// サイト事例型
export interface Site {
  id: string;
  slug: string;
  title: string;
  url: string;
  description: string;
  screenshotUrl: string;
  tags: Tag[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
