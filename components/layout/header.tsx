"use client";

import Link from "next/link";
import { Heart, Menu, X, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Sections", href: "/" },
  { label: "Favorites", href: "/favorites", icon: Heart },
  { label: "Sites", href: "/sites" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 背景 */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />

      <div className="relative container mx-auto max-w-screen-2xl">
        <div className="flex h-16 md:h-20 items-center justify-between px-6 sm:px-8 md:px-12">
          {/* ロゴ */}
          <Link
            href="/"
            className="group flex items-center gap-3 hover-opacity"
          >
            {/* ロゴマーク */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-sm font-bold text-background">U</span>
            </div>
            {/* ロゴテキスト */}
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">UI Lab</span>
              <span className="text-[9px] tracking-widest-custom uppercase text-muted-foreground hidden sm:block">
                Modern UI Gallery
              </span>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="メインナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm tracking-wide text-muted-foreground",
                  "hover-opacity transition-all duration-300",
                  "hover:text-foreground"
                )}
              >
                {item.icon && (
                  <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右側アクション */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* モバイルメニューボタン */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:hidden hover-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-nav"
        className={cn(
          "absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="border-b border-border/50">
          <nav
            className="container mx-auto flex flex-col px-6 py-4"
            aria-label="モバイルナビゲーション"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 py-4 text-sm tracking-wide text-muted-foreground",
                  "hover:text-foreground transition-colors",
                  "border-b border-border/30 last:border-0"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.icon && (
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
