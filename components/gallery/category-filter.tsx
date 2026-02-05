"use client";

import { Button } from "@/components/ui/button";
import { Category, Section } from "@/types";
import { cn } from "@/lib/utils";
import {
  Layout,
  Menu,
  Sparkles,
  CreditCard,
  MessageSquare,
  MousePointerClick,
  PanelBottom,
  HelpCircle,
  Users,
  BarChart3,
  Building2,
  Mail,
  FileText,
  Image,
  Newspaper,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

// アイコン名からコンポーネントへのマッピング
const iconMap: Record<string, LucideIcon> = {
  Layout,
  Menu,
  Sparkles,
  CreditCard,
  MessageSquare,
  MousePointerClick,
  PanelBottom,
  HelpCircle,
  Users,
  BarChart3,
  Building2,
  Mail,
  FileText,
  Image,
  Newspaper,
};

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
        <LayoutGrid className="h-3.5 w-3.5" />
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
      {categories.map((category) => {
        const IconComponent = category.icon ? iconMap[category.icon] : null;
        return (
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
            {IconComponent && <IconComponent className="h-3.5 w-3.5" />}
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
        );
      })}
    </div>
  );
}
