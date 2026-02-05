"use client";

import { useState, useMemo } from "react";
import { Section, Category, Tag } from "@/types";
import { SectionGrid } from "./section-grid";
import { CategoryFilter } from "./category-filter";
import { TagFilter } from "./tag-filter";
import { SearchBar } from "./search-bar";
import { SortSelect, SortOption } from "./sort-select";

interface GalleryViewProps {
  sections: Section[];
  categories: Category[];
  tags: Tag[];
}

export function GalleryView({ sections, categories, tags }: GalleryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // 検索、カテゴリ、タグ、ソートでフィルタリング
  const filteredSections = useMemo(() => {
    let result = [...sections];

    // カテゴリフィルター
    if (selectedCategory) {
      result = result.filter(
        (section) => section.category?.slug === selectedCategory
      );
    }

    // タグフィルター（AND条件：選択したすべてのタグを含む）
    if (selectedTags.length > 0) {
      result = result.filter((section) =>
        selectedTags.every((tagSlug) =>
          section.tags.some((tag) => tag.slug === tagSlug)
        )
      );
    }

    // 検索フィルター
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((section) => {
        // タイトルで検索
        if (section.title.toLowerCase().includes(query)) return true;
        // 説明で検索
        if (section.description.toLowerCase().includes(query)) return true;
        // タグで検索
        if (section.tags.some((tag) => tag.name.toLowerCase().includes(query)))
          return true;
        // カテゴリ名で検索
        if (section.category?.name.toLowerCase().includes(query)) return true;
        return false;
      });
    }

    // ソート
    result.sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title, "ja");
        case "title-desc":
          return b.title.localeCompare(a.title, "ja");
        default:
          return 0;
      }
    });

    return result;
  }, [sections, selectedCategory, selectedTags, searchQuery, sortOption]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleToggleTag = (tagSlug: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagSlug)
        ? prev.filter((t) => t !== tagSlug)
        : [...prev, tagSlug]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="space-y-6">
      {/* 検索バーとソート */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="タイトル、説明、タグで検索..."
          />
        </div>
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>

      {/* カテゴリフィルター */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* タグフィルター */}
      <TagFilter
        tags={tags}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
        onClearTags={handleClearTags}
      />

      {/* 結果数 */}
      <p className="text-sm text-muted-foreground">
        {filteredSections.length} 件のセクション
        {searchQuery && (
          <span className="ml-2">
            「{searchQuery}」の検索結果
          </span>
        )}
      </p>

      {/* グリッド */}
      {filteredSections.length > 0 ? (
        <SectionGrid sections={filteredSections} />
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="mb-2 text-lg font-medium">セクションが見つかりません</p>
          <p className="text-sm text-muted-foreground">
            検索条件を変更してみてください
          </p>
        </div>
      )}
    </div>
  );
}
