export function BlogAsymmetric001() {
  const featured = {
    title: "デザインの余白が生む静かな説得力",
    excerpt:
      "情報を詰め込むのではなく、引き算の美学でユーザーの視線を導く。ホワイトスペースの戦略的な活用が、プロダクトの品格をいかに高めるかを考察します。",
    date: "2024.03.12",
    category: "デザイン",
    readTime: "10 min read",
  };

  const posts = [
    {
      title: "コンポーネント設計の境界線",
      excerpt:
        "再利用性と柔軟性のバランスを取る、実践的なコンポーネント分割の指針。",
      date: "2024.03.05",
      category: "エンジニアリング",
      readTime: "7 min read",
    },
    {
      title: "色彩心理とブランド認知",
      excerpt:
        "色が人の判断に与える無意識的な影響と、ブランドカラー選定の科学的アプローチ。",
      date: "2024.02.28",
      category: "デザイン",
      readTime: "6 min read",
    },
    {
      title: "レスポンシブを超えた適応型UI",
      excerpt:
        "画面サイズだけでなく、コンテキストに応じて振る舞いを変えるインターフェースの設計論。",
      date: "2024.02.20",
      category: "デザイン",
      readTime: "8 min read",
    },
    {
      title: "静的型付けが変えるチーム開発",
      excerpt:
        "TypeScriptの導入がコードレビューの質と開発速度に与える定量的な効果。",
      date: "2024.02.14",
      category: "エンジニアリング",
      readTime: "5 min read",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Insights
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              ブログ
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            すべての記事
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

        {/* 非対称レイアウト */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* 左カラム — フィーチャー記事 */}
          <div className="lg:col-span-3">
            <a href="#" className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-500 group-hover:from-foreground/10 group-hover:to-foreground/15" />
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {featured.category}
                  </span>
                  <span className="h-px w-4 bg-border" />
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                    {featured.date}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] tracking-[0.2em] text-muted-foreground/50">
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
                  {featured.readTime}
                </div>
              </div>
            </a>
          </div>

          {/* 右カラム — 記事リスト */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-border/40">
              {posts.map((post, i) => (
                <a
                  key={post.title}
                  href="#"
                  className="group/item block py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-xs font-light tabular-nums text-muted-foreground/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                          {post.category}
                        </span>
                        <span className="h-px w-3 bg-border" />
                        <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="mt-2 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover/item:text-muted-foreground">
                        {post.title}
                      </h3>
                      <p className="mt-1.5 text-xs font-light leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-muted-foreground/50">
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
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
