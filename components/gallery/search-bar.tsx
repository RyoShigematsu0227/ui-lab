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
  placeholder = "Search sections...",
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
          "h-11 w-full rounded-lg border border-border/50 bg-background pl-11 pr-11 text-sm",
          "placeholder:text-muted-foreground/60",
          "transition-all duration-300",
          "hover:border-border",
          "focus:border-primary/50 focus:outline-none"
        )}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "flex h-6 w-6 items-center justify-center rounded",
            "text-muted-foreground transition-colors",
            "hover:text-foreground"
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Clear</span>
        </button>
      )}
    </div>
  );
}
