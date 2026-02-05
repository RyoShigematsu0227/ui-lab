"use client";

import Link from "next/link";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRecentSectionsContext } from "@/components/layout/recent-sections-provider";
import { MOCK_SECTIONS } from "@/data/mock-sections";

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
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold">最近閲覧したセクション</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1 text-xs text-muted-foreground"
          onClick={clearRecentSections}
        >
          <X className="h-3 w-3" />
          クリア
        </Button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {recentSections.map((section) => (
          <Link
            key={section!.slug}
            href={`/sections/${section!.slug}`}
            className="group flex-shrink-0"
          >
            <div className="w-40 overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md hover:ring-2 hover:ring-primary/20">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="flex h-full items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    {section!.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-2">
                <p className="truncate text-xs font-medium group-hover:text-primary">
                  {section!.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
