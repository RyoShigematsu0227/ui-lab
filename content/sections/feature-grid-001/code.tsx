// acsim.app スタイル - シンプルなグリッドレイアウト
export function FeatureGrid001() {
  const features = [
    {
      title: "Performance",
      description: "Optimized for speed with instant load times.",
    },
    {
      title: "Security",
      description: "Enterprise-grade protection for your data.",
    },
    {
      title: "Scalability",
      description: "Grows seamlessly with your business needs.",
    },
    {
      title: "Integration",
      description: "Connect with your favorite tools easily.",
    },
    {
      title: "Analytics",
      description: "Deep insights into your operations.",
    },
    {
      title: "Support",
      description: "24/7 dedicated customer assistance.",
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-white/20" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Why Choose Us
          </p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-lg text-3xl font-light tracking-tight text-white/90 sm:text-4xl">
              Built for modern teams
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-white/50">
              Everything you need to build, deploy, and scale your applications.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-zinc-950 p-8">
              {/* 番号 */}
              <span className="mb-6 block text-xs font-medium tracking-[0.2em] text-white/20">
                0{index + 1}
              </span>

              <h3 className="mb-3 text-base font-light tracking-wide text-white/90">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/50">
                {feature.description}
              </p>

              {/* ホバーライン */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-white/30 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
