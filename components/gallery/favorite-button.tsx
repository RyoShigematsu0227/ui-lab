"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  size?: "sm" | "default";
}

export function FavoriteButton({
  isFavorite,
  onToggle,
  size = "default",
}: FavoriteButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "transition-colors",
        size === "sm" ? "h-8 w-8" : "h-9 w-9",
        isFavorite && "text-red-500 hover:text-red-600"
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
    >
      <Heart
        className={cn(
          size === "sm" ? "h-4 w-4" : "h-5 w-5",
          isFavorite && "fill-current"
        )}
      />
      <span className="sr-only">
        {isFavorite ? "お気に入りから削除" : "お気に入りに追加"}
      </span>
    </Button>
  );
}
