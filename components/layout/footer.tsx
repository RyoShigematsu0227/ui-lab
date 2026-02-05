import Link from "next/link";
import { Heart, Github, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { label: "セクション", href: "/" },
      { label: "サイト事例", href: "/sites" },
      { label: "お気に入り", href: "/favorites" },
    ],
  },
  {
    title: "カテゴリ",
    links: [
      { label: "ヒーロー", href: "/categories/hero" },
      { label: "フィーチャー", href: "/categories/feature" },
      { label: "料金テーブル", href: "/categories/pricing" },
      { label: "CTA", href: "/categories/cta" },
      { label: "FAQ", href: "/categories/faq" },
    ],
  },
  {
    title: "リソース",
    links: [
      { label: "About", href: "/about" },
      { label: "全カテゴリ", href: "/categories" },
      { label: "全タグ", href: "/tags" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-muted/30">
      {/* 背景パターン */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20" />

      <div className="container relative mx-auto max-w-screen-2xl px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* ブランド */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              {/* ロゴマーク */}
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                <span className="text-lg font-bold text-primary-foreground">U</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">UI Lab</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Modern UI Gallery
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AIが生成するモダンUIセクションのギャラリー。Next.js + Tailwind CSSのコードをコピーして、あなたのプロジェクトにすぐに導入できます。
            </p>

            {/* ソーシャルリンク */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-card hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-card hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* リンク */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* コピーライト */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} UI Lab. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with{" "}
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> and AI
          </p>
        </div>
      </div>
    </footer>
  );
}
