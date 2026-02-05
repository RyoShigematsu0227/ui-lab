"use client";

import { Tag } from "@/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface TagFilterProps {
  tags: Tag[];
  selectedTags: string[];
  onToggleTag: (tagSlug: string) => void;
  onClearTags: () => void;
}

export function TagFilter({
  tags,
  selectedTags,
  onToggleTag,
}: TagFilterProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2" role="listbox" aria-multiselectable="true">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag.slug);
        return (
          <button
            key={tag.id}
            onClick={() => onToggleTag(tag.slug)}
            role="option"
            aria-selected={isSelected}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all",
              isSelected
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border/50 bg-card/50 text-muted-foreground hover:border-border hover:bg-card hover:text-foreground"
            )}
          >
            {isSelected && <Check className="h-3.5 w-3.5" />}
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}
