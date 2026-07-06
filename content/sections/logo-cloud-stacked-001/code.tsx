export function LogoCloudStacked001() {
  const premium = [
    { name: "Zenith Corp", letter: "Z" },
    { name: "Orion Labs", letter: "O" },
    { name: "Vantage AI", letter: "V" },
  ];

  const standard = [
    { name: "Arc Systems", letter: "A" },
    { name: "Flux Design", letter: "F" },
    { name: "Kite Studio", letter: "K" },
    { name: "Nova Cloud", letter: "N" },
    { name: "Pulse Tech", letter: "P" },
    { name: "Reef Data", letter: "R" },
  ];

  return (
    <section className="relative bg-background py-28">
      <div className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Partners
          </p>
          <div className="mt-4 h-px w-12 bg-border/40" />
          <h2 className="mt-6 text-2xl font-light tracking-wide text-foreground sm:text-3xl">
            信頼のパートナーシップ
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            業界をリードする企業とともに、新しい価値の創出に取り組んでいます。
          </p>
        </div>

        {/* プレミアムパートナー */}
        <div className="space-y-px">
          {premium.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex items-center gap-6 border border-border/30 bg-background px-6 py-8 transition-colors duration-300 hover:bg-muted/20 sm:px-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/40 transition-colors duration-300 group-hover:border-foreground/20">
                <span className="text-lg font-light tracking-wider text-foreground/50 transition-colors duration-300 group-hover:text-foreground">
                  {partner.letter}
                </span>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="text-sm font-medium tracking-wide text-foreground">
                    {partner.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    Premium Partner
                  </p>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <div className="h-px w-8 bg-border/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/20" />
                  <span className="text-[10px] tabular-nums tracking-[0.15em] text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 区切り */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-border/20" />
          <div className="h-1 w-1 rounded-full bg-foreground/15" />
          <div className="h-px flex-1 bg-border/20" />
        </div>

        {/* スタンダードパートナー */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
          {standard.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-muted/10"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/30 transition-colors duration-300 group-hover:border-foreground/15">
                <span className="text-xs font-light tracking-wider text-foreground/30 transition-colors duration-300 group-hover:text-foreground/60">
                  {partner.letter}
                </span>
              </div>
              <span className="text-xs tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            150社以上のパートナー企業
          </p>
          <div className="h-3 w-px bg-border/30" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            グローバル展開
          </p>
        </div>
      </div>
    </section>
  );
}
