export function StatsAnimated001() {
  const stats = [
    { value: "10M+", label: "Active Users", description: "Trust our platform" },
    { value: "99.9%", label: "Uptime", description: "Reliable infrastructure" },
    { value: "150+", label: "Countries", description: "Global presence" },
    { value: "24/7", label: "Support", description: "Always available" },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-900 py-24">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* グラデーション装飾 */}
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by millions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Our numbers speak for themselves. Join the growing community of
            satisfied users.
          </p>
        </div>

        {/* 統計グリッド */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              {/* 数値 */}
              <p className="mb-2 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {stat.value}
              </p>

              {/* ラベル */}
              <p className="mb-1 text-lg font-semibold text-white">
                {stat.label}
              </p>

              {/* 説明 */}
              <p className="text-sm text-zinc-400">{stat.description}</p>

              {/* ホバー時の装飾 */}
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* 追加情報 */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:flex-row sm:gap-12">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold text-white">
              Ready to join them?
            </p>
            <p className="text-zinc-400">
              Start your free trial today. No credit card required.
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-white px-8 py-3 font-semibold text-zinc-900 transition-transform hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}
