export function GalleryShowcase001() {
  const projects = [
    {
      title: "ブランドアイデンティティ",
      category: "ブランディング",
      year: "2024",
    },
    {
      title: "ECプラットフォーム",
      category: "ウェブデザイン",
      year: "2024",
    },
    {
      title: "モバイルアプリUI",
      category: "アプリデザイン",
      year: "2023",
    },
    {
      title: "コーポレートサイト",
      category: "ウェブデザイン",
      year: "2023",
    },
    {
      title: "ダッシュボード設計",
      category: "プロダクト",
      year: "2024",
    },
    {
      title: "ビジュアルキャンペーン",
      category: "ブランディング",
      year: "2023",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Selected Works
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              プロジェクト
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            厳選されたプロジェクトをご紹介します。各プロジェクトはクライアントの課題に真摯に向き合い、最適な解決策をデザインしました。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* プロジェクト一覧 */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* サムネイルプレースホルダー */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-500 group-hover:from-foreground/10 group-hover:to-foreground/15" />
                {/* コーナードット */}
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                {/* 中央アイコン */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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

              {/* テキスト情報 */}
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
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
      </div>
    </section>
  );
}
