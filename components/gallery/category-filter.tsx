"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categorySlug: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCategory(null)}
        className={cn(
          "rounded-full",
          selectedCategory === null && "bg-primary text-primary-foreground"
        )}
      >
        すべて
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.slug ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category.slug)}
          className={cn(
            "rounded-full",
            selectedCategory === category.slug &&
              "bg-primary text-primary-foreground"
          )}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
