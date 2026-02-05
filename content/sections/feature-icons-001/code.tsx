// アイコン付きフィーチャー - ライト/ダーク両対応
export function FeatureIcons001() {
  const features = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Global Infrastructure",
      description:
        "Deploy to 50+ regions worldwide with automatic failover and load balancing.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Security First",
      description:
        "End-to-end encryption with SOC 2 compliance and regular security audits.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Instant Performance",
      description:
        "Edge computing and smart caching for sub-100ms response times globally.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      title: "Managed Database",
      description:
        "Automatic backups, scaling, and zero-downtime migrations included.",
    },
  ];

  return (
    <section className="relative bg-background py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Platform
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Enterprise-grade infrastructure
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Built on the same technology that powers the world&apos;s leading companies
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border-l border-border pl-8"
            >
              {/* ドット */}
              <div className="absolute -left-[3px] top-0 h-1.5 w-1.5 rounded-full bg-foreground/30 transition-colors group-hover:bg-foreground/60" />

              {/* Icon */}
              <div className="mb-6 text-muted-foreground transition-colors group-hover:text-foreground/60">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-lg font-light tracking-wide text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            View Documentation
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
