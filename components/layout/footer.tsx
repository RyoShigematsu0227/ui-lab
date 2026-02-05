import Link from "next/link";
import { Heart, Keyboard } from "lucide-react";

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
    title: "サイト情報",
    links: [
      { label: "About", href: "/about" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* ブランド */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              UI Lab
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              AIが生成するモダンUIセクションのギャラリー。Next.js + Tailwind CSSのコードをコピーして使えます。
            </p>
            {/* キーボードショートカットヒント */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Keyboard className="h-3 w-3" />
              <span>
                <kbd className="rounded border border-border bg-muted px-1">?</kbd> でショートカット表示
              </span>
            </div>
          </div>

          {/* リンク */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} UI Lab. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> and AI
          </p>
        </div>
      </div>
    </footer>
  );
}
