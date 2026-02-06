export function LogoCloudGrid001() {
  const logos = [
    { name: "Acme Corporation", category: "ENTERPRISE" },
    { name: "Stellar Systems", category: "TECHNOLOGY" },
    { name: "Quantum Labs", category: "RESEARCH" },
    { name: "Nexus Digital", category: "CONSULTING" },
    { name: "Horizon Group", category: "FINANCE" },
    { name: "Apex Industries", category: "MANUFACTURING" },
    { name: "Vertex Solutions", category: "SOFTWARE" },
    { name: "Catalyst Inc", category: "STARTUP" },
    { name: "Phoenix Ventures", category: "INVESTMENT" },
    { name: "Atlas Partners", category: "ADVISORY" },
    { name: "Zenith Tech", category: "AI/ML" },
    { name: "Nova Systems", category: "CLOUD" },
  ];

  return (
    <section className="relative bg-background py-24">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Trusted By Industry Leaders
          </p>
          <h2 className="text-2xl font-light tracking-tight text-foreground sm:text-3xl">
            Fortune 500企業が信頼するパートナー
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative flex min-h-[180px] flex-col items-center justify-center bg-background p-8 transition-colors hover:bg-muted/30"
            >
              {/* カテゴリラベル */}
              <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/30">
                {logo.category}
              </span>

              {/* ロゴ（テキストベース） */}
              <div className="mb-4 text-center text-base font-light tracking-wide text-foreground/70 transition-colors group-hover:text-foreground">
                {logo.name}
              </div>

              {/* 装飾的な下線 */}
              <div className="h-px w-12 bg-foreground/20 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs font-light leading-relaxed text-muted-foreground">
            グローバル企業から革新的なスタートアップまで、
            <br className="sm:hidden" />
            幅広い業界のリーダーに選ばれています
          </p>
        </div>
      </div>
    </section>
  );
}
