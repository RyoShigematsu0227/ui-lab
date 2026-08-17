export function LogoCloudTiered001() {
  const premium = [
    { name: "Aether Corp", letter: "A" },
    { name: "Bloom Systems", letter: "B" },
    { name: "Cipher Tech", letter: "C" },
  ];

  const standard = [
    { name: "Delta AI", letter: "D" },
    { name: "Echo Labs", letter: "E" },
    { name: "Forge Inc", letter: "F" },
    { name: "Glyph Studio", letter: "G" },
    { name: "Helix Cloud", letter: "H" },
    { name: "Iris Platform", letter: "I" },
  ];

  const starter = [
    { name: "Jade Systems", letter: "J" },
    { name: "Kite Works", letter: "K" },
    { name: "Lumen AI", letter: "L" },
    { name: "Nova Labs", letter: "N" },
    { name: "Orbit Tech", letter: "O" },
    { name: "Pulse Inc", letter: "P" },
    { name: "Quartz Dev", letter: "Q" },
    { name: "Rune Studio", letter: "R" },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Partnership Tiers
          </p>
          <h2 className="mt-3 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
            パートナーエコシステム
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            業界をリードする企業との戦略的パートナーシップを通じて、最高水準のソリューションを提供します。
          </p>
        </div>

        {/* プレミアムティア */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              Premium
            </p>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {premium.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex items-center gap-4 border border-border px-6 py-8 transition-colors duration-300 hover:bg-muted/30"
              >
                <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border text-foreground/40 transition-colors duration-300 group-hover:border-foreground/20 group-hover:text-foreground/70">
                  <span className="text-lg font-medium tracking-wider">
                    {partner.letter}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium tracking-wide text-foreground">
                    {partner.name}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
                    Strategic Partner
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* スタンダードティア */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              Standard
            </p>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {standard.map((partner) => (
              <div
                key={partner.name}
                className="group flex items-center justify-center gap-3 bg-background px-4 py-7 transition-colors duration-300 hover:bg-muted/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-muted-foreground/50 transition-colors duration-300 group-hover:border-foreground/20 group-hover:text-foreground/60">
                  <span className="text-sm font-medium tracking-wider">
                    {partner.letter}
                  </span>
                </div>
                <span className="text-xs tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* スターターティア */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              Starter
            </p>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {starter.map((partner) => (
              <span
                key={partner.name}
                className="text-xs font-light tracking-[0.1em] text-muted-foreground/40 transition-colors duration-300 hover:text-foreground/60"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        {/* フッター */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            300社以上のパートナー
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            3つのティアプログラム
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            グローバル展開
          </p>
        </div>
      </div>
    </section>
  );
}
