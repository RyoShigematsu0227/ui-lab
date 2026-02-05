"use client";

import { useState, useMemo } from "react";
import { Section, Category } from "@/types";
import { SectionGrid } from "./section-grid";
import { CategoryFilter } from "./category-filter";

interface GalleryViewProps {
  sections: Section[];
  categories: Category[];
}

export function GalleryView({ sections, categories }: GalleryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // カテゴリでフィルタリング
  const filteredSections = useMemo(() => {
    if (!selectedCategory) return sections;
    return sections.filter(
      (section) => section.category?.slug === selectedCategory
    );
  }, [sections, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* フィルター */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 結果数 */}
      <p className="text-sm text-muted-foreground">
        {filteredSections.length} 件のセクション
      </p>

      {/* グリッド */}
      <SectionGrid sections={filteredSections} />
    </div>
  );
}
