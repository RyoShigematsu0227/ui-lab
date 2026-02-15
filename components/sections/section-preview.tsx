"use client";

import { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionPreviewProps {
  title: string;
}

export function SectionPreview({ title }: SectionPreviewProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className="rounded-lg border border-border">
      {/* ツールバー */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-sm font-medium">プレビュー</span>
        <div className="flex gap-1">
          <Button
            variant={viewMode === "desktop" ? "secondary" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode("desktop")}
          >
            <Monitor className="h-4 w-4" />
            <span className="sr-only">デスクトップ</span>
          </Button>
          <Button
            variant={viewMode === "mobile" ? "secondary" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setViewMode("mobile")}
          >
            <Smartphone className="h-4 w-4" />
            <span className="sr-only">モバイル</span>
          </Button>
        </div>
      </div>

      {/* プレビューエリア */}
      <div className="flex justify-center bg-muted/30 p-4">
        <div
          className={cn(
            "overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all",
            viewMode === "desktop" ? "w-full" : "w-[375px]"
          )}
        >
          {/* プレースホルダープレビュー */}
          <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="text-center">
              <p className="text-2xl font-bold text-muted-foreground/50">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">プレビュー（実装予定）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
