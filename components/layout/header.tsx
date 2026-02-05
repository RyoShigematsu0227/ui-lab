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
  { label: "セクション", href: "/" },
  { label: "お気に入り", href: "/favorites", icon: Heart },
  { label: "サイト事例", href: "/sites" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 背景ブラー */}
      <div className="absolute inset-0 border-b border-border/40 bg-background/80 backdrop-blur-xl" />

      <div className="container relative mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:h-[72px]">
        {/* ロゴ */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          {/* ロゴマーク */}
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
            <span className="text-base font-bold text-primary-foreground">U</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          {/* ロゴテキスト */}
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">UI Lab</span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:block">
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
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                "hover:bg-accent hover:text-foreground"
              )}
            >
              {item.icon && (
                <item.icon className="h-4 w-4" aria-hidden="true" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 右側アクション */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* モバイルメニューボタン */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 md:hidden"
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

      {/* モバイルメニュー */}
      <div
        id="mobile-nav"
        className={cn(
          "absolute left-0 right-0 top-full overflow-hidden border-b border-border/40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        )}
      >
        <nav
          className="container mx-auto flex flex-col gap-1 px-4 py-4"
          aria-label="モバイルナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors",
                "hover:bg-accent hover:text-foreground"
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
    </header>
  );
}
