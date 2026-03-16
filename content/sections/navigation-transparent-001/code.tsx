"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationTransparent001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "サービス", href: "#" },
    { label: "事例紹介", href: "#" },
    { label: "会社概要", href: "#" },
    { label: "お知らせ", href: "#" },
  ];

  return (
    <header className="relative z-50 w-full">
      {/* 背景グラデーション（プレビュー用） */}
      <div className="absolute inset-0 h-64 bg-gradient-to-b from-foreground/5 to-transparent" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* ロゴ */}
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
          </div>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Studio
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            ログイン
          </Link>
          <Link
            href="#"
            className="rounded-full border border-border px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            お問い合わせ
          </Link>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="rounded-full p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground md:hidden"
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
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full mx-4 rounded-2xl border border-border bg-background/95 px-6 py-8 shadow-sm backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 h-px bg-border/40" />
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#"
              className="rounded-lg px-3 py-2.5 text-center text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              ログイン
            </Link>
            <Link
              href="#"
              className="rounded-full border border-border bg-foreground px-4 py-2.5 text-center text-sm font-medium tracking-wide text-background"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
