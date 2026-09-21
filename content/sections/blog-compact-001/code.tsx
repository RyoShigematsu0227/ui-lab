export function BlogCompact001() {
  const posts = [
    {
      number: "01",
      title: "デザインシステムの構築と運用ガイド",
      excerpt:
        "チーム全体で一貫した設計言語を共有し、プロダクトの成長に伴うデザインの断片化を防ぐための実践的なアプローチ。",
      date: "2024.03.15",
      category: "デザイン",
      readTime: "8 min",
    },
    {
      number: "02",
      title: "Core Web Vitals改善の具体的な施策",
      excerpt:
        "LCP・FID・CLSの各指標を最適化するための技術的なアプローチとモニタリング戦略を解説。",
      date: "2024.03.08",
      category: "エンジニアリング",
      readTime: "6 min",
    },
    {
      number: "03",
      title: "アクセシビリティを前提としたUI設計",
      excerpt:
        "WCAG 2.1に準拠したインターフェース設計の基本原則と、実装時に考慮すべきポイント。",
      date: "2024.02.28",
      category: "デザイン",
      readTime: "7 min",
    },
    {
      number: "04",
      title: "マイクロインタラクションの設計原則",
      excerpt:
        "ユーザー体験を向上させる繊細なアニメーションとフィードバックの設計手法。",
      date: "2024.02.20",
      category: "デザイン",
      readTime: "5 min",
    },
    {
      number: "05",
      title: "TypeScriptの型設計パターン",
      excerpt:
        "大規模プロジェクトで堅牢な型システムを構築するためのパターンとベストプラクティス。",
      date: "2024.02.12",
      category: "エンジニアリング",
      readTime: "9 min",
    },
    {
      number: "06",
      title: "レスポンシブデザインの再考",
      excerpt:
        "コンテナクエリとモダンCSSレイアウトを活用した、次世代のレスポンシブデザイン手法。",
      date: "2024.02.05",
      category: "エンジニアリング",
      readTime: "6 min",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Articles
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              ジャーナル
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

        {/* 記事リスト */}
        <div className="mt-8">
          {posts.map((post) => (
            <a
              key={post.number}
              href="#"
              className="group flex items-start gap-4 border-b border-border/40 py-5 transition-colors duration-200 sm:items-center"
            >
              {/* 番号 */}
              <span className="shrink-0 text-[10px] tracking-[0.2em] text-muted-foreground/30">
                {post.number}
              </span>

              {/* メインコンテンツ */}
              <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                {/* タイトル＆抜粋 */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground/60 line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>

                {/* メタ情報 */}
                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full border border-border/60 px-2.5 py-0.5 text-[10px] tracking-[0.15em] text-muted-foreground/60">
                    {post.category}
                  </span>
                  <span className="hidden text-[10px] tracking-[0.15em] text-muted-foreground/40 sm:block">
                    {post.readTime}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* 矢印 */}
              <svg
                className="mt-1 h-3 w-3 shrink-0 text-muted-foreground/20 transition-colors duration-200 group-hover:text-muted-foreground sm:mt-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
