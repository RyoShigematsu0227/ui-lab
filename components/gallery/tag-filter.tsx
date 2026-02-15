"use client";

import { Tag } from "@/types";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: Tag[];
  selectedTags: string[];
  onToggleTag: (tagSlug: string) => void;
  onClearTags: () => void;
}

export function TagFilter({ tags, selectedTags, onToggleTag }: TagFilterProps) {
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
              "px-3 py-1.5 text-xs rounded-lg border transition-all duration-300",
              isSelected
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/50 text-muted-foreground hover:border-border hover:text-foreground"
            )}
          >
            #{tag.name}
          </button>
        );
      })}
    </div>
  );
}
