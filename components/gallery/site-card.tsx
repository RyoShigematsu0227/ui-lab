"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Site } from "@/types";
import { cn } from "@/lib/utils";

interface SiteCardProps {
  site: Site;
  priority?: boolean;
}

export function SiteCard({ site, priority = false }: SiteCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showPlaceholder = !site.screenshotUrl || imageError;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block overflow-hidden rounded-lg border border-border/50 bg-card",
          "transition-all duration-500 ease-out",
          "hover:border-border hover:shadow-elevated"
        )}
      >
        {/* サムネイル */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {!showPlaceholder ? (
            <Image
              src={site.screenshotUrl}
              alt={site.title}
              fill
              priority={priority}
              className={cn(
                "object-cover object-top transition-transform duration-700 ease-out",
                isHovered ? "scale-[1.02]" : "scale-100"
              )}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <span className="text-5xl font-bold text-muted-foreground/20">
                {site.title.charAt(0)}
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
              Visit Site
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-4">
          <h3 className="line-clamp-1 text-sm font-medium tracking-wide transition-colors group-hover:text-primary">
            {site.title}
          </h3>
          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
            {site.description}
          </p>
        </div>
      </a>
    </article>
  );
}
