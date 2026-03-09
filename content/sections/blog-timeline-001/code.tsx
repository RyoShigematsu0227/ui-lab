export function BlogTimeline001() {
  const posts = [
    {
      title: "デザインシステムの段階的な導入戦略",
      excerpt:
        "既存プロダクトにデザインシステムを導入する際の実践的なアプローチと、チーム全体での合意形成について解説します。",
      date: "2024.03.12",
      category: "デザイン",
      readTime: "7 min read",
    },
    {
      title: "ウェブアクセシビリティの最新動向",
      excerpt:
        "WCAG 3.0のドラフトを踏まえた、これからのアクセシビリティ対応の方向性を考察します。",
      date: "2024.03.05",
      category: "エンジニアリング",
      readTime: "5 min read",
    },
    {
      title: "コンポーネント設計の原則",
      excerpt:
        "再利用性と保守性を両立するコンポーネント設計のパターンと、避けるべきアンチパターンを紹介します。",
      date: "2024.02.26",
      category: "エンジニアリング",
      readTime: "8 min read",
    },
    {
      title: "カラーシステムの構築方法",
      excerpt:
        "ブランドカラーからUIトークンへの変換プロセスと、ダークモード対応を見据えた設計手法。",
      date: "2024.02.19",
      category: "デザイン",
      readTime: "6 min read",
    },
    {
      title: "マイクロインタラクションの効果",
      excerpt:
        "ユーザー体験を向上させる繊細なアニメーションの設計原則と実装テクニック。",
      date: "2024.02.12",
      category: "デザイン",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Timeline
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              最新の記事
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            アーカイブ
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* タイムライン */}
        <div className="relative mt-12">
          {/* 縦線 */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/40 sm:left-[100px]" />

          <div className="space-y-10">
            {posts.map((post, index) => (
              <a
                key={post.title}
                href="#"
                className="group relative block pl-8 sm:pl-[132px]"
              >
                {/* タイムラインドット */}
                <div className="absolute left-[3px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-border bg-background transition-colors duration-200 group-hover:border-foreground/40 sm:left-[96px]" />

                {/* 日付（デスクトップ：左サイド） */}
                <div className="absolute left-8 top-0 hidden text-[10px] tracking-[0.2em] text-muted-foreground/50 sm:left-0 sm:block sm:w-[80px] sm:text-right">
                  {post.date}
                </div>

                {/* コンテンツ */}
                <div className="rounded-lg border border-border/60 bg-background p-5 transition-colors duration-200 group-hover:border-border">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {post.category}
                    </span>
                    <span className="h-px w-3 bg-border" />
                    {/* 日付（モバイル表示） */}
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50 sm:hidden">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground sm:text-base">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-muted-foreground/50">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {post.readTime}
                    </div>
                    {/* 番号 */}
                    <span className="text-[10px] tabular-nums tracking-[0.2em] text-muted-foreground/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
