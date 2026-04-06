import Link from "next/link";

export function BlogMagazine001() {
  const featuredPost = {
    title: "デザインシステムが変える開発体験",
    excerpt:
      "一貫したUIコンポーネントとデザイントークンの活用により、チーム全体の生産性がどのように向上するかを探ります。実践的なアプローチと導入のポイントを解説。",
    date: "2026.03.28",
    category: "デザイン",
    readTime: "8 min",
  };

  const posts = [
    {
      title: "タイポグラフィの基本原則",
      excerpt:
        "可読性と美しさを両立するフォント選びのガイドライン。Webにおけるタイポグラフィの実践的な考え方。",
      date: "2026.03.21",
      category: "デザイン",
      readTime: "5 min",
    },
    {
      title: "パフォーマンス最適化の実践",
      excerpt:
        "Core Web Vitals の改善から画像最適化まで、ユーザー体験を向上させる具体的な手法を紹介。",
      date: "2026.03.14",
      category: "エンジニアリング",
      readTime: "6 min",
    },
    {
      title: "アクセシビリティ対応の始め方",
      excerpt:
        "すべてのユーザーに優しいWebサイトを作るための基本的な考え方と、今日から実践できるテクニック。",
      date: "2026.03.07",
      category: "エンジニアリング",
      readTime: "7 min",
    },
  ];

  return (
    <section className="border-t border-border bg-background py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Journal
            </span>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              最新の記事
            </h2>
          </div>
          <Link
            href="#"
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground sm:flex"
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
          </Link>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* メインコンテンツ: フィーチャー + サイドリスト */}
        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* フィーチャー記事 */}
          <div className="lg:col-span-3">
            <Link href="#" className="group block">
              {/* プレースホルダー画像 */}
              <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/30">
                <svg
                  className="h-full w-full text-muted-foreground/10"
                  viewBox="0 0 800 500"
                  fill="none"
                >
                  <rect width="800" height="500" fill="currentColor" />
                  <circle cx="400" cy="220" r="40" fill="currentColor" className="text-muted-foreground/20" />
                  <path
                    d="M200 350 L350 280 L450 320 L600 250 L700 300 L700 500 L200 500Z"
                    fill="currentColor"
                    className="text-muted-foreground/15"
                  />
                </svg>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {featuredPost.category}
                </span>
                <span className="text-[10px] tracking-wider text-muted-foreground/60">
                  {featuredPost.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground sm:text-2xl">
                {featuredPost.title}
              </h3>
              <p className="mt-3 font-light leading-relaxed tracking-wide text-muted-foreground">
                {featuredPost.excerpt}
              </p>
              <time className="mt-4 block text-xs tracking-wider text-muted-foreground/50">
                {featuredPost.date}
              </time>
            </Link>
          </div>

          {/* サイドリスト */}
          <div className="lg:col-span-2">
            <div className="flex flex-col divide-y divide-border">
              {posts.map((post, index) => (
                <Link key={post.title} href="#" className="group py-6 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-[10px] tabular-nums tracking-wider text-muted-foreground/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                          {post.category}
                        </span>
                        <div className="h-0.5 w-0.5 rounded-full bg-muted-foreground/30" />
                        <span className="text-[10px] tracking-wider text-muted-foreground/50">
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="mt-2 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                        {post.title}
                      </h4>
                      <p className="mt-1.5 text-xs font-light leading-relaxed tracking-wide text-muted-foreground/70">
                        {post.excerpt}
                      </p>
                      <time className="mt-2 block text-[10px] tracking-wider text-muted-foreground/40">
                        {post.date}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* モバイル用リンク */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
