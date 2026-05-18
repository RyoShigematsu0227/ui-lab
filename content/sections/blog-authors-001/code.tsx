export function BlogAuthors001() {
  const authors = [
    {
      name: "佐藤 美咲",
      role: "デザインリード",
      initial: "S",
      posts: [
        {
          title: "余白が語るデザインの意図",
          excerpt:
            "ホワイトスペースは単なる空白ではなく、情報の優先度と視覚的リズムを制御する重要な設計要素です。",
          date: "2024.03.12",
          readTime: "6 min",
        },
        {
          title: "色彩設計とアクセシビリティの両立",
          excerpt:
            "美しさとコントラスト比を同時に満たすカラーパレットの構築手法。",
          date: "2024.02.28",
          readTime: "5 min",
        },
      ],
    },
    {
      name: "田中 健一",
      role: "エンジニアリングマネージャー",
      initial: "T",
      posts: [
        {
          title: "コンポーネント設計の原則と実践",
          excerpt:
            "再利用性と保守性を両立するコンポーネントアーキテクチャの構築について。",
          date: "2024.03.05",
          readTime: "8 min",
        },
        {
          title: "ビルドパフォーマンスの改善記録",
          excerpt:
            "開発体験を向上させるために実施したビルド最適化の具体的な施策と結果。",
          date: "2024.02.15",
          readTime: "7 min",
        },
      ],
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              From Our Team
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              著者別の記事
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

        {/* 著者セクション */}
        <div className="mt-16 space-y-20">
          {authors.map((author) => (
            <div key={author.name}>
              {/* 著者情報 */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted">
                  <span className="text-xs font-medium tracking-wide text-foreground">
                    {author.initial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium tracking-wide text-foreground">
                    {author.name}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    {author.role}
                  </p>
                </div>
              </div>

              {/* 記事リスト */}
              <div className="mt-6 divide-y divide-border/40">
                {author.posts.map((post) => (
                  <a
                    key={post.title}
                    href="#"
                    className="group block py-6 first:pt-0"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
                      <div className="flex-1">
                        <h3 className="text-base font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3 text-[10px] tracking-[0.15em] text-muted-foreground/50 sm:flex-col sm:items-end sm:gap-1.5">
                        <span>{post.date}</span>
                        <div className="h-3 w-px bg-border/40 sm:hidden" />
                        <div className="flex items-center gap-1.5">
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
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* フッター装飾 */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-border/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="h-px w-8 bg-border/40" />
        </div>
      </div>
    </section>
  );
}
