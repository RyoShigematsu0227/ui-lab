import Link from "next/link";

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { label: "セクション", href: "/" },
      { label: "サイト事例", href: "/sites" },
    ],
  },
  {
    title: "カテゴリ",
    links: [
      { label: "ヒーロー", href: "/categories/hero" },
      { label: "フィーチャー", href: "/categories/feature" },
      { label: "料金テーブル", href: "/categories/pricing" },
      { label: "CTA", href: "/categories/cta" },
    ],
  },
  {
    title: "サイト情報",
    links: [
      { label: "About", href: "/about" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
];

export function Footer() {
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
              AIが生成するモダンUIセクションのギャラリー
            </p>
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
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} UI Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
