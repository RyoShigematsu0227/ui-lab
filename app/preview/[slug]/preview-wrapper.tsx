"use client";

import { useEffect } from "react";

interface PreviewWrapperProps {
  theme?: string;
  componentType: "navigation" | "footer" | "normal";
  children: React.ReactNode;
}

// スケルトンプレースホルダー - ナビ/フッターの文脈を示すダミーコンテンツ
function SkeletonContent({ lines = 3 }: { lines?: number }) {
  return (
    <div className="px-8 py-12 space-y-6">
      {/* タイトル風スケルトン */}
      <div className="h-8 w-1/3 bg-muted/40 rounded animate-pulse" />
      {/* 本文風スケルトン */}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-4 bg-muted/30 rounded animate-pulse"
            style={{ width: `${85 - i * 10}%` }}
          />
        ))}
      </div>
      {/* カード風スケルトン */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-24 bg-muted/20 rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export function PreviewWrapper({ theme, componentType, children }: PreviewWrapperProps) {
  // テーマをdocumentに適用
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      document.documentElement.style.colorScheme = theme;
    }
  }, [theme]);

  const isSmallComponent = componentType !== "normal";

  return (
    <>
      <style>{`
        [data-site-header] { display: none !important; }
        [data-site-footer] { display: none !important; }
        main { padding-top: 0 !important; }
        .fixed.top-0.bottom-0 { display: none !important; }
      `}</style>
      <div className="min-h-screen bg-background">
        {/* ナビゲーションの場合: コンポーネント → スケルトン */}
        {componentType === "navigation" && (
          <>
            {children}
            <SkeletonContent lines={4} />
          </>
        )}

        {/* フッターの場合: スケルトン → コンポーネント */}
        {componentType === "footer" && (
          <>
            <SkeletonContent lines={4} />
            {children}
          </>
        )}

        {/* 通常コンポーネント */}
        {componentType === "normal" && children}
      </div>
    </>
  );
}
