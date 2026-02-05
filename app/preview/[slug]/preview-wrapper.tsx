"use client";

import { useEffect } from "react";

interface PreviewWrapperProps {
  theme?: string;
  isSmallComponent: boolean;
  children: React.ReactNode;
}

export function PreviewWrapper({ theme, isSmallComponent, children }: PreviewWrapperProps) {
  // テーマをdocumentに適用
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      document.documentElement.style.colorScheme = theme;
    }
  }, [theme]);

  // 小さいコンポーネント用の背景色
  const bgClass = isSmallComponent
    ? theme === "light"
      ? "bg-gray-300"
      : "bg-zinc-600"
    : "bg-background";

  return (
    <>
      <style>{`
        header { display: none !important; }
        footer { display: none !important; }
        main { padding-top: 0 !important; }
        .fixed.top-0.bottom-0 { display: none !important; }
      `}</style>
      <div className={`min-h-screen ${bgClass}`}>
        {children}
      </div>
    </>
  );
}
