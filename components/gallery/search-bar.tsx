"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "セクションを検索...",
  className,
}: SearchBarProps) {
  return (
    <div className={cn("relative", className)} role="search">
      <Search
        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className={cn(
          "h-12 w-full rounded-xl border border-border/50 bg-card/50 pl-11 pr-11 text-sm",
          "placeholder:text-muted-foreground/70",
          "transition-all duration-200",
          "hover:border-border hover:bg-card",
          "focus:border-primary/50 focus:bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
        )}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "flex h-8 w-8 items-center justify-center rounded-lg",
            "text-muted-foreground transition-colors",
            "hover:bg-muted hover:text-foreground"
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">クリア</span>
        </button>
      )}
    </div>
  );
}
