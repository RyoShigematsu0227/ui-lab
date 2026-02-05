"use client";

import { Category, Section } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  sections: Section[];
  selectedCategory: string | null;
  onSelectCategory: (categorySlug: string | null) => void;
}

export function CategoryFilter({
  categories,
  sections,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  // カテゴリごとのセクション数を計算
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category.slug] = sections.filter(
      (s) => s.category?.slug === category.slug
    ).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="flex flex-wrap gap-2">
      {/* すべてボタン */}
      <button
        onClick={() => onSelectCategory(null)}
        className={cn(
          "px-4 py-2 text-xs tracking-wide rounded-lg border transition-all duration-300",
          selectedCategory === null
            ? "border-foreground bg-foreground text-background"
            : "border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
        )}
      >
        All
        <span className="ml-2 opacity-60">{sections.length}</span>
      </button>

      {/* カテゴリボタン */}
      {categories.map((category) => {
        const isSelected = selectedCategory === category.slug;
        const count = categoryCounts[category.slug] || 0;

        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.slug)}
            className={cn(
              "px-4 py-2 text-xs tracking-wide rounded-lg border transition-all duration-300",
              isSelected
                ? "border-foreground bg-foreground text-background"
                : "border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
            )}
          >
            {category.name}
            <span className="ml-2 opacity-60">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
