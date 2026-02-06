export function GalleryBento001() {
  const projects = [
    {
      title: "ブランディングプロジェクト",
      category: "BRANDING",
      year: "2025",
      size: "large",
    },
    {
      title: "UIデザインシステム",
      category: "DESIGN SYSTEM",
      year: "2025",
      size: "small",
    },
    {
      title: "モバイルアプリケーション",
      category: "MOBILE",
      year: "2024",
      size: "small",
    },
    {
      title: "コーポレートサイト",
      category: "WEB DESIGN",
      year: "2024",
      size: "medium",
    },
    {
      title: "プロダクトフォトグラフィ",
      category: "PHOTOGRAPHY",
      year: "2025",
      size: "medium",
    },
    {
      title: "タイポグラフィ研究",
      category: "TYPOGRAPHY",
      year: "2024",
      size: "small",
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
            Selected Works
          </p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-lg text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              創造性と技術の融合
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              私たちの厳選されたプロジェクトコレクション。
              <br />
              デザインと機能の完璧なバランスを追求しています。
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden border border-border bg-muted/20 transition-all duration-300 hover:border-foreground/30 ${
                project.size === "large"
                  ? "sm:col-span-2 sm:row-span-2"
                  : project.size === "medium"
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
              }`}
            >
              {/* 背景グラデーション */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* コンテンツ */}
              <div className="relative flex h-full flex-col justify-between p-8">
                {/* ヘッダー */}
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>

                {/* フッター */}
                <div>
                  <h3 className="mb-3 text-lg font-light tracking-wide text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-xs tracking-wide text-muted-foreground">
                      {project.year}
                    </span>
                    <div className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-foreground/30" />
                    <svg
                      className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="mb-6 flex items-center justify-center gap-6">
            <div className="h-px w-12 bg-border" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
              More Projects
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
          <button className="inline-flex h-12 items-center justify-center border border-border px-8 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/30 hover:bg-muted/30">
            View All Work
          </button>
        </div>
      </div>
    </section>
  );
}
