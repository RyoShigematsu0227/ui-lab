"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Sections", href: "/" },
  { label: "Sites", href: "/sites" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 背景 - 深いダーク */}
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md dark:bg-zinc-950/95" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800/50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between px-6 lg:px-8">
          {/* ロゴ */}
          <Link
            href="/"
            className="group"
          >
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/90 transition-opacity duration-300 group-hover:opacity-60">
              UI Lab
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="メインナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[0.2em] uppercase text-white/50 transition-all duration-300 hover:text-white/90"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右側アクション */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* モバイルメニューボタン */}
            <button
              className="flex h-8 w-8 items-center justify-center text-white/50 transition-opacity duration-300 hover:opacity-60 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-nav"
        className={cn(
          "absolute left-0 right-0 top-full bg-zinc-950/98 backdrop-blur-md transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="border-b border-zinc-800/50">
          <nav
            className="flex flex-col px-6 py-6"
            aria-label="モバイルナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-[11px] tracking-[0.2em] uppercase text-white/50 transition-colors duration-300 hover:text-white/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
