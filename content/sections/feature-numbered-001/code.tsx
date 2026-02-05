// 番号付きリストフィーチャー - ライト/ダーク両対応
export function FeatureNumbered001() {
  const features = [
    {
      number: "01",
      title: "Define Your Goals",
      description:
        "Start by outlining your objectives. Our platform adapts to your specific needs and scales with your ambitions.",
    },
    {
      number: "02",
      title: "Configure Your Workflow",
      description:
        "Set up automated pipelines with our intuitive interface. No coding required, just drag, drop, and deploy.",
    },
    {
      number: "03",
      title: "Monitor & Iterate",
      description:
        "Track performance in real-time with comprehensive dashboards. Make data-driven decisions effortlessly.",
    },
    {
      number: "04",
      title: "Scale Infinitely",
      description:
        "As your needs grow, our infrastructure scales automatically. Focus on building, not managing servers.",
    },
  ];

  return (
    <section className="relative bg-background py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            How It Works
          </p>
          <h2 className="max-w-2xl text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Four steps to transform your workflow
          </h2>
        </div>

        {/* Numbered List */}
        <div className="space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border-t border-border py-10 first:border-t-0 lg:py-12"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
                {/* Number */}
                <div className="shrink-0">
                  <span className="text-5xl font-extralight tracking-tight text-foreground/10 transition-colors group-hover:text-foreground/20 lg:text-6xl">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-4 text-xl font-light tracking-wide text-foreground lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden shrink-0 text-foreground/20 transition-colors group-hover:text-foreground/40 lg:block">
                  <svg
                    className="h-5 w-5"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-border pt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Get Started Today
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
