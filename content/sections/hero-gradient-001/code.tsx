export function HeroGradient001() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/40" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/40" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-foreground/40" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-foreground/40" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-background" />

      {/* コンテンツ */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* ラベル */}
        <div className="mb-12">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Design System
          </span>
        </div>

        {/* 見出し */}
        <h1 className="mb-8 text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Build interfaces that
          <br />
          <span className="text-muted-foreground">inspire and engage</span>
        </h1>

        {/* 説明文 */}
        <p className="mb-12 max-w-xl text-base leading-relaxed tracking-wide text-muted-foreground">
          A refined collection of components crafted with precision.
          Minimal aesthetics, maximum impact.
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center border border-border bg-foreground px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/90">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center border border-border px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground">
            Learn More
          </button>
        </div>

        {/* 区切り線 */}
        <div className="mt-24 h-px w-24 bg-border" />

        {/* フッターテキスト */}
        <div className="mt-8">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/60">
            Trusted by 10,000+ developers worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
