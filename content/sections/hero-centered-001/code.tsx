export function HeroCentered001() {
  return (
    <section className="relative min-h-screen bg-zinc-950">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-white/40" />

      {/* Center lines decoration */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/5" />

      {/* メインコンテンツ */}
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24">
        {/* Top label */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2">
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/30">
            Est. 2024
          </span>
        </div>

        <div className="text-center">
          {/* 見出し */}
          <h1 className="mb-6 text-4xl font-light tracking-tight text-white/90 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Centered
          </h1>

          {/* サブ見出し */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/20" />
            <span className="text-sm font-light tracking-[0.3em] text-white/50">
              DESIGN STUDIO
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>

          {/* 説明文 */}
          <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-white/45">
            We craft digital experiences that are minimal, elegant, and
            purposefully designed for the modern web.
          </p>

          {/* Single CTA */}
          <button className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80 transition-all hover:bg-white/10 hover:text-white">
            Explore Work
          </button>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-xl font-light text-white/70">150+</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Projects
              </div>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-xl font-light text-white/70">12</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Awards
              </div>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-xl font-light text-white/70">8</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
