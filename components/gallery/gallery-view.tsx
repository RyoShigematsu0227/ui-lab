"use client";

import { useState, useMemo } from "react";
import { Section, Category } from "@/types";
import { SectionGrid } from "./section-grid";
import { CategoryFilter } from "./category-filter";
import { SearchBar } from "./search-bar";

interface GalleryViewProps {
  sections: Section[];
  categories: Category[];
}

export function GalleryView({ sections, categories }: GalleryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 検索とカテゴリでフィルタリング
  const filteredSections = useMemo(() => {
    let result = sections;

    // カテゴリフィルター
    if (selectedCategory) {
      result = result.filter(
        (section) => section.category?.slug === selectedCategory
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

    return result;
  }, [sections, selectedCategory, searchQuery]);

  // 検索時はカテゴリをリセットするオプション
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="space-y-6">
      {/* 検索バー */}
      <SearchBar
        value={searchQuery}
        onChange={handleSearch}
        placeholder="タイトル、説明、タグで検索..."
      />

      {/* カテゴリフィルター */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
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
      <SectionGrid sections={filteredSections} />
    </div>
  );
}
