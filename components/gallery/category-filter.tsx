"use client";

import { Button } from "@/components/ui/button";
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
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCategory(null)}
        className={cn(
          "rounded-full gap-1.5",
          selectedCategory === null && "bg-primary text-primary-foreground"
        )}
      >
        すべて
        <span className={cn(
          "rounded-full px-1.5 py-0.5 text-xs",
          selectedCategory === null
            ? "bg-primary-foreground/20"
            : "bg-muted"
        )}>
          {sections.length}
        </span>
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category.slug)}
          className={cn(
            "rounded-full gap-1.5",
            selectedCategory === category.slug &&
              "bg-primary text-primary-foreground"
          )}
        >
          {category.name}
          <span className={cn(
            "rounded-full px-1.5 py-0.5 text-xs",
            selectedCategory === category.slug
              ? "bg-primary-foreground/20"
              : "bg-muted"
          )}>
            {categoryCounts[category.slug] || 0}
          </span>
        </Button>
      ))}
    </div>
  );
}
