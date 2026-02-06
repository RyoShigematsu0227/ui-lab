"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationSidebar001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ホーム", href: "#" },
    { label: "サービス", href: "#" },
    { label: "実績", href: "#" },
    { label: "会社概要", href: "#" },
    { label: "お問い合わせ", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
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
              className="rounded-sm px-4 py-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* デスクトップCTA */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="h-4 w-px bg-border/40" />
          <button className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors duration-200 hover:text-foreground">
            <span className="h-1 w-1 rounded-full bg-green-500/60" />
            相談予約
          </button>
        </div>

        {/* モバイルメニューボタン */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-200 hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="メニュー"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-all duration-200 ${
                mobileMenuOpen
                  ? "translate-y-[3.5px] rotate-45"
                  : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-all duration-200 ${
                mobileMenuOpen
                  ? "-translate-y-[3.5px] -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background px-4 py-8 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between rounded-sm px-2 py-3 text-sm tracking-wide text-foreground transition-colors duration-200 hover:text-muted-foreground"
              >
                <span>{link.label}</span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 h-px bg-border/40" />
          <div className="mt-6">
            <button className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-green-500/60" />
              相談予約
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
