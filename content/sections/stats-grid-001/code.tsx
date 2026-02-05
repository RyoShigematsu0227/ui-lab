// コーナードット装飾コンポーネント
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-zinc-600" />
    </div>
  );
}

export function StatsGrid001() {
  const stats = [
    {
      value: "500+",
      label: "Enterprise Clients",
      description: "Fortune 500 companies trust us",
    },
    {
      value: "99.99%",
      label: "Availability",
      description: "Industry-leading uptime",
    },
    {
      value: "10ms",
      label: "Latency",
      description: "Edge network response time",
    },
    {
      value: "50PB",
      label: "Data Processed",
      description: "Monthly throughput",
    },
    {
      value: "200+",
      label: "Integrations",
      description: "Connect with your tools",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Expert help anytime",
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-24">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Platform Stats
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-white sm:text-4xl">
            Built for scale
          </h2>
        </div>

        {/* 統計グリッド */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-zinc-950 p-8 transition-all hover:bg-zinc-900/50"
            >
              {/* コーナードット */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-zinc-800 transition-colors group-hover:bg-zinc-600" />

              {/* 数値 */}
              <p className="text-4xl font-light tracking-wider text-white">
                {stat.value}
              </p>

              {/* ラベル */}
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>

              {/* 説明 */}
              <p className="mt-2 text-sm tracking-wide text-zinc-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
