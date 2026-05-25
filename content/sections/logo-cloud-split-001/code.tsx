export function LogoCloudSplit001() {
  const logos = [
    { name: "Aether", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
    { name: "Prism", icon: "M12 3L1 9l11 6 11-6-11-6zM1 17l11 6 11-6" },
    { name: "Vertex", icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" },
    { name: "Lumina", icon: "M12 2v20M2 12h20M6.93 6.93l10.14 10.14M17.07 6.93L6.93 17.07" },
    { name: "Nexus", icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" },
    { name: "Cipher", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { name: "Stratos", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
    { name: "Orbital", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6a6 6 0 100 12 6 6 0 000-12zM12 10a2 2 0 100 4 2 2 0 000-4z" },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
          {/* 左カラム: テキスト */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Partners
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              信頼のパートナー
            </h2>
            <div className="mt-4 h-px w-12 bg-border/40" />
            <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
              業界をリードする企業とともに、
              <br className="hidden sm:block" />
              革新的なソリューションを提供しています。
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="text-3xl font-light tracking-tight text-foreground">
                200
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                社以上の
                <br />
                導入実績
              </span>
            </div>
          </div>

          {/* 右カラム: ロゴグリッド */}
          <div className="relative lg:col-span-3">
            <div className="absolute -left-4 -top-4 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute -right-4 -top-4 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute -bottom-4 -left-4 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute -bottom-4 -right-4 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />

            <div className="grid grid-cols-2 border border-border/40 sm:grid-cols-4">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center justify-center gap-3 border border-border/20 px-4 py-10 transition-colors hover:bg-foreground/[0.02]"
                >
                  <svg
                    className="h-6 w-6 text-foreground/15 transition-colors group-hover:text-foreground/35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={logo.icon} />
                  </svg>
                  <span className="text-[11px] font-light tracking-[0.15em] text-foreground/25 transition-colors group-hover:text-foreground/50">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
