export function HeroMinimal001() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-foreground/30" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-foreground/30" />
      <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-foreground/30" />
      <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-foreground/30" />

      {/* メインコンテンツ */}
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24">
        <div className="text-center">
          {/* ラベル */}
          <div className="mb-16">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Minimal Design
            </span>
          </div>

          {/* 見出し */}
          <h1 className="mb-8 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Simplicity is the
            <br />
            ultimate sophistication
          </h1>

          {/* 説明文 */}
          <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-muted-foreground">
            Less is more. Focus on what matters most with our minimal design
            approach that puts your content first.
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="inline-flex h-12 items-center justify-center border border-border bg-foreground px-8 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90">
              Start Building
            </button>
            <button className="inline-flex h-12 items-center justify-center border border-border px-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
              View Examples
            </button>
          </div>
        </div>

        {/* 装飾的な区切り線 */}
        <div className="mt-24 flex items-center gap-6">
          <div className="h-px w-16 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Trusted by 10,000+ developers
          </span>
          <div className="h-px w-16 bg-border" />
        </div>

        {/* ロゴクラウド（プレースホルダー） */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {["Vercel", "Linear", "Notion", "Figma"].map((company) => (
            <div
              key={company}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
