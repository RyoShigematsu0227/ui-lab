// acsim.app スタイル - カード形式フィーチャー
export function FeatureCards001() {
  const features = [
    {
      tag: "Development",
      title: "Build with Confidence",
      description:
        "TypeScript-first APIs with full type safety. Catch errors before they reach production.",
      stats: "99.9% uptime",
    },
    {
      tag: "Deployment",
      title: "Ship Faster",
      description:
        "Preview deployments for every pull request. Collaborate and iterate in real-time.",
      stats: "< 50ms deploys",
    },
    {
      tag: "Monitoring",
      title: "Stay Informed",
      description:
        "Real-time logs, metrics, and alerts. Know exactly what is happening at all times.",
      stats: "Zero blind spots",
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-white/20" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                Capabilities
              </p>
              <h2 className="max-w-md text-3xl font-light tracking-tight text-white/90 sm:text-4xl">
                The complete platform for modern apps
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white/80"
            >
              All Features
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

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-zinc-950 p-8 transition-colors hover:border-white/20"
            >
              {/* コーナードット */}
              <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-white/20" />

              {/* Tag */}
              <span className="mb-8 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                {feature.tag}
              </span>

              {/* Content */}
              <h3 className="mb-4 text-xl font-light tracking-wide text-white/90">
                {feature.title}
              </h3>
              <p className="mb-8 text-sm font-light leading-relaxed text-white/50">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                  {feature.stats}
                </span>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white/20 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
