export function LogoCloudShowcase001() {
  const featured = [
    { name: "Apex Studio", letter: "A" },
    { name: "Bloom Tech", letter: "B" },
    { name: "Cipher Labs", letter: "C" },
  ];

  const partners = [
    { name: "Delta Systems", letter: "D" },
    { name: "Echo Finance", letter: "E" },
    { name: "Forge AI", letter: "F" },
    { name: "Glyph Design", letter: "G" },
    { name: "Helix Cloud", letter: "H" },
    { name: "Iris Platform", letter: "I" },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Trusted Partners
          </p>
          <h2 className="mt-3 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
            業界をリードする企業との連携
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            多くの先進的な企業にご採用いただき、共にイノベーションを推進しています。
          </p>
        </div>

        {/* フィーチャードパートナー */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center gap-4 rounded-lg border border-border bg-background px-6 py-10 transition-colors duration-300 hover:bg-muted/30"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border text-foreground/60 transition-all duration-300 group-hover:border-foreground/20 group-hover:text-foreground">
                <span className="text-xl font-medium tracking-wider">
                  {partner.letter}
                </span>
              </div>
              <div className="text-center">
                <span className="text-sm font-medium tracking-wide text-foreground">
                  {partner.name}
                </span>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                  Strategic Partner
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 区切り線 */}
        <div className="mx-auto my-12 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-border/40" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
            And More
          </p>
          <div className="h-px w-12 bg-border/40" />
        </div>

        {/* その他パートナー */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center gap-3 bg-background px-4 py-8 transition-colors duration-300 hover:bg-muted/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 group-hover:border-foreground/20 group-hover:text-foreground">
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

        {/* フッターテキスト */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            200社以上の導入実績
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            99.9%の顧客満足度
          </p>
        </div>
      </div>
    </section>
  );
}
