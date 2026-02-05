export function HeroGradient001() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-500/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

      {/* グリッドパターン */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* コンテンツ */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* バッジ */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          Now Available
        </div>

        {/* 見出し */}
        <h1 className="mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Build faster with
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">
            modern UI
          </span>
        </h1>

        {/* 説明文 */}
        <p className="mb-10 max-w-2xl text-lg text-white/60 sm:text-xl">
          Create stunning websites in minutes with our collection of beautifully
          designed, production-ready components.
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 font-medium text-white transition-all hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
            Learn More →
          </button>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-violet-500/30 blur-[128px]" />
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/30 blur-[128px]" />
      </div>
    </section>
  );
}
