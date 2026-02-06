export function BlogGrid001() {
  const posts = [
    {
      category: "DESIGN",
      title: "デザインシステムの構築方法",
      excerpt: "スケーラブルで一貫性のあるデザインシステムを構築するための実践的なガイド",
      date: "2026.02.01",
      readTime: "8分",
    },
    {
      category: "DEVELOPMENT",
      title: "モダンフロントエンド開発",
      excerpt: "最新のツールとフレームワークを使用した効率的な開発フロー",
      date: "2026.01.28",
      readTime: "12分",
    },
    {
      category: "PRODUCT",
      title: "ユーザー中心設計の実践",
      excerpt: "ユーザーのニーズを深く理解し、優れたプロダクト体験を創出する方法",
      date: "2026.01.25",
      readTime: "10分",
    },
    {
      category: "STRATEGY",
      title: "デジタル戦略の立案",
      excerpt: "ビジネス目標とテクノロジーを結びつける効果的な戦略の構築",
      date: "2026.01.22",
      readTime: "15分",
    },
    {
      category: "DESIGN",
      title: "アクセシビリティの基礎",
      excerpt: "すべてのユーザーに配慮したインクルーシブなデザインの実装",
      date: "2026.01.18",
      readTime: "7分",
    },
    {
      category: "DEVELOPMENT",
      title: "パフォーマンス最適化",
      excerpt: "Webアプリケーションの速度とパフォーマンスを最大化するテクニック",
      date: "2026.01.15",
      readTime: "11分",
    },
  ];

  return (
    <section className="relative bg-background py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Latest Articles
          </p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-lg text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              知識とインサイトを共有
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              デザイン、開発、プロダクト戦略に関する
              <br />
              最新の記事とベストプラクティス
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative border border-border bg-transparent p-8 transition-all duration-300 hover:border-foreground/30 hover:bg-muted/20"
            >
              {/* カテゴリ */}
              <span className="mb-6 block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {post.category}
              </span>

              {/* タイトル */}
              <h3 className="mb-4 text-xl font-light tracking-wide text-foreground transition-colors group-hover:text-foreground">
                {post.title}
              </h3>

              {/* 抜粋 */}
              <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              {/* メタ情報 */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs tracking-wide text-muted-foreground">
                  {post.date}
                </span>
                <span className="text-xs tracking-wide text-muted-foreground/60">
                  {post.readTime}
                </span>
              </div>

              {/* ホバーインジケーター */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-foreground/40 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-6">
            <div className="h-px w-12 bg-border" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
              More Articles
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
          <button className="inline-flex h-12 items-center justify-center border border-border px-8 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/30 hover:bg-muted/30">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
