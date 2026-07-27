"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "プロダクト",
    children: [
      {
        title: "アナリティクス",
        description: "データを可視化し、意思決定を支援",
      },
      {
        title: "オートメーション",
        description: "ワークフローを自動化して効率化",
      },
      {
        title: "インテグレーション",
        description: "既存ツールとシームレスに連携",
      },
    ],
  },
  {
    label: "ソリューション",
    children: [
      {
        title: "スタートアップ向け",
        description: "成長フェーズに最適化されたプラン",
      },
      {
        title: "エンタープライズ向け",
        description: "大規模組織のための拡張性",
      },
    ],
  },
  { label: "料金", children: null },
  { label: "ブログ", children: null },
];

export function NavigationDropdown001() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* ロゴ */}
        <Link href="#" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted">
            <span className="text-xs font-medium text-foreground">N</span>
          </div>
          <span className="text-sm font-medium tracking-wide text-foreground">
            Notion
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item, index) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground">
                  {item.label}
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="w-72 rounded-xl border border-border/60 bg-background p-2 shadow-sm">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href="#"
                          className="group block rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-muted"
                        >
                          <div className="text-sm font-medium tracking-wide text-foreground">
                            {child.title}
                          </div>
                          <div className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href="#"
                className="rounded-md px-3 py-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* デスクトップCTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#"
            className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            ログイン
          </Link>
          <Link
            href="#"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium tracking-wide text-background transition-colors duration-200 hover:bg-foreground/90"
          >
            無料で始める
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="rounded-md p-1.5 text-muted-foreground hover:text-foreground lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background px-4 pb-6 lg:hidden">
          <div className="space-y-1 pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href="#"
                        className="block rounded-lg px-3 py-2.5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                      >
                        {child.title}
                      </Link>
                    ))}
                    <div className="mx-3 my-2 h-px bg-border/40" />
                  </div>
                ) : (
                  <Link
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="#"
              className="rounded-lg px-3 py-2.5 text-center text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted"
            >
              ログイン
            </Link>
            <Link
              href="#"
              className="rounded-md bg-foreground px-4 py-2.5 text-center text-sm font-medium tracking-wide text-background"
            >
              無料で始める
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
