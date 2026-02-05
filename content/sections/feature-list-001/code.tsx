// フィーチャーリスト - ライト/ダーク両対応
export function FeatureList001() {
  const features = [
    {
      icon: (
        <svg
          className="h-5 w-5"
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
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance. Experience instant load times and smooth interactions.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols keep your data safe and compliant.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      title: "Flexible Layout",
      description:
        "Customize every aspect of your workspace with drag-and-drop simplicity.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time collaboration and commenting features.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Advanced Analytics",
      description:
        "Get deep insights with comprehensive analytics and customizable dashboards.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Easy Integrations",
      description:
        "Connect with 100+ popular tools and services with just a few clicks.",
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
            Features
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Powerful features designed to help you build better products faster
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-background p-8">
              {/* コーナードット */}
              <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-foreground/20" />

              {/* Icon */}
              <div className="mb-6 text-muted-foreground transition-colors group-hover:text-foreground/60">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-base font-light tracking-wide text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-foreground/20 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
