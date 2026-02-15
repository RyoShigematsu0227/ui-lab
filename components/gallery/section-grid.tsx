"use client";

import { Section } from "@/types";
import { SectionCard } from "./section-card";
import { cn } from "@/lib/utils";

interface SectionGridProps {
  sections: Section[];
  className?: string;
  // このindex未満のアイテムはアニメーションをスキップ
  animateFrom?: number;
}

export function SectionGrid({ sections, className, animateFrom = 0 }: SectionGridProps) {
  if (sections.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border">
        <p className="text-muted-foreground">セクションがありません</p>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}>
      {sections.map((section, index) => {
        const shouldAnimate = index >= animateFrom;
        return (
          <div
            key={section.id}
            className={
              shouldAnimate
                ? "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                : undefined
            }
            style={
              shouldAnimate ? { animationDelay: `${(index - animateFrom) * 50}ms` } : undefined
            }
          >
            <SectionCard section={section} priority={index < 4} />
          </div>
        );
      })}
    </div>
  );
}
