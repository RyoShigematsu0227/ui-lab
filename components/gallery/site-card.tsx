"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Site } from "@/types";
import { cn } from "@/lib/utils";

interface SiteCardProps {
  site: Site;
  priority?: boolean;
}

// 7日以内に作成されたサイトは新着とみなす
function isNew(createdAt: string): boolean {
  const created = new Date(createdAt);
  const now = new Date();
  const diffDays = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export function SiteCard({ site, priority = false }: SiteCardProps) {
  const isNewSite = isNew(site.createdAt);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showPlaceholder = !site.screenshotUrl || imageError;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-soft">
        <Link href={`/sites/${site.slug}`}>
          {/* サムネイル */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            {!showPlaceholder ? (
              <Image
                src={site.screenshotUrl}
                alt={site.title}
                fill
                priority={priority}
                className={cn(
                  "object-cover transition-all duration-500",
                  isHovered ? "scale-105" : "scale-100"
                )}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
            ) : (
              /* プレースホルダー */
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
                <span className="text-4xl font-bold text-primary/20">
                  {site.title.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              </div>
            )}

            {/* NEWバッジ */}
            {isNewSite && (
              <div className="absolute left-3 top-3 z-10">
                <Badge className="border-0 bg-emerald-500/90 text-white backdrop-blur-sm">
                  NEW
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
        </Link>

        {/* コンテンツ */}
        <div className="p-5">
          {/* タイトル + 外部リンク */}
          <div className="flex items-start justify-between gap-3">
            <Link href={`/sites/${site.slug}`}>
              <h3 className="line-clamp-1 text-base font-semibold leading-tight tracking-tight transition-colors group-hover:text-primary">
                {site.title}
              </h3>
            </Link>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">サイトを開く</span>
            </a>
          </div>

          {/* 説明 */}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>

          {/* タグ */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {site.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag.name}
              </span>
            ))}
            {site.tags.length > 3 && (
              <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{site.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
