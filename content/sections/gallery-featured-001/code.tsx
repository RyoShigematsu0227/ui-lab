export function GalleryFeatured001() {
  const featured = {
    title: "デジタルブランディング",
    category: "ブランディング",
    year: "2025",
    description:
      "統一されたビジュアル言語で、デジタル上のブランド体験を再構築しました。",
  };

  const projects = [
    {
      title: "SaaS ダッシュボード",
      category: "プロダクトデザイン",
      year: "2025",
    },
    {
      title: "建築ポートフォリオ",
      category: "ウェブデザイン",
      year: "2024",
    },
    {
      title: "モバイルコマース",
      category: "アプリデザイン",
      year: "2024",
    },
    {
      title: "メディアプラットフォーム",
      category: "プロダクトデザイン",
      year: "2025",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Featured Work
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              注目のプロジェクト
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            最新の制作実績をご紹介します。戦略からデザイン、実装までを一貫して手がけました。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* フィーチャードプロジェクト */}
        <div className="mt-12 group">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-foreground/8 to-foreground/12 transition-all duration-700 group-hover:from-foreground/8 group-hover:via-foreground/12 group-hover:to-foreground/18" />
            {/* コーナードット */}
            <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
            {/* 中央の装飾 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-px w-12 bg-foreground/20" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                  Featured
                </p>
                <div className="h-px w-12 bg-foreground/20" />
              </div>
            </div>
            {/* ホバー時の矢印 */}
            <div className="absolute right-6 bottom-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur">
                <svg
                  className="h-4 w-4 text-foreground"
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
              </div>
            </div>
          </div>
          {/* フィーチャード情報 */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-wide text-muted-foreground/70">
                {featured.category}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                {featured.year}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-border/40" />

        {/* プロジェクトグリッド */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="group/card">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/3 to-foreground/8 transition-all duration-500 group-hover/card:from-foreground/8 group-hover/card:to-foreground/14" />
                {/* コーナードット */}
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                {/* ホバー時アイコン */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur">
                    <svg
                      className="h-4 w-4 text-foreground"
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
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover/card:text-muted-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground/70">
                    {project.category}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* もっと見る */}
        <div className="mt-14 flex justify-center">
          <button className="group/btn inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-muted-foreground">
            すべてのプロジェクトを見る
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
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
          </button>
        </div>
      </div>
    </section>
  );
}
