export function BlogFeatured001() {
  const featured = {
    title: "デザインシステムの構築と運用における実践的アプローチ",
    excerpt:
      "大規模プロダクトにおけるデザインシステムの設計原則から、チーム横断での運用まで。実際のプロジェクトで得た知見を体系的にまとめました。",
    date: "2024.02.04",
    category: "デザイン",
    readTime: "8 min read",
  };

  const posts = [
    {
      title: "タイポグラフィの基礎と実践",
      excerpt:
        "Webにおける文字組みの考え方と、読みやすさを追求するための具体的なテクニック。",
      date: "2024.01.28",
      category: "デザイン",
      readTime: "5 min read",
    },
    {
      title: "パフォーマンス最適化の新しいパラダイム",
      excerpt:
        "Core Web Vitalsを起点とした改善サイクルの回し方と、計測から施策実行までの流れ。",
      date: "2024.01.22",
      category: "エンジニアリング",
      readTime: "6 min read",
    },
    {
      title: "アクセシビリティを前提とした設計思想",
      excerpt:
        "インクルーシブデザインの原則に基づく、すべてのユーザーに開かれたインターフェースの作り方。",
      date: "2024.01.15",
      category: "デザイン",
      readTime: "7 min read",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Journal
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              最新の記事
            </h2>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors duration-200 hover:text-foreground sm:inline-flex"
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

        <div className="mt-14 h-px bg-border/40" />

        {/* フィーチャード記事 */}
        <article className="group mt-14">
          <a href="#" className="block">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* サムネイル */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-foreground/10 to-foreground/5" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                    Featured
                  </span>
                </div>
              </div>

              {/* コンテンツ */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {featured.category}
                  </span>
                  <span className="h-px w-6 bg-border/40" />
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/60">
                    {featured.date}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium leading-relaxed tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 text-[10px] tracking-[0.2em] text-muted-foreground/60">
                  {featured.readTime}
                </div>
              </div>
            </div>
          </a>
        </article>

        <div className="mt-14 h-px bg-border/40" />

        {/* 記事リスト */}
        <div className="mt-0 divide-y divide-border/40">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <a href="#" className="block py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="h-px w-4 bg-border/40" />
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground/60">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  <time className="shrink-0 text-xs tracking-wide text-muted-foreground/60 sm:pt-6">
                    {post.date}
                  </time>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* モバイル用リンク */}
        <div className="mt-10 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors duration-200 hover:text-foreground"
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
      </div>
    </section>
  );
}
