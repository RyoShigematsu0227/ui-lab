// acsim.app スタイル - プロダクトショーケースフィーチャー
export function FeatureShowcase001() {
  const features = [
    {
      label: "API",
      title: "Developer-first APIs",
      description: "RESTful and GraphQL endpoints with comprehensive documentation.",
    },
    {
      label: "SDK",
      title: "Native SDKs",
      description: "Official libraries for JavaScript, Python, Go, and more.",
    },
    {
      label: "CLI",
      title: "Command Line Tools",
      description: "Powerful CLI for automation and CI/CD integration.",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-white/20" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Content */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              For Developers
            </p>
            <h2 className="mb-6 text-3xl font-light tracking-tight text-white/90 sm:text-4xl">
              Built for builders
            </h2>
            <p className="mb-12 text-base font-light leading-relaxed text-white/50">
              A complete toolkit designed with developers in mind. From quick
              prototypes to production-ready applications.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="mb-3 flex items-center gap-4">
                    <span className="border border-white/20 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                      {feature.label}
                    </span>
                    <h3 className="text-base font-light tracking-wide text-white/90">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="pl-14 text-sm font-light leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a
                href="#"
                className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white/90"
              >
                Read the Docs
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

          {/* Right - Code Preview */}
          <div className="relative">
            <div className="border border-white/10 bg-zinc-900/50 p-6">
              {/* Window Header */}
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white/10" />
                <div className="h-2 w-2 rounded-full bg-white/10" />
                <div className="h-2 w-2 rounded-full bg-white/10" />
              </div>

              {/* Code */}
              <pre className="overflow-x-auto text-sm">
                <code className="font-mono">
                  <span className="text-white/40">{"// Install the SDK"}</span>
                  {"\n"}
                  <span className="text-white/70">npm install</span>{" "}
                  <span className="text-white/50">@platform/sdk</span>
                  {"\n\n"}
                  <span className="text-white/40">{"// Initialize"}</span>
                  {"\n"}
                  <span className="text-white/70">import</span>{" "}
                  <span className="text-white/50">{"{ Platform }"}</span>{" "}
                  <span className="text-white/70">from</span>{" "}
                  <span className="text-white/50">&apos;@platform/sdk&apos;</span>
                  {"\n\n"}
                  <span className="text-white/70">const</span>{" "}
                  <span className="text-white/60">client</span>{" "}
                  <span className="text-white/70">=</span>{" "}
                  <span className="text-white/70">new</span>{" "}
                  <span className="text-white/60">Platform</span>
                  <span className="text-white/50">({"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-white/50">apiKey:</span>{" "}
                  <span className="text-white/40">process.env.API_KEY</span>
                  {"\n"}
                  <span className="text-white/50">{"})"}</span>
                  {"\n\n"}
                  <span className="text-white/40">{"// Deploy"}</span>
                  {"\n"}
                  <span className="text-white/70">await</span>{" "}
                  <span className="text-white/60">client</span>
                  <span className="text-white/50">.deploy()</span>
                </code>
              </pre>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
