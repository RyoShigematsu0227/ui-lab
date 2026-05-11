export function FooterCentered001() {
  const navGroups = [
    {
      label: "プロダクト",
      links: ["機能一覧", "料金プラン", "導入事例", "アップデート"],
    },
    {
      label: "リソース",
      links: ["ドキュメント", "ガイド", "API リファレンス", "ステータス"],
    },
    {
      label: "会社情報",
      links: ["私たちについて", "ブログ", "採用情報", "お問い合わせ"],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        {/* ブランド */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Design &amp; Technology
          </p>
          <p className="mt-3 text-xl font-medium tracking-wide text-foreground">
            Arcline
          </p>
          <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
            シンプルで美しいデジタル体験を、すべての人に。
          </p>
        </div>

        {/* デコレーション */}
        <div className="mx-auto mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="h-px w-12 bg-border/40" />
        </div>

        {/* ナビゲーション */}
        <div className="mt-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {group.label}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light tracking-wide text-foreground/60 transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ソーシャルアイコン */}
        <div className="mt-16 flex items-center justify-center gap-6">
          {[
            {
              name: "X",
              path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            },
            {
              name: "GitHub",
              path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            },
            {
              name: "LinkedIn",
              path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            },
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={social.name}
              className="text-foreground/30 transition-colors duration-200 hover:text-foreground/60"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* コピーライト */}
        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            &copy; 2026 Arcline Inc.
          </p>
          <div className="hidden h-3 w-px bg-border/30 sm:block" />
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[10px] tracking-[0.15em] text-muted-foreground/50 transition-colors duration-200 hover:text-muted-foreground"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="text-[10px] tracking-[0.15em] text-muted-foreground/50 transition-colors duration-200 hover:text-muted-foreground"
            >
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
