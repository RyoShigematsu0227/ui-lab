"use client";

import Link from "next/link";
import { History, X, ArrowRight } from "lucide-react";
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
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <History className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">最近閲覧</h2>
            <p className="text-sm text-muted-foreground">続きから見る</p>
          </div>
        </div>
        <button
          onClick={clearRecentSections}
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
          クリア
        </button>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {recentSections.map((section, index) => (
            <Link
              key={section!.slug}
              href={`/sections/${section!.slug}`}
              className="group flex-shrink-0"
            >
              <div
                className={cn(
                  "w-52 overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300",
                  "hover:border-primary/20 hover:shadow-soft"
                )}
              >
                {/* サムネイル */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="flex h-full items-center justify-center">
                    <span className="text-3xl font-bold text-primary/20">
                      {section!.title.charAt(0)}
                    </span>
                  </div>
                  {/* 番号バッジ */}
                  <div className="absolute left-2 top-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-background/80 text-xs font-medium backdrop-blur-sm">
                      {index + 1}
                    </span>
                  </div>
                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      見る
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-3">
                  <p className="truncate text-sm font-medium transition-colors group-hover:text-primary">
                    {section!.title}
                  </p>
                  {section!.category && (
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
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
