import Link from "next/link";

export function FooterSplit001() {
  const linkGroups = [
    {
      title: "プロダクト",
      links: [
        { label: "機能一覧", href: "#" },
        { label: "料金プラン", href: "#" },
        { label: "導入事例", href: "#" },
        { label: "アップデート", href: "#" },
      ],
    },
    {
      title: "サポート",
      links: [
        { label: "ドキュメント", href: "#" },
        { label: "ヘルプセンター", href: "#" },
        { label: "API リファレンス", href: "#" },
        { label: "ステータス", href: "#" },
      ],
    },
    {
      title: "会社情報",
      links: [
        { label: "私たちについて", href: "#" },
        { label: "採用情報", href: "#" },
        { label: "ブログ", href: "#" },
        { label: "お問い合わせ", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* メインエリア：左右スプリット */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* 左側：ブランド情報 */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="#" className="inline-flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                </div>
                <span className="text-base font-medium tracking-wide text-foreground">
                  Brand
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                プロダクトの可能性を広げ、チームの生産性を高めるプラットフォーム。シンプルで直感的な体験を提供します。
              </p>
            </div>

            {/* ソーシャルリンク */}
            <div className="mt-8 flex items-center gap-5 lg:mt-0">
              {[
                {
                  label: "X",
                  path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                },
                {
                  label: "GitHub",
                  path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
                >
                  <span className="sr-only">{social.label}</span>
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* 右側：リンクグループ */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-light tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 区切り線 */}
        <div className="h-px bg-border/40" />

        {/* ボトムバー */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Brand Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["プライバシー", "利用規約", "Cookie設定"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] tracking-[0.2em] text-muted-foreground/50 transition-colors duration-200 hover:text-muted-foreground"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
