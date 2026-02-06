"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionCard } from "./section-card";
import { useFavoritesContext } from "@/components/layout/favorites-provider";
import { Section } from "@/types";

interface FavoritesPageContentProps {
  sections: Section[];
}

export function FavoritesPageContent({ sections }: FavoritesPageContentProps) {
  const { favorites, isLoaded } = useFavoritesContext();

  // ローディング中
  if (!isLoaded) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // お気に入りがない場合
  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
        <Heart className="mb-4 h-12 w-12 text-muted-foreground/50" />
        <p className="mb-2 text-lg font-medium">お気に入りがありません</p>
        <p className="mb-6 text-sm text-muted-foreground">
          セクションのハートアイコンをクリックして追加できます
        </p>
        <Link href="/">
          <Button>セクションを探す</Button>
        </Link>
      </div>
    );
  }

  // お気に入りセクションを取得
  const favoriteSections = sections.filter((section) =>
    favorites.includes(section.slug)
  );

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        {favoriteSections.length} 件のお気に入り
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteSections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
