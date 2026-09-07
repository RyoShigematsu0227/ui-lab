export function GalleryColumns001() {
  const projects = [
    {
      title: "ブランド戦略デザイン",
      category: "ブランディング",
      number: "01",
    },
    {
      title: "ウェブプラットフォーム",
      category: "プロダクトデザイン",
      number: "02",
    },
    {
      title: "ビジュアルシステム",
      category: "アイデンティティ",
      number: "03",
    },
    {
      title: "デジタルエクスペリエンス",
      category: "ウェブデザイン",
      number: "04",
    },
    {
      title: "コマースプラットフォーム",
      category: "アプリデザイン",
      number: "05",
    },
    {
      title: "クリエイティブキャンペーン",
      category: "ブランディング",
      number: "06",
    },
    {
      title: "モバイルインターフェース",
      category: "プロダクトデザイン",
      number: "07",
    },
    {
      title: "エディトリアルデザイン",
      category: "ウェブデザイン",
      number: "08",
    },
  ];

  const leftColumn = projects.filter((_, i) => i % 2 === 0);
  const rightColumn = projects.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Selected Work
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              プロジェクト
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            厳選したプロジェクトを、2カラムのレイアウトでご紹介します。
          </p>
        </div>

        <div className="h-px bg-border/40" />

        {/* 2カラムギャラリー */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {/* 左カラム */}
          <div className="flex flex-col gap-10">
            {leftColumn.map((project, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.07] transition-all duration-500 group-hover:from-foreground/[0.05] group-hover:to-foreground/[0.11]" />
                  <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                  <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-[0.2em] text-foreground/25">
                      {project.number}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4 text-foreground/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground/60">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                    {project.number}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 右カラム（上にオフセット） */}
          <div className="flex flex-col gap-10 sm:mt-20">
            {rightColumn.map((project, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[3/4] overflow-hidden border border-border bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.08] transition-all duration-500 group-hover:from-foreground/[0.06] group-hover:to-foreground/[0.12]" />
                  <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                  <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] tracking-[0.2em] text-foreground/25">
                      {project.number}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4 text-foreground/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground/60">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                    {project.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* フッター */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
          <p className="text-xs font-light tracking-wide text-muted-foreground/60">
            全 {projects.length} プロジェクト
          </p>
          <a
            href="#"
            className="group/link flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            すべてのプロジェクト
            <svg
              className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5"
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
