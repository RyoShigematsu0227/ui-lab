"use client";

import { Tag } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

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
  onClearTags,
}: TagFilterProps) {
  if (tags.length === 0) return null;

  return (
    <div className="space-y-2" role="group" aria-labelledby="tag-filter-label">
      <div className="flex items-center justify-between">
        <span id="tag-filter-label" className="text-sm font-medium">タグ</span>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearTags}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            aria-label="選択したタグをすべてクリア"
          >
            <X className="h-3 w-3" aria-hidden="true" />
            クリア
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2" role="listbox" aria-multiselectable="true">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag.slug);
          return (
            <Badge
              key={tag.id}
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-colors",
                isSelected
                  ? "bg-primary hover:bg-primary/80"
                  : "hover:bg-accent"
              )}
              onClick={() => onToggleTag(tag.slug)}
              role="option"
              aria-selected={isSelected}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onToggleTag(tag.slug);
                }
              }}
            >
              {tag.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
