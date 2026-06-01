export function GalleryHover001() {
  const projects = [
    {
      title: "ブランドリニューアル",
      category: "ブランディング",
      year: "2025",
      label: "01",
    },
    {
      title: "SaaSプロダクト設計",
      category: "プロダクトデザイン",
      year: "2025",
      label: "02",
    },
    {
      title: "コーポレートサイト",
      category: "ウェブデザイン",
      year: "2024",
      label: "03",
    },
    {
      title: "モバイルアプリUI",
      category: "アプリデザイン",
      year: "2024",
      label: "04",
    },
    {
      title: "ECプラットフォーム",
      category: "プロダクトデザイン",
      year: "2025",
      label: "05",
    },
    {
      title: "ビジュアルアイデンティティ",
      category: "ブランディング",
      year: "2024",
      label: "06",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              制作実績
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            プロジェクトにカーソルを合わせると詳細をご覧いただけます。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* プロジェクトグリッド */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.label} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
                {/* 背景グラデーション */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-500 group-hover:from-foreground/12 group-hover:to-foreground/20" />

                {/* コーナードット */}
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />

                {/* 番号（常時表示） */}
                <div className="absolute left-4 top-4">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/30">
                    {project.label}
                  </span>
                </div>

                {/* ホバー時オーバーレイ */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="mb-3 h-px w-8 bg-foreground/30" />
                    <h3 className="text-sm font-medium tracking-wide text-foreground">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-xs tracking-wide text-muted-foreground/70">
                        {project.category}
                      </span>
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ホバー時の矢印 */}
                <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur">
                    <svg
                      className="h-3.5 w-3.5 text-foreground"
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
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
            {projects.length} Projects
          </p>
        </div>
      </div>
    </section>
  );
}
