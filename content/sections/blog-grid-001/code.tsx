export function BlogGrid001() {
  const posts = [
    {
      title: "デザインシステムの構築と運用",
      excerpt:
        "スケーラブルなデザインシステムを構築するためのベストプラクティスと、チームでの効率的な運用方法について解説します。",
      date: "2024.02.01",
      category: "デザイン",
      readTime: "5 min",
    },
    {
      title: "モダンCSSアーキテクチャ入門",
      excerpt:
        "CSS ModulesからTailwind CSSまで、大規模アプリケーションにおけるCSS設計の最新アプローチを比較します。",
      date: "2024.01.28",
      category: "エンジニアリング",
      readTime: "8 min",
    },
    {
      title: "ユーザー体験を高めるマイクロインタラクション",
      excerpt:
        "小さなアニメーションやフィードバックが、プロダクト全体の印象にどれほど影響するかを事例とともに紹介します。",
      date: "2024.01.22",
      category: "UX",
      readTime: "4 min",
    },
    {
      title: "アクセシビリティを考慮したUI設計",
      excerpt:
        "すべてのユーザーが快適に利用できるインターフェースを設計するための基本原則とチェックリスト。",
      date: "2024.01.15",
      category: "デザイン",
      readTime: "6 min",
    },
    {
      title: "パフォーマンス最適化の実践ガイド",
      excerpt:
        "Core Web Vitalsの改善からバンドルサイズの削減まで、実測に基づいた最適化テクニックを紹介します。",
      date: "2024.01.10",
      category: "エンジニアリング",
      readTime: "7 min",
    },
    {
      title: "カラーパレットの選び方",
      excerpt:
        "ブランドに合ったカラースキームの構築方法と、アクセシビリティを担保するコントラスト比の管理。",
      date: "2024.01.05",
      category: "デザイン",
      readTime: "3 min",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Blog
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              最新の記事
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground">
            すべての記事を見る
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
          </span>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* 記事グリッド */}
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              {/* サムネイルプレースホルダー */}
              <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                <div className="h-full w-full bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-500 group-hover:from-foreground/10 group-hover:to-foreground/15" />
              </div>

              {/* メタ情報 */}
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full border border-border px-3 py-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {post.category}
                </span>
                <span className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                  {post.readTime}
                </span>
              </div>

              {/* タイトル・抜粋 */}
              <h3 className="mt-3 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                {post.title}
              </h3>
              <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground/70">
                {post.excerpt}
              </p>

              {/* 日付 */}
              <time className="mt-4 block text-[10px] tracking-[0.15em] text-muted-foreground/50">
                {post.date}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
