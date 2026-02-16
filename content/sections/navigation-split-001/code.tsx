"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "サービス", href: "#" },
  { label: "事例", href: "#" },
  { label: "チーム", href: "#" },
  { label: "ブログ", href: "#" },
];

export function NavigationSplit001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 左: ロゴ */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border">
              <div className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
            </div>
            <Link
              href="#"
              className="text-sm font-medium tracking-wide text-foreground"
            >
              Atelier
            </Link>
          </div>

          {/* 中央: デスクトップナビゲーション */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-4 py-2 text-[13px] tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 右: CTA + モバイルメニュー */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden text-[13px] tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground md:block"
            >
              ログイン
            </Link>
            <div className="hidden h-4 w-px bg-border/60 md:block" />
            <Link
              href="#"
              className="hidden items-center gap-2 rounded-md border border-foreground/15 bg-foreground px-4 py-2 text-[13px] font-medium tracking-wide text-background transition-all duration-200 hover:bg-foreground/90 md:inline-flex"
            >
              お問い合わせ
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* モバイルメニューボタン */}
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:text-foreground md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-4 w-4"
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
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="rounded-md px-3 py-2.5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                ログイン
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:bg-foreground/90"
              >
                お問い合わせ
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
