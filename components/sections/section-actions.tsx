"use client";

import { FavoriteButton } from "@/components/gallery/favorite-button";
import { ShareButton } from "./share-button";
import { useFavoritesContext } from "@/components/layout/favorites-provider";

interface SectionActionsProps {
  slug: string;
  title: string;
}

export function SectionActions({ slug, title }: SectionActionsProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  return (
    <div className="flex items-center gap-2">
      <FavoriteButton isFavorite={isFavorite(slug)} onToggle={() => toggleFavorite(slug)} />
      <ShareButton slug={slug} title={title} />
    </div>
  );
}
