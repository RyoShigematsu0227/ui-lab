// コーナードット装飾コンポーネント
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

export function StatsLarge001() {
  const stats = [
    { value: "10M+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
  ];

  return (
    <section className="relative bg-background py-32">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            By The Numbers
          </p>
        </div>

        {/* 大きな統計数値 */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative border-t border-border pt-8 text-center transition-all hover:border-muted-foreground"
            >
              {/* 数値 */}
              <p className="text-6xl font-extralight tracking-wider text-foreground sm:text-7xl md:text-8xl">
                {stat.value}
              </p>

              {/* ラベル */}
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {stat.label}
              </p>

              {/* ホバー時のドット */}
              <div className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* キャプション */}
        <div className="mt-20 text-center">
          <p className="mx-auto max-w-lg text-sm leading-relaxed tracking-wide text-muted-foreground">
            Trusted by developers and teams worldwide. Our infrastructure
            handles billions of requests every day.
          </p>
        </div>
      </div>
    </section>
  );
}
