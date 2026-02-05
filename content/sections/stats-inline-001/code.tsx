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

export function StatsInline001() {
  return (
    <section className="relative bg-zinc-950 py-24">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* メインテキスト */}
        <p className="text-center text-2xl font-light leading-relaxed tracking-wide text-white sm:text-3xl md:text-4xl">
          We&apos;ve helped{" "}
          <span className="border-b border-zinc-700 text-zinc-300">
            10,000+
          </span>{" "}
          companies grow their revenue by{" "}
          <span className="border-b border-zinc-700 text-zinc-300">40%</span>{" "}
          on average. Our platform processes{" "}
          <span className="border-b border-zinc-700 text-zinc-300">
            $2B+
          </span>{" "}
          in transactions annually with{" "}
          <span className="border-b border-zinc-700 text-zinc-300">
            99.99%
          </span>{" "}
          uptime.
        </p>

        {/* 区切り線 */}
        <div className="mx-auto mt-12 h-px w-16 bg-zinc-800" />

        {/* サブテキスト */}
        <p className="mt-8 text-center text-sm tracking-wide text-zinc-500">
          Trusted by industry leaders worldwide
        </p>

        {/* ロゴプレースホルダー */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-20 rounded bg-zinc-800"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
