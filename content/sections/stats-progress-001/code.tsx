function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      <div className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

export function StatsProgress001() {
  const stats = [
    {
      value: "98.7%",
      label: "稼働率",
      description: "過去12ヶ月間のサービス稼働率",
      progress: 98.7,
    },
    {
      value: "4.8 / 5",
      label: "顧客満足度",
      description: "直近四半期のアンケート結果",
      progress: 96,
    },
    {
      value: "1.2秒",
      label: "平均応答速度",
      description: "グローバルエッジネットワーク経由",
      progress: 88,
    },
    {
      value: "85%",
      label: "継続率",
      description: "年間契約の更新率",
      progress: 85,
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Performance
          </p>
          <div className="mt-4 h-px w-12 bg-border/40" />
          <h2 className="mt-6 text-2xl font-light tracking-wide text-foreground sm:text-3xl">
            信頼性の指標
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            継続的なモニタリングと改善により、高い水準のサービス品質を維持しています。
          </p>
        </div>

        {/* 統計リスト */}
        <div className="space-y-10">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground/60">
                    {stat.description}
                  </p>
                </div>
                <p className="text-2xl font-light tracking-wider text-foreground sm:text-3xl">
                  {stat.value}
                </p>
              </div>
              {/* プログレスバー */}
              <div className="mt-4 h-px w-full bg-border/30">
                <div
                  className="h-px bg-foreground/25 transition-all duration-700"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
