// コーナードット装飾コンポーネント
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

export function StatsIcons001() {
  const stats = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      value: "10M+",
      label: "Active Users",
      description: "People using our platform daily",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: "150+",
      label: "Countries",
      description: "Global presence worldwide",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      value: "99.9%",
      label: "Uptime",
      description: "Guaranteed availability",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      value: "<50ms",
      label: "Response Time",
      description: "Lightning-fast performance",
    },
  ];

  return (
    <section className="relative bg-background py-24">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Performance
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            Trusted by millions
          </h2>
          <p className="mt-4 text-base tracking-wide text-muted-foreground">
            Numbers that speak for themselves
          </p>
        </div>

        {/* 統計グリッド */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-border bg-muted/30 p-8 text-center transition-all hover:border-border/80 hover:bg-muted/50"
            >
              {/* コーナードット */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-muted-foreground/30" />

              {/* アイコン */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:text-foreground">
                {stat.icon}
              </div>

              {/* 数値 */}
              <p className="mt-6 text-3xl font-light tracking-wider text-foreground">
                {stat.value}
              </p>

              {/* ラベル */}
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>

              {/* 説明 */}
              <p className="mt-2 text-sm tracking-wide text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
