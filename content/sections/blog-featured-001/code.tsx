export function BlogFeatured001() {
  const featured = {
    title: "デザインシステムの構築と運用",
    excerpt:
      "プロダクトの成長に伴いデザインの一貫性を保つことは難しくなります。デザインシステムを導入し、チーム全体で共有可能な設計言語を構築するための実践的なアプローチを解説します。",
    date: "2024.02.08",
    category: "デザイン",
    readTime: "8 min read",
  };

  const posts = [
    {
      title: "タイポグラフィの基礎と実践",
      excerpt:
        "ウェブにおける読みやすさを追求するタイポグラフィ設計の基本原則。",
      date: "2024.02.01",
      category: "デザイン",
      readTime: "5 min read",
    },
    {
      title: "パフォーマンス最適化の手法",
      excerpt:
        "Core Web Vitalsを改善するための具体的な施策とモニタリング戦略。",
      date: "2024.01.25",
      category: "エンジニアリング",
      readTime: "6 min read",
    },
    {
      title: "アクセシビリティを考慮したUI設計",
      excerpt:
        "すべてのユーザーが快適に利用できるインターフェースを設計するための指針。",
      date: "2024.01.18",
      category: "デザイン",
      readTime: "7 min read",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Latest Articles
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

        {/* フィーチャー記事 */}
        <div className="mt-12 group">
          <a href="#" className="block">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* サムネイルプレースホルダー */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-500 group-hover:from-foreground/10 group-hover:to-foreground/15" />
                {/* コーナードット */}
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
              </div>

              {/* テキスト情報 */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {featured.category}
                  </span>
                  <span className="h-px w-4 bg-border" />
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                    {featured.date}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground sm:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] tracking-[0.2em] text-muted-foreground/50">
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
            </div>
          </a>
        </div>

        {/* 区切り線 */}
        <div className="mt-12 h-px bg-border/40" />

        {/* 記事一覧 */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a key={post.title} href="#" className="group/card block">
              {/* サムネイルプレースホルダー */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-500 group-hover/card:from-foreground/10 group-hover/card:to-foreground/15" />
                <div className="absolute left-2.5 top-2.5 h-1 w-1 rounded-full bg-foreground/15" />
                <div className="absolute right-2.5 top-2.5 h-1 w-1 rounded-full bg-foreground/15" />
                <div className="absolute bottom-2.5 left-2.5 h-1 w-1 rounded-full bg-foreground/15" />
                <div className="absolute bottom-2.5 right-2.5 h-1 w-1 rounded-full bg-foreground/15" />
              </div>

              {/* テキスト情報 */}
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {post.category}
                  </span>
                  <span className="h-px w-3 bg-border" />
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-2.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover/card:text-muted-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[10px] tracking-[0.2em] text-muted-foreground/50">
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
