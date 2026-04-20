export function LogoCloudMinimal001() {
  const logos = [
    { name: "Aether" },
    { name: "Prism" },
    { name: "Vertex" },
    { name: "Lumina" },
    { name: "Nexus" },
    { name: "Cipher" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Trusted Partners
          </p>
          <h2 className="mt-4 text-2xl font-light tracking-tight text-foreground">
            信頼あるパートナーとの協業
          </h2>
        </div>

        {/* ロゴグリッド */}
        <div className="relative mt-16 border border-border/40 p-1">
          {/* コーナードット */}
          <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
          <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
          <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
          <div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center border border-border/20 px-6 py-10 transition-colors hover:bg-foreground/[0.02]"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-foreground/20 transition-colors group-hover:text-foreground/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M9 12h6M12 9v6" />
                  </svg>
                  <span className="text-sm font-light tracking-[0.1em] text-foreground/30 transition-colors group-hover:text-foreground/60">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* フッターテキスト */}
        <p className="mt-8 text-center text-xs tracking-wide text-muted-foreground/50">
          100社以上のパートナー企業と協業しています
        </p>
      </div>
    </section>
  );
}
