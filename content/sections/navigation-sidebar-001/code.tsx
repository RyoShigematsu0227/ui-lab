"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationSidebar001() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { label: "ホーム", href: "#" },
    { label: "サービス", href: "#" },
    { label: "プロジェクト", href: "#" },
    { label: "チーム", href: "#" },
    { label: "ブログ", href: "#" },
    { label: "お問い合わせ", href: "#" },
  ];

  return (
    <header className="relative z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* ロゴ */}
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border">
            <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Atelier
          </span>
        </Link>

        {/* デスクトップ右側 */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            ログイン
          </Link>
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            <span>メニュー</span>
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="rounded-full p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </nav>

      {/* オーバーレイ */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* サイドバーパネル */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-background transition-transform duration-500 ease-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 py-8">
          {/* 閉じるボタン */}
          <div className="flex justify-end">
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-full p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* ラベル */}
          <div className="mt-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              ナビゲーション
            </span>
            <div className="mt-3 h-px bg-border/40" />
          </div>

          {/* ナビリンク */}
          <nav className="mt-8 flex flex-1 flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-4 rounded-lg px-2 py-3 transition-colors duration-200 hover:bg-muted/50"
              >
                <span className="text-[10px] tabular-nums tracking-wider text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium tracking-wide text-foreground/80 transition-colors duration-200 group-hover:text-foreground">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* フッター */}
          <div className="mt-auto">
            <div className="h-px bg-border/40" />
            <div className="mt-6 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                &copy; 2026 Atelier
              </span>
              <div className="flex items-center gap-4">
                {/* SNSアイコン（プレースホルダー） */}
                {["X", "IG", "LI"].map((label) => (
                  <Link
                    key={label}
                    href="#"
                    className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
