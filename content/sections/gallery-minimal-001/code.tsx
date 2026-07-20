export function GalleryMinimal001() {
  const works = [
    {
      title: "ブランドリニューアル",
      category: "ブランディング",
      year: "2024",
      aspect: "aspect-[3/4]",
    },
    {
      title: "SaaSダッシュボード",
      category: "プロダクトデザイン",
      year: "2024",
      aspect: "aspect-[4/3]",
    },
    {
      title: "エディトリアルサイト",
      category: "ウェブデザイン",
      year: "2023",
      aspect: "aspect-[3/4]",
    },
    {
      title: "モバイルコマース",
      category: "アプリデザイン",
      year: "2024",
      aspect: "aspect-[4/3]",
    },
    {
      title: "ビジュアルアイデンティティ",
      category: "ブランディング",
      year: "2023",
      aspect: "aspect-[4/3]",
    },
    {
      title: "コーポレートサイト",
      category: "ウェブデザイン",
      year: "2024",
      aspect: "aspect-[3/4]",
    },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Works
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              厳選された作品
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            丁寧に向き合ったプロジェクトの中から、特に印象深い作品をご紹介します。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* 作品リスト */}
        <div className="mt-14 columns-1 gap-6 space-y-6 sm:columns-2">
          {works.map((work, i) => (
            <div key={i} className="group break-inside-avoid">
              {/* サムネイル */}
              <div
                className={`relative ${work.aspect} overflow-hidden border border-border bg-muted`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.08] transition-all duration-500 group-hover:from-foreground/[0.06] group-hover:to-foreground/[0.12]" />
                <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                {/* 番号 */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* ホバーアロー */}
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

              {/* テキスト */}
              <div className="mt-3 flex items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-medium tracking-wide text-foreground">
                    {work.title}
                  </h3>
                  <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground/60">
                    {work.category}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground/40">
                  {work.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
          <p className="text-xs font-light tracking-wide text-muted-foreground/60">
            全 {works.length} 作品
          </p>
          <a
            href="#"
            className="group/link flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            すべての作品を見る
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
