"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "セクションを検索...",
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-input bg-background pl-10 pr-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      {value && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 p-0"
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">クリア</span>
        </Button>
      )}
    </div>
  );
}
