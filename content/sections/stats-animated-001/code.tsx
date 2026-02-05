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

export function StatsAnimated001() {
  const stats = [
    { value: "10M+", label: "Active Users", description: "Trust our platform" },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable infrastructure",
    },
    { value: "150+", label: "Countries", description: "Global presence" },
    { value: "24/7", label: "Support", description: "Always available" },
  ];

  return (
    <section className="relative bg-zinc-950 py-24">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      {/* 背景グリッド */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Our Impact
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-white sm:text-4xl">
            Trusted by millions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base tracking-wide text-zinc-400">
            Our numbers speak for themselves. Join the growing community of
            satisfied users.
          </p>
        </div>

        {/* 統計グリッド */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-zinc-800 bg-zinc-900/30 p-8 text-center transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              {/* コーナードット */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-zinc-700" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-zinc-700" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-zinc-700" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-zinc-700" />

              {/* 数値 */}
              <p className="text-4xl font-light tracking-wider text-white sm:text-5xl">
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

        {/* CTA */}
        <div className="mt-16 border border-zinc-800 bg-zinc-900/30 p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-xl font-light tracking-wide text-white">
                Ready to join them?
              </p>
              <p className="mt-1 text-sm tracking-wide text-zinc-400">
                Start your free trial today. No credit card required.
              </p>
            </div>
            <button className="border border-zinc-700 bg-white px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-900 transition-all hover:bg-zinc-100">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
