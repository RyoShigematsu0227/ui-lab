// 交互レイアウトフィーチャー - ライト/ダーク両対応
export function FeatureAlternating001() {
  const features = [
    {
      number: "01",
      title: "Streamlined Workflow",
      description:
        "Automate repetitive tasks and focus on what matters most. Our intelligent system learns your patterns and suggests optimizations for maximum efficiency.",
      tags: ["Automation", "AI-Powered"],
    },
    {
      number: "02",
      title: "Real-time Collaboration",
      description:
        "Work together seamlessly with your team. See changes instantly, leave comments, and never lose track of who did what in your projects.",
      tags: ["Team", "Real-time"],
    },
    {
      number: "03",
      title: "Powerful Analytics",
      description:
        "Get deep insights into your data with beautiful dashboards and customizable reports. Make informed decisions backed by comprehensive data.",
      tags: ["Analytics", "Reports"],
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
        <div className="mb-24 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Features
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Powerful tools designed to help teams work better together
          </p>
        </div>

        {/* Feature Items */}
        <div className="space-y-px bg-border">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col bg-background lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Number / Visual */}
              <div className="flex items-center justify-center border-b border-border p-12 lg:w-1/3 lg:border-b-0 lg:border-r">
                <span className="text-6xl font-extralight tracking-tight text-foreground/20">
                  {feature.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative p-10 lg:w-2/3 lg:p-12">
                <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-foreground/20" />

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-4 text-xl font-light tracking-wide text-foreground sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Learn more
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
          ))}
        </div>
      </div>
    </section>
  );
}
