"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/types";
import { FavoriteButton } from "./favorite-button";
import { useFavoritesContext } from "@/components/layout/favorites-provider";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [isHovered, setIsHovered] = useState(false);

  const showPlaceholder = !section.screenshotUrl || imageError;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/sections/${section.slug}`}
        className="block overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-soft"
      >
        {/* サムネイル */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {!showPlaceholder ? (
            <Image
              src={section.screenshotUrl}
              alt={section.title}
              fill
              priority={priority}
              className={cn(
                "object-cover transition-all duration-500",
                isHovered ? "scale-105 blur-0" : "scale-100"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            /* プレースホルダー */
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary/20">
                  {section.title.charAt(0)}
                </span>
              </div>
              {/* グリッドパターン */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            </div>
          )}

          {/* NEWバッジ */}
          {isNewSection && (
            <div className="absolute left-3 top-3 z-10">
              <Badge className="border-0 bg-emerald-500/90 text-white backdrop-blur-sm">
                NEW
              </Badge>
            </div>
          )}

          {/* カテゴリバッジ */}
          {section.category && (
            <div className="absolute right-3 top-3 z-10">
              <Badge
                variant="secondary"
                className="border-0 bg-background/80 backdrop-blur-sm"
              >
                {section.category.name}
              </Badge>
            </div>
          )}

          {/* ホバーオーバーレイ */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-100 scale-90">
              詳細を見る
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-5">
          {/* タイトル + お気に入り */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-base font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
              {section.title}
            </h3>
            <FavoriteButton
              size="sm"
              isFavorite={isFavorite(section.slug)}
              onToggle={() => toggleFavorite(section.slug)}
            />
          </div>

          {/* 説明 */}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {section.description}
          </p>

          {/* タグ */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {section.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag.name}
              </span>
            ))}
            {section.tags.length > 3 && (
              <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{section.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
