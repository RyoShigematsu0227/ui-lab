export function HeroMinimal001() {
  return (
    <section className="relative min-h-screen bg-zinc-950">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-white/30" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-white/30" />
      <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-white/30" />
      <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-white/30" />

      {/* メインコンテンツ */}
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24">
        <div className="text-center">
          {/* ラベル */}
          <div className="mb-16">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
              Minimal Design
            </span>
          </div>

          {/* 見出し */}
          <h1 className="mb-8 text-3xl font-light tracking-tight text-white/90 sm:text-4xl md:text-5xl lg:text-6xl">
            Simplicity is the
            <br />
            ultimate sophistication
          </h1>

          {/* 説明文 */}
          <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-white/50">
            Less is more. Focus on what matters most with our minimal design
            approach that puts your content first.
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="inline-flex h-12 items-center justify-center border border-white/20 bg-white/95 px-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-900 transition-colors hover:bg-white">
              Start Building
            </button>
            <button className="inline-flex h-12 items-center justify-center border border-white/10 px-8 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:border-white/20 hover:text-white/80">
              View Examples
            </button>
          </div>
        </div>

        {/* 装飾的な区切り線 */}
        <div className="mt-24 flex items-center gap-6">
          <div className="h-px w-16 bg-white/10" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Trusted by 10,000+ developers
          </span>
          <div className="h-px w-16 bg-white/10" />
        </div>

        {/* ロゴクラウド（プレースホルダー） */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {["Vercel", "Linear", "Notion", "Figma"].map((company) => (
            <div
              key={company}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/25"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
