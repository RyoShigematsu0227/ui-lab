export function GalleryLightbox001() {
  const works = [
    {
      title: "Horizon",
      category: "ブランディング",
      year: "2024",
      aspectClass: "aspect-[4/5]",
    },
    {
      title: "Prism",
      category: "Webデザイン",
      year: "2024",
      aspectClass: "aspect-[4/3]",
    },
    {
      title: "Vertex",
      category: "プロダクト",
      year: "2023",
      aspectClass: "aspect-[4/5]",
    },
    {
      title: "Arcadia",
      category: "ブランディング",
      year: "2023",
      aspectClass: "aspect-square",
    },
    {
      title: "Nomad",
      category: "Webデザイン",
      year: "2023",
      aspectClass: "aspect-[4/3]",
    },
    {
      title: "Solstice",
      category: "プロダクト",
      year: "2024",
      aspectClass: "aspect-[4/5]",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Works
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              Selected Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
            厳選されたプロジェクトの一覧。各作品のディテールをご覧ください。
          </p>
        </div>

        <div className="mt-14 h-px bg-border/40" />

        {/* グリッド */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <a key={index} href="#" className="group block">
              {/* 画像プレースホルダー */}
              <div
                className={`relative overflow-hidden rounded-sm bg-muted ${work.aspectClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-foreground/[0.07] to-foreground/[0.03]" />

                {/* コーナードット */}
                <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/10" />

                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4 text-foreground/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>

                {/* 番号 */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* テキスト */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-[11px] tracking-wide text-muted-foreground/60">
                    {work.category}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                  {work.year}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
