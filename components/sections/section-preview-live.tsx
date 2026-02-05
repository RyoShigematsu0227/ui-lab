"use client";

import { useState, useEffect, useCallback } from "react";
import { Maximize2, Monitor, Smartphone, Tablet, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionPreviewLiveProps {
  slug: string;
  title: string;
}

type ViewMode = "desktop" | "tablet" | "mobile";

const VIEW_SIZES = {
  desktop: { width: "100%", label: "Desktop" },
  tablet: { width: "768px", label: "Tablet" },
  mobile: { width: "375px", label: "Mobile" },
};

export function SectionPreviewLive({ slug, title }: SectionPreviewLiveProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // iframeのURLを生成
  const previewUrl = `/preview/${slug}`;

  // ビューモード変更時にiframeをリロード（キャッシュ対策）
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setIframeKey(prev => prev + 1);
  };

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
                onClick={() => handleViewModeChange("desktop")}
                title="Desktop"
              >
                <Monitor className="h-4 w-4" />
                <span className="sr-only">Desktop</span>
              </Button>
              <Button
                variant={viewMode === "tablet" ? "secondary" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handleViewModeChange("tablet")}
                title="Tablet (768px)"
              >
                <Tablet className="h-4 w-4" />
                <span className="sr-only">Tablet</span>
              </Button>
              <Button
                variant={viewMode === "mobile" ? "secondary" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => handleViewModeChange("mobile")}
                title="Mobile (375px)"
              >
                <Smartphone className="h-4 w-4" />
                <span className="sr-only">Mobile</span>
              </Button>
            </div>
            <div className="mx-2 h-4 w-px bg-border" />
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
              "h-full bg-background transition-all duration-300",
              viewMode === "desktop"
                ? "w-full"
                : viewMode === "tablet"
                ? "w-[768px] border-x border-border"
                : "w-[375px] border-x border-border"
            )}
          >
            <iframe
              key={iframeKey}
              src={previewUrl}
              className="h-full w-full border-0"
              title={`${title} preview`}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      {/* ツールバー */}
      <div className="flex items-center justify-between border-b border-border bg-card/50 px-4 py-2">
        <span className="text-sm text-muted-foreground">Preview</span>
        <div className="flex items-center gap-2">
          {/* サイズ切り替え - PCでのみ表示（スマホでは意味がないため非表示） */}
          <div className="hidden md:flex gap-1">
            <Button
              variant={viewMode === "desktop" ? "secondary" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handleViewModeChange("desktop")}
              title="Desktop"
            >
              <Monitor className="h-4 w-4" />
              <span className="sr-only">Desktop</span>
            </Button>
            <Button
              variant={viewMode === "tablet" ? "secondary" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handleViewModeChange("tablet")}
              title="Tablet (768px)"
            >
              <Tablet className="h-4 w-4" />
              <span className="sr-only">Tablet</span>
            </Button>
            <Button
              variant={viewMode === "mobile" ? "secondary" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handleViewModeChange("mobile")}
              title="Mobile (375px)"
            >
              <Smartphone className="h-4 w-4" />
              <span className="sr-only">Mobile</span>
            </Button>
          </div>
          {/* フルスクリーン - PCでのみ表示 */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex h-8 w-8 p-0"
            onClick={() => setIsFullscreen(true)}
          >
            <Maximize2 className="h-4 w-4" />
            <span className="sr-only">フルスクリーン</span>
          </Button>
        </div>
      </div>

      {/* プレビューエリア - iframeで実際のviewportサイズを再現 */}
      <div className="flex justify-center bg-muted/30 p-4 md:p-6">
        <div
          className={cn(
            "overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all duration-300",
            viewMode === "desktop"
              ? "w-full"
              : viewMode === "tablet"
              ? "w-[768px] max-w-full"
              : "w-[375px]"
          )}
          style={{
            // モバイル・タブレット時に高さを制限
            height: viewMode === "desktop" ? "auto" : "600px",
          }}
        >
          <iframe
            key={iframeKey}
            src={previewUrl}
            className={cn(
              "w-full border-0",
              viewMode === "desktop" ? "h-[600px]" : "h-full"
            )}
            title={`${title} preview`}
          />
        </div>
      </div>
    </div>
  );
}
