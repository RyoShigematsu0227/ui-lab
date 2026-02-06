export function LogoCloudGrid001() {
  const partners = [
    { name: "Acme Corp", letter: "A" },
    { name: "Beacon Inc", letter: "B" },
    { name: "Catalyst", letter: "C" },
    { name: "Delta Labs", letter: "D" },
    { name: "Echo Systems", letter: "E" },
    { name: "Flux Studio", letter: "F" },
    { name: "Grove Tech", letter: "G" },
    { name: "Horizon AI", letter: "H" },
  ];

  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Partners
          </p>
          <h2 className="mt-3 text-lg font-medium tracking-wide text-foreground sm:text-xl">
            信頼いただいているパートナー企業
          </h2>
        </div>

        <div className="mx-auto mt-4 h-px max-w-24 bg-border/40" />

        {/* ロゴグリッド */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center gap-3 bg-background px-6 py-10 transition-colors duration-300 hover:bg-muted/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-foreground/20 group-hover:text-foreground">
                <span className="text-base font-medium tracking-wider">
                  {partner.letter}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 transition-colors duration-300 group-hover:text-muted-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* フッターテキスト */}
        <p className="mt-10 text-center text-xs font-light tracking-wide text-muted-foreground/50">
          他100社以上の企業様にご利用いただいています
        </p>
      </div>
    </section>
  );
}
