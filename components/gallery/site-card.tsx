"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
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
      <div className={cn(
        "overflow-hidden rounded-lg border border-border/50 bg-card",
        "transition-all duration-500 ease-out",
        "hover:border-border hover:shadow-elevated"
      )}>
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
                  {site.title.charAt(0)}
                </span>
              </div>
            )}

            {/* NEWバッジ */}
            {isNewSite && (
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
        </Link>

        {/* コンテンツ */}
        <div className="p-4">
          {/* タイトル + 外部リンク */}
          <div className="flex items-start justify-between gap-3">
            <Link href={`/sites/${site.slug}`}>
              <h3 className="line-clamp-1 text-sm font-medium tracking-wide transition-colors group-hover:text-primary">
                {site.title}
              </h3>
            </Link>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-muted-foreground hover-opacity hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">サイトを開く</span>
            </a>
          </div>

          {/* タグ */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {site.tags.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="text-[10px] text-muted-foreground"
              >
                #{tag.name}
              </span>
            ))}
            {site.tags.length > 2 && (
              <span className="text-[10px] text-muted-foreground">
                +{site.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
