import { describe, it, expect } from "vitest";
import { filterAndSortSections } from "@/lib/filter-sections";
import { Section } from "@/types";

// テスト用のモックセクション
const mockSections: Section[] = [
  {
    id: "hero-gradient-001",
    slug: "hero-gradient-001",
    title: "グラデーションヒーロー",
    description: "美しいグラデーション背景を使用したモダンなヒーローセクション",
    categoryId: "1",
    category: { id: "1", slug: "hero", name: "ヒーロー", description: "", icon: "Layout", sortOrder: 1 },
    tags: [
      { id: "1", slug: "gradient", name: "グラデーション" },
      { id: "10", slug: "animation", name: "アニメーション" },
    ],
    codePath: "content/sections/hero-gradient-001/code.tsx",
    screenshotUrl: "/screenshots/hero-gradient-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2025-06-01T00:00:00Z",
    updatedAt: "2025-06-01T00:00:00Z",
  },
  {
    id: "pricing-minimal-001",
    slug: "pricing-minimal-001",
    title: "ミニマル料金テーブル",
    description: "シンプルで洗練された料金プラン比較セクション",
    categoryId: "4",
    category: { id: "4", slug: "pricing", name: "料金テーブル", description: "", icon: "CreditCard", sortOrder: 4 },
    tags: [
      { id: "4", slug: "minimal", name: "ミニマル" },
      { id: "15", slug: "grid", name: "グリッドレイアウト" },
    ],
    codePath: "content/sections/pricing-minimal-001/code.tsx",
    screenshotUrl: "/screenshots/pricing-minimal-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2025-03-15T00:00:00Z",
    updatedAt: "2025-03-15T00:00:00Z",
  },
  {
    id: "hero-parallax-001",
    slug: "hero-parallax-001",
    title: "Parallax Hero Section",
    description: "パララックス効果を活用したダイナミックなヒーロー",
    categoryId: "1",
    category: { id: "1", slug: "hero", name: "ヒーロー", description: "", icon: "Layout", sortOrder: 1 },
    tags: [
      { id: "14", slug: "parallax", name: "パララックス" },
      { id: "10", slug: "animation", name: "アニメーション" },
      { id: "1", slug: "gradient", name: "グラデーション" },
    ],
    codePath: "content/sections/hero-parallax-001/code.tsx",
    screenshotUrl: "/screenshots/hero-parallax-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2025-09-20T00:00:00Z",
    updatedAt: "2025-09-20T00:00:00Z",
  },
  {
    id: "faq-animated-001",
    slug: "faq-animated-001",
    title: "アニメーションFAQ",
    description: "アコーディオン開閉にアニメーションを付けたFAQセクション",
    categoryId: "8",
    category: { id: "8", slug: "faq", name: "FAQ", description: "", icon: "HelpCircle", sortOrder: 8 },
    tags: [
      { id: "10", slug: "animation", name: "アニメーション" },
      { id: "13", slug: "interactive", name: "インタラクティブ" },
    ],
    codePath: "content/sections/faq-animated-001/code.tsx",
    screenshotUrl: "/screenshots/faq-animated-001.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2025-01-10T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
];

describe("filterAndSortSections", () => {
  const defaultParams = {
    sections: mockSections,
    selectedCategory: null,
    selectedTags: [] as string[],
    searchQuery: "",
    sortOption: "newest" as const,
  };

  it("フィルタなしの場合、全セクションがnewest順で返ること", () => {
    const result = filterAndSortSections(defaultParams);

    expect(result).toHaveLength(4);
    // 2025-09-20 → 2025-06-01 → 2025-03-15 → 2025-01-10
    expect(result[0].slug).toBe("hero-parallax-001");
    expect(result[1].slug).toBe("hero-gradient-001");
    expect(result[2].slug).toBe("pricing-minimal-001");
    expect(result[3].slug).toBe("faq-animated-001");
  });

  it("カテゴリフィルタが正しく動くこと", () => {
    const result = filterAndSortSections({
      ...defaultParams,
      selectedCategory: "hero",
    });

    expect(result).toHaveLength(2);
    expect(result.every((s) => s.category?.slug === "hero")).toBe(true);
  });

  it("タグフィルタがAND条件で動くこと", () => {
    // animation のみ → 3件（hero-gradient, hero-parallax, faq-animated）
    const withOneTag = filterAndSortSections({
      ...defaultParams,
      selectedTags: ["animation"],
    });
    expect(withOneTag).toHaveLength(3);

    // animation + gradient → 2件（hero-gradient, hero-parallax のみ両方持つ）
    const withTwoTags = filterAndSortSections({
      ...defaultParams,
      selectedTags: ["animation", "gradient"],
    });
    expect(withTwoTags).toHaveLength(2);
    expect(withTwoTags.every((s) =>
      s.tags.some((t) => t.slug === "animation") &&
      s.tags.some((t) => t.slug === "gradient")
    )).toBe(true);
  });

  it("検索クエリがタイトル・説明・タグ名・カテゴリ名にマッチすること", () => {
    // タイトルにマッチ
    const byTitle = filterAndSortSections({
      ...defaultParams,
      searchQuery: "グラデーション",
    });
    expect(byTitle.some((s) => s.slug === "hero-gradient-001")).toBe(true);

    // 説明にマッチ
    const byDesc = filterAndSortSections({
      ...defaultParams,
      searchQuery: "アコーディオン",
    });
    expect(byDesc).toHaveLength(1);
    expect(byDesc[0].slug).toBe("faq-animated-001");

    // タグ名にマッチ
    const byTag = filterAndSortSections({
      ...defaultParams,
      searchQuery: "パララックス",
    });
    expect(byTag.some((s) => s.slug === "hero-parallax-001")).toBe(true);

    // カテゴリ名にマッチ
    const byCategory = filterAndSortSections({
      ...defaultParams,
      searchQuery: "料金テーブル",
    });
    expect(byCategory).toHaveLength(1);
    expect(byCategory[0].slug).toBe("pricing-minimal-001");
  });

  it("検索が大文字小文字を区別しないこと", () => {
    const upper = filterAndSortSections({
      ...defaultParams,
      searchQuery: "PARALLAX",
    });
    const lower = filterAndSortSections({
      ...defaultParams,
      searchQuery: "parallax",
    });
    const mixed = filterAndSortSections({
      ...defaultParams,
      searchQuery: "Parallax",
    });

    expect(upper).toHaveLength(lower.length);
    expect(upper).toHaveLength(mixed.length);
    expect(upper[0].slug).toBe("hero-parallax-001");
  });

  it("ソートの4パターンが正しく動くこと", () => {
    // newest（降順）
    const newest = filterAndSortSections({ ...defaultParams, sortOption: "newest" });
    expect(newest[0].slug).toBe("hero-parallax-001");
    expect(newest[3].slug).toBe("faq-animated-001");

    // oldest（昇順）
    const oldest = filterAndSortSections({ ...defaultParams, sortOption: "oldest" });
    expect(oldest[0].slug).toBe("faq-animated-001");
    expect(oldest[3].slug).toBe("hero-parallax-001");

    // title-asc（タイトル昇順）
    const titleAsc = filterAndSortSections({ ...defaultParams, sortOption: "title-asc" });
    const titlesAsc = titleAsc.map((s) => s.title);
    for (let i = 0; i < titlesAsc.length - 1; i++) {
      expect(titlesAsc[i].localeCompare(titlesAsc[i + 1], "ja")).toBeLessThanOrEqual(0);
    }

    // title-desc（タイトル降順）
    const titleDesc = filterAndSortSections({ ...defaultParams, sortOption: "title-desc" });
    const titlesDesc = titleDesc.map((s) => s.title);
    for (let i = 0; i < titlesDesc.length - 1; i++) {
      expect(titlesDesc[i].localeCompare(titlesDesc[i + 1], "ja")).toBeGreaterThanOrEqual(0);
    }
  });

  it("カテゴリ + タグ + 検索の複合フィルタが正しく動くこと", () => {
    // hero カテゴリ + animation タグ + "パララックス" 検索
    const result = filterAndSortSections({
      ...defaultParams,
      selectedCategory: "hero",
      selectedTags: ["animation"],
      searchQuery: "パララックス",
    });

    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("hero-parallax-001");
  });

  it("該当なしの場合、空配列が返ること", () => {
    const result = filterAndSortSections({
      ...defaultParams,
      selectedCategory: "nonexistent-category",
    });

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});
