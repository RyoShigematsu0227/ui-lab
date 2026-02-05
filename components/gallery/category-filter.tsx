"use client";

import { Category, Section } from "@/types";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";
import { iconMap } from "@/components/ui/category-icon";

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
          "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
          selectedCategory === null
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        <LayoutGrid className="h-4 w-4" />
        すべて
        <span
          className={cn(
            "rounded-md px-1.5 py-0.5 text-xs",
            selectedCategory === null
              ? "bg-primary-foreground/20"
              : "bg-background/80"
          )}
        >
          {sections.length}
        </span>
      </button>

      {/* カテゴリボタン */}
      {categories.map((category) => {
        const IconComponent = category.icon ? iconMap[category.icon] : null;
        const isSelected = selectedCategory === category.slug;
        const count = categoryCounts[category.slug] || 0;

        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.slug)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
              isSelected
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {IconComponent && <IconComponent className="h-4 w-4" />}
            {category.name}
            <span
              className={cn(
                "rounded-md px-1.5 py-0.5 text-xs",
                isSelected
                  ? "bg-primary-foreground/20"
                  : "bg-background/80"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
