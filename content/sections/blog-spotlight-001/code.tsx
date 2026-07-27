import Link from "next/link";

const spotlightPost = {
  title: "デザインシステムの構築と運用 — 組織をスケールさせる設計手法",
  excerpt:
    "プロダクトの成長に伴い、デザインの一貫性を保つことは困難になります。デザインシステムはその課題を解決し、チーム全体の生産性を向上させます。構築から運用までの実践的なアプローチを解説します。",
  date: "2026年7月20日",
  category: "デザイン",
  readTime: "8 min",
};

const recentPosts = [
  {
    title: "パフォーマンス最適化の実践ガイド",
    excerpt: "Core Web Vitalsを改善するための具体的なテクニックと計測方法",
    date: "2026年7月15日",
    category: "エンジニアリング",
    readTime: "5 min",
  },
  {
    title: "アクセシビリティを考慮したUI設計",
    excerpt: "すべてのユーザーに配慮したインターフェースを構築するための原則",
    date: "2026年7月10日",
    category: "デザイン",
    readTime: "6 min",
  },
  {
    title: "モダンCSSアーキテクチャの潮流",
    excerpt: "Container QueriesからCascade Layersまで、最新のCSS設計手法",
    date: "2026年7月5日",
    category: "エンジニアリング",
    readTime: "4 min",
  },
];

export function BlogSpotlight001() {
  return (
    <section className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
              Journal
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              最新の記事
            </h2>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground sm:inline-flex"
          >
            すべての記事
            <svg
              className="h-4 w-4"
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
          </Link>
        </div>

        {/* コンテンツグリッド */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* スポットライト記事 */}
          <Link href="#" className="group">
            <article>
              {/* サムネイルプレースホルダー */}
              <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border/40 bg-muted">
                <svg
                  className="h-full w-full text-muted-foreground/10"
                  viewBox="0 0 400 250"
                  fill="none"
                >
                  <rect width="400" height="250" fill="currentColor" />
                  <rect
                    x="140"
                    y="90"
                    width="120"
                    height="70"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                    fill="none"
                  />
                  <path
                    d="M170 125 L190 110 L210 120 L230 105"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {spotlightPost.category}
                  </span>
                  <span className="text-xs tracking-wide text-muted-foreground/60">
                    {spotlightPost.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium leading-snug tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                  {spotlightPost.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {spotlightPost.excerpt}
                </p>
                <time className="mt-4 block text-xs tracking-wide text-muted-foreground/60">
                  {spotlightPost.date}
                </time>
              </div>
            </article>
          </Link>

          {/* 最近の記事リスト */}
          <div className="flex flex-col">
            <div className="divide-y divide-border">
              {recentPosts.map((post) => (
                <Link key={post.title} href="#" className="group block">
                  <article className="py-6 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs tracking-wide text-muted-foreground/60">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-base font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <time className="mt-3 block text-xs tracking-wide text-muted-foreground/60">
                      {post.date}
                    </time>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* モバイル用リンク */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            すべての記事
            <svg
              className="h-4 w-4"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
