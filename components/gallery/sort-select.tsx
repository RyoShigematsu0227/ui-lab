"use client";

import { ArrowDownAZ, ArrowUpDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string; icon: typeof Clock }[] = [
  { value: "newest", label: "新着順", icon: Clock },
  { value: "oldest", label: "古い順", icon: Clock },
  { value: "title-asc", label: "タイトル（A→Z）", icon: ArrowDownAZ },
  { value: "title-desc", label: "タイトル（Z→A）", icon: ArrowDownAZ },
];

export function SortSelect({ value, onChange }: SortSelectProps) {
  const currentOption = sortOptions.find((opt) => opt.value === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2" aria-label={`並び替え: ${currentOption?.label}`}>
          <ArrowUpDown className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{currentOption?.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className={value === option.value ? "bg-accent" : ""}
          >
            <option.icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
