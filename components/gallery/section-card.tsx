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
import { useTheme } from "next-themes";

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
  const { resolvedTheme } = useTheme();
  const isNewSection = isNew(section.createdAt);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // テーマに応じたスクリーンショットURLを生成
  const getThemedScreenshotUrl = () => {
    if (!section.screenshotUrl) return null;
    if (resolvedTheme === "light") {
      // /screenshots/slug.png -> /screenshots/slug-light.png
      return section.screenshotUrl.replace(/\.png$/, "-light.png");
    }
    return section.screenshotUrl;
  };

  const screenshotUrl = getThemedScreenshotUrl();
  const showPlaceholder = !screenshotUrl || imageError;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/sections/${section.slug}`}
        className={cn(
          "block overflow-hidden rounded-lg border border-border/50 bg-card",
          "transition-all duration-500 ease-out",
          "hover:border-border hover:shadow-elevated"
        )}
      >
        {/* サムネイル */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {!showPlaceholder && screenshotUrl ? (
            <Image
              src={screenshotUrl}
              alt={section.title}
              fill
              priority={priority}
              className={cn(
                "object-cover transition-transform duration-700 ease-out",
                isHovered ? "scale-[1.02]" : "scale-100"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            /* プレースホルダー */
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <span className="text-5xl font-bold text-muted-foreground/20">
                {section.title.charAt(0)}
              </span>
            </div>
          )}

          {/* NEWバッジ */}
          {isNewSection && (
            <div className="absolute left-3 top-3 z-10">
              <span className="inline-flex items-center px-2 py-1 text-[10px] font-medium tracking-wider uppercase bg-foreground text-background rounded">
                New
              </span>
            </div>
          )}

          {/* ホバーオーバーレイ */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "bg-background/80 backdrop-blur-sm",
              "transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-4">
          {/* カテゴリ */}
          {section.category && (
            <p className="text-[10px] font-medium tracking-widest-custom uppercase text-muted-foreground mb-2">
              {section.category.name}
            </p>
          )}

          {/* タイトル + お気に入り */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-sm font-medium tracking-wide transition-colors group-hover:text-primary">
              {section.title}
            </h3>
            <FavoriteButton
              size="sm"
              isFavorite={isFavorite(section.slug)}
              onToggle={() => toggleFavorite(section.slug)}
            />
          </div>

          {/* タグ */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {section.tags.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="text-[10px] text-muted-foreground"
              >
                #{tag.name}
              </span>
            ))}
            {section.tags.length > 2 && (
              <span className="text-[10px] text-muted-foreground">
                +{section.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
