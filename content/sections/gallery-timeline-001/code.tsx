export function GalleryTimeline001() {
  const projects = [
    {
      year: "2024",
      items: [
        {
          title: "ブランドリニューアル",
          category: "ブランディング",
          description:
            "企業の新しいビジョンを反映したビジュアルアイデンティティの再構築",
        },
        {
          title: "SaaSダッシュボード",
          category: "プロダクトデザイン",
          description:
            "データ分析プラットフォームのためのインターフェース設計",
        },
      ],
    },
    {
      year: "2023",
      items: [
        {
          title: "ECサイトリデザイン",
          category: "ウェブデザイン",
          description:
            "購買体験を最適化するためのUI/UX改善プロジェクト",
        },
        {
          title: "モバイルアプリ設計",
          category: "アプリデザイン",
          description:
            "直感的な操作性を追求したネイティブアプリのデザインシステム",
        },
        {
          title: "コーポレートサイト",
          category: "ウェブデザイン",
          description:
            "洗練されたミニマルデザインによる企業サイトの構築",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          title: "デザインシステム構築",
          category: "プロダクト",
          description:
            "大規模プロダクトのための統一的なコンポーネントライブラリ",
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
              Project Archive
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              プロジェクト年表
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            これまでに手がけたプロジェクトを時系列で振り返ります。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* タイムライン */}
        <div className="mt-16 space-y-16">
          {projects.map((group) => (
            <div key={group.year} className="relative">
              {/* 年ラベル */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-3xl font-light tracking-wider text-foreground/30">
                  {group.year}
                </span>
                <div className="h-px flex-1 bg-border/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
              </div>

              {/* プロジェクト一覧 */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.title} className="group">
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
                    <div className="mt-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                        {item.category}
                      </p>
                      <h3 className="mt-1.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
