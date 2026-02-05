"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { useRecentSectionsContext } from "@/components/layout/recent-sections-provider";
import { MOCK_SECTIONS } from "@/data/mock-sections";
import { cn } from "@/lib/utils";

export function RecentSections() {
  const { recentSlugs, isLoaded, clearRecentSections } = useRecentSectionsContext();

  if (!isLoaded || recentSlugs.length === 0) {
    return null;
  }

  const recentSections = recentSlugs
    .map((slug) => MOCK_SECTIONS.find((s) => s.slug === slug))
    .filter(Boolean);

  if (recentSections.length === 0) {
    return null;
  }

  return (
    <section className="mb-16 opacity-0 animate-fade-up">
      <div className="mb-6 flex items-center justify-between">
        <span className="heading-section text-muted-foreground tracking-widest-custom">
          Recently Viewed
        </span>
        <button
          onClick={clearRecentSections}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover-opacity hover:text-foreground transition-colors"
        >
          <X className="h-3 w-3" />
          Clear
        </button>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {recentSections.map((section) => (
            <Link
              key={section!.slug}
              href={`/sections/${section!.slug}`}
              className="group flex-shrink-0"
            >
              <div
                className={cn(
                  "w-48 overflow-hidden rounded-lg border border-border/50 bg-card",
                  "transition-all duration-300",
                  "hover:border-border"
                )}
              >
                {/* サムネイル */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground/20">
                      {section!.title.charAt(0)}
                    </span>
                  </div>
                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-xs font-medium">
                      View
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-3">
                  <p className="truncate text-xs font-medium transition-colors group-hover:text-primary">
                    {section!.title}
                  </p>
                  {section!.category && (
                    <p className="mt-1 truncate text-[10px] text-muted-foreground">
                      {section!.category.name}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* フェードエッジ */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
