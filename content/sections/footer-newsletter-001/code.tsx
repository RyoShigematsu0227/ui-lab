export function FooterNewsletter001() {
  const links = {
    product: [
      { label: "機能紹介", href: "#" },
      { label: "料金プラン", href: "#" },
      { label: "導入事例", href: "#" },
      { label: "ロードマップ", href: "#" },
    ],
    company: [
      { label: "会社概要", href: "#" },
      { label: "採用情報", href: "#" },
      { label: "ブログ", href: "#" },
      { label: "お問い合わせ", href: "#" },
    ],
    support: [
      { label: "ヘルプセンター", href: "#" },
      { label: "ドキュメント", href: "#" },
      { label: "API リファレンス", href: "#" },
      { label: "ステータス", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ニュースレター */}
        <div className="grid grid-cols-1 gap-8 border-b border-border/40 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Newsletter
            </p>
            <h2 className="mt-3 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
              最新情報をお届けします
            </h2>
            <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
              デザインとエンジニアリングに関する知見を、月に2回お届けします。いつでも配信停止できます。
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/20 focus:outline-none focus:ring-0 dark:bg-muted/30"
                  readOnly
                />
              </div>
              <button className="shrink-0 rounded-lg border border-foreground/10 bg-foreground/5 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:bg-foreground/10">
                購読する
              </button>
            </div>
            <p className="mt-3 text-[10px] tracking-[0.15em] text-muted-foreground/50">
              登録することでプライバシーポリシーに同意したものとみなされます
            </p>
          </div>
        </div>

        {/* リンク */}
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* ブランド */}
          <div>
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted">
                <span className="text-xs font-medium tracking-wider text-foreground">
                  L
                </span>
              </div>
              <span className="text-sm font-medium tracking-wide text-foreground">
                Logo
              </span>
            </a>
            <p className="mt-4 text-xs font-light leading-relaxed text-muted-foreground">
              テクノロジーの力で、ビジネスの可能性を拡げる
            </p>
            {/* ソーシャル */}
            <div className="mt-6 flex gap-4">
              {["X", "GH", "IN"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border/40 text-[10px] tracking-wider text-muted-foreground transition-colors duration-200 hover:border-border hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* リンクカラム */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {group === "product"
                  ? "プロダクト"
                  : group === "company"
                    ? "企業情報"
                    : "サポート"}
              </h3>
              <ul className="mt-5 space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ボトム */}
        <div className="flex flex-col items-center gap-4 border-t border-border/40 py-8 sm:flex-row sm:justify-between">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
            &copy; 2024 Company, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["プライバシー", "利用規約", "Cookie"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] tracking-[0.15em] text-muted-foreground/50 transition-colors duration-200 hover:text-muted-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
