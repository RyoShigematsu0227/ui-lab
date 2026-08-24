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

export function StatsCards001() {
  const stats = [
    {
      value: "99.9%",
      label: "稼働率",
      description: "過去12ヶ月のサービス稼働率",
    },
    {
      value: "2.4M",
      label: "処理リクエスト",
      description: "月間のAPI処理リクエスト数",
    },
    {
      value: "140+",
      label: "導入企業",
      description: "国内外のパートナー企業数",
    },
    {
      value: "< 50ms",
      label: "応答速度",
      description: "平均レスポンスタイム",
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
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Performance
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            信頼の実績
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-foreground/20" />
        </div>

        {/* カードグリッド */}
        <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-background p-8 transition-colors hover:bg-muted/30"
            >
              {/* インデックス番号 */}
              <span className="text-[10px] tabular-nums tracking-[0.2em] text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* 値 */}
              <p className="mt-4 text-3xl font-light tracking-wider text-foreground">
                {stat.value}
              </p>

              {/* 区切り線 */}
              <div className="mt-4 h-px w-8 bg-foreground/20 transition-all group-hover:w-12 group-hover:bg-foreground/40" />

              {/* ラベル */}
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>

              {/* 説明 */}
              <p className="mt-2 text-xs font-light leading-relaxed tracking-wide text-muted-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
