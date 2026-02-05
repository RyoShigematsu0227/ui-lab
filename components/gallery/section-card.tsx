"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/types";
import { FavoriteButton } from "./favorite-button";
import { useFavoritesContext } from "@/components/layout/favorites-provider";

interface SectionCardProps {
  section: Section;
  priority?: boolean;
}

// 7日以内に作成されたセクションは新着とみなす
function isNew(createdAt: string): boolean {
  const created = new Date(createdAt);
  const now = new Date();
  const diffDays = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export function SectionCard({ section, priority = false }: SectionCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const isNewSection = isNew(section.createdAt);
  const [imageError, setImageError] = useState(false);

  const showPlaceholder = !section.screenshotUrl || imageError;

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:ring-2 hover:ring-primary/20">
      <Link href={`/sections/${section.slug}`}>
        {/* サムネイル */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {!showPlaceholder ? (
            <Image
              src={section.screenshotUrl}
              alt={section.title}
              fill
              priority={priority}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            /* プレースホルダー画像 */
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <span className="text-4xl font-bold text-muted-foreground/30">
                {section.title.charAt(0)}
              </span>
            </div>
          )}
          {/* NEWバッジ */}
          {isNewSection && (
            <div className="absolute left-2 top-2 z-10">
              <Badge className="bg-green-500 text-white hover:bg-green-500">
                NEW
              </Badge>
            </div>
          )}
          {/* ホバーオーバーレイ */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-sm font-medium text-white">詳細を見る</span>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        {/* カテゴリ + お気に入り */}
        <div className="mb-1 flex items-center justify-between">
          {section.category && (
            <p className="text-xs text-muted-foreground">
              {section.category.name}
            </p>
          )}
          <FavoriteButton
            size="sm"
            isFavorite={isFavorite(section.slug)}
            onToggle={() => toggleFavorite(section.slug)}
          />
        </div>

        <Link href={`/sections/${section.slug}`}>
          {/* タイトル */}
          <h3 className="mb-2 line-clamp-1 font-semibold leading-tight hover:underline">
            {section.title}
          </h3>
        </Link>

        {/* 説明 */}
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {section.description}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-1">
          {section.tags.slice(0, 3).map((tag) => (
            <Badge key={tag.id} variant="secondary" className="text-xs">
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
