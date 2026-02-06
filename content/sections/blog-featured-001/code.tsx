export function BlogFeatured001() {
  const featuredPost = {
    title: "デザインシステムの構築から運用まで",
    excerpt:
      "大規模プロダクトにおけるデザインシステムの設計思想と、実際の運用で学んだベストプラクティスをご紹介します。",
    category: "Design System",
    date: "2024.01.15",
    readTime: "8分",
  };

  const posts = [
    {
      title: "アクセシビリティを考慮したUIコンポーネント設計",
      category: "Accessibility",
      date: "2024.01.10",
      readTime: "5分",
    },
    {
      title: "モダンなアニメーション実装のベストプラクティス",
      category: "Animation",
      date: "2024.01.05",
      readTime: "6分",
    },
    {
      title: "パフォーマンスを最適化するためのCSS設計手法",
      category: "Performance",
      date: "2024.01.01",
      readTime: "7分",
    },
  ];

  return (
    <section className="border-y border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Latest Articles
          </span>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            ブログ
          </h2>
        </div>

        {/* メイングリッド */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="group relative h-full border border-border bg-muted/10 p-8 transition-colors hover:bg-muted/20 sm:p-10">
              {/* カテゴリラベル */}
              <div className="mb-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  {featuredPost.category}
                </span>
              </div>

              {/* タイトル */}
              <h3 className="mb-6 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                {featuredPost.title}
              </h3>

              {/* 抜粋 */}
              <p className="mb-8 font-light leading-relaxed text-muted-foreground">
                {featuredPost.excerpt}
              </p>

              {/* メタ情報 */}
              <div className="flex items-center gap-6 border-t border-border pt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {featuredPost.date}
                </span>
                <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {featuredPost.readTime}
                </span>
              </div>

              {/* 読む */}
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-foreground/70">
                  続きを読む
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group border border-border bg-muted/10 p-6 transition-colors hover:bg-muted/20"
              >
                {/* カテゴリ */}
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  {post.category}
                </span>

                {/* タイトル */}
                <h3 className="mt-3 text-base font-light leading-snug text-foreground">
                  {post.title}
                </h3>

                {/* メタ情報 */}
                <div className="mt-4 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  <span>{post.date}</span>
                  <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center border border-border px-8 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/50 hover:bg-muted/20"
          >
            すべての記事を見る
          </a>
        </div>
      </div>
    </section>
  );
}
