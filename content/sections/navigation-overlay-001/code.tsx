"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationOverlay001() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "サービス", href: "#", description: "提供するソリューション" },
    { label: "プロジェクト", href: "#", description: "制作実績の紹介" },
    { label: "チーム", href: "#", description: "メンバー紹介" },
    { label: "ブログ", href: "#", description: "最新の知見と情報" },
    { label: "お問い合わせ", href: "#", description: "ご相談はこちら" },
  ];

  const socialLinks = [
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="#"
            className="text-lg font-medium tracking-wide text-foreground"
          >
            Atelier
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            <span className="hidden sm:inline">メニュー</span>
            <div className="flex flex-col gap-1.5">
              <div className="h-px w-5 bg-current" />
              <div className="h-px w-3.5 bg-current" />
            </div>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-background">
          <div className="flex h-full flex-col">
            {/* オーバーレイヘッダー */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
              <Link
                href="#"
                className="text-lg font-medium tracking-wide text-foreground"
              >
                Atelier
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <span className="hidden sm:inline">閉じる</span>
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

            {/* ナビゲーションリンク */}
            <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="space-y-0 divide-y divide-border/30">
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-baseline justify-between py-6 sm:py-8"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-2xl font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground sm:text-3xl lg:text-4xl">
                        {link.label}
                      </span>
                    </div>
                    <span className="hidden text-xs font-light tracking-wide text-muted-foreground/50 transition-colors duration-200 group-hover:text-muted-foreground sm:block">
                      {link.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* フッター */}
            <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
              <div className="h-px bg-border/30" />
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground/30">
                  &copy; 2024 Atelier
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
