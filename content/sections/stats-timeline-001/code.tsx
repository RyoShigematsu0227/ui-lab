export function StatsTimeline001() {
  const milestones = [
    {
      year: "2020",
      value: "10K",
      label: "ユーザー数",
      description: "サービス提供開始。初年度で1万ユーザーを突破。",
    },
    {
      year: "2022",
      value: "250K",
      label: "ユーザー数",
      description: "グローバル展開を開始し、急速にユーザー基盤を拡大。",
    },
    {
      year: "2024",
      value: "1.2M",
      label: "ユーザー数",
      description: "エンタープライズ向けプランを追加。導入企業数が500社を超える。",
    },
    {
      year: "2026",
      value: "5M+",
      label: "ユーザー数",
      description: "次世代プラットフォームへの移行完了。さらなる成長へ。",
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <div className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Milestones
          </p>
          <div className="mt-4 h-px w-12 bg-border/40" />
          <h2 className="mt-6 text-2xl font-light tracking-wide text-foreground sm:text-3xl">
            成長の軌跡
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            サービス開始から現在まで、着実な成長を続けています。
          </p>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-border/30 sm:left-[39px]" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="group relative flex gap-6 sm:gap-10">
                {/* ドット */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center sm:h-20 sm:w-20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/40 bg-background transition-colors duration-300 group-hover:border-foreground/20">
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-xs">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1 pb-2 pt-2 sm:pt-3">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                    <p className="text-2xl font-light tracking-wider text-foreground sm:text-3xl">
                      {milestone.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                      {milestone.label}
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                  {index < milestones.length - 1 && (
                    <div className="mt-6 h-px w-full bg-border/15" />
                  )}
                </div>

                {/* インデックス番号 */}
                <div className="hidden items-start pt-4 sm:flex">
                  <span className="text-[10px] tabular-nums tracking-[0.15em] text-muted-foreground/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
