function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

export function StatsComparison001() {
  const metrics = [
    {
      label: "レスポンス速度",
      before: "1.2s",
      after: "0.08s",
      improvement: "15x",
    },
    {
      label: "稼働率",
      before: "95.2%",
      after: "99.99%",
      improvement: "+4.79%",
    },
    {
      label: "処理能力",
      before: "1K/秒",
      after: "50K/秒",
      improvement: "50x",
    },
    {
      label: "エラー率",
      before: "2.4%",
      after: "0.01%",
      improvement: "-99.6%",
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Before &amp; After
          </p>
          <h2 className="mt-4 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            パフォーマンスの変革
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            導入前後の主要指標を比較し、改善効果を可視化します。
          </p>
        </div>

        <div className="mt-6 h-px bg-border/40" />

        {/* 比較テーブル */}
        <div className="mt-14">
          {/* ヘッダー行 */}
          <div className="mb-6 hidden items-center sm:flex">
            <div className="flex-1" />
            <div className="flex w-64 justify-between lg:w-80">
              <span className="w-24 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 lg:w-28">
                Before
              </span>
              <span className="w-24 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 lg:w-28">
                After
              </span>
            </div>
            <div className="w-20 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 lg:w-24">
              改善
            </div>
          </div>

          {/* メトリクス行 */}
          <div className="space-y-0">
            {metrics.map((metric, index) => (
              <div key={index}>
                {index > 0 && <div className="h-px bg-border/30" />}
                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-0">
                  {/* ラベル */}
                  <div className="flex-1">
                    <p className="text-sm font-medium tracking-wide text-foreground">
                      {metric.label}
                    </p>
                  </div>

                  {/* Before / After 値 */}
                  <div className="flex w-full items-center justify-between sm:w-64 lg:w-80">
                    <div className="w-24 text-center lg:w-28">
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/50 sm:hidden">
                        Before:{" "}
                      </span>
                      <span className="text-lg font-light tracking-wider text-muted-foreground/60">
                        {metric.before}
                      </span>
                    </div>

                    {/* 矢印 */}
                    <div className="flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-foreground/20"
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

                    <div className="w-24 text-center lg:w-28">
                      <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/50 sm:hidden">
                        After:{" "}
                      </span>
                      <span className="text-lg font-light tracking-wider text-foreground">
                        {metric.after}
                      </span>
                    </div>
                  </div>

                  {/* 改善値 */}
                  <div className="w-20 text-center sm:text-right lg:w-24">
                    <span className="inline-flex items-center border border-border bg-muted/50 px-3 py-1 text-xs font-medium tracking-wider text-foreground">
                      {metric.improvement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
}
