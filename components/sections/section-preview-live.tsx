"use client";

import { useState, useEffect, useCallback } from "react";
import { Maximize2, Monitor, Smartphone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SECTION_COMPONENTS } from "@/content/sections";

interface SectionPreviewLiveProps {
  slug: string;
  title: string;
}

export function SectionPreviewLive({ slug, title }: SectionPreviewLiveProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const SectionComponent = SECTION_COMPONENTS[slug];

  // Escキーでフルスクリーンを閉じる
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isFullscreen) {
      setIsFullscreen(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // フルスクリーン時はbodyのスクロールを無効化
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  // フルスクリーンモーダル
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        {/* ツールバー */}
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-4 py-2 backdrop-blur">
          <span className="text-sm font-medium">{title}</span>
          <div className="flex items-center gap-2">
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
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">閉じる</span>
            </Button>
          </div>
        </div>

        {/* プレビューエリア */}
        <div className="flex h-full items-center justify-center bg-muted/30 pt-12">
          <div
            className={cn(
              "h-full overflow-auto bg-background",
              viewMode === "desktop" ? "w-full" : "w-[375px] border-x border-border"
            )}
          >
            {SectionComponent ? (
              <SectionComponent />
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">プレビュー準備中</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border">
      {/* ツールバー */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-sm font-medium">プレビュー</span>
        <div className="flex items-center gap-2">
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
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setIsFullscreen(true)}
          >
            <Maximize2 className="h-4 w-4" />
            <span className="sr-only">フルスクリーン</span>
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
          {SectionComponent ? (
            <div className="max-h-[600px] overflow-auto">
              <SectionComponent />
            </div>
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center">
                <p className="text-2xl font-bold text-muted-foreground/50">
                  {title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  プレビュー準備中
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
