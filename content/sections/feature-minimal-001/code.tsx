// acsim.app スタイル - 超ミニマルフィーチャー
export function FeatureMinimal001() {
  const features = [
    "Instant deployments",
    "Edge network",
    "Serverless functions",
    "Database integration",
    "Custom domains",
    "SSL certificates",
    "Analytics dashboard",
    "Team collaboration",
  ];

  return (
    <section className="relative bg-zinc-950 py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-white/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-white/20" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Included
          </p>
          <h2 className="text-3xl font-light tracking-tight text-white/90 sm:text-4xl">
            Everything built in
          </h2>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 border-b border-white/10 py-5 transition-colors hover:bg-white/[0.02]"
            >
              {/* Check */}
              <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                <div className="h-1 w-1 rounded-full bg-white/40 transition-colors group-hover:bg-white/60" />
              </div>

              {/* Text */}
              <span className="text-sm font-light tracking-wide text-white/70 transition-colors group-hover:text-white/90">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-sm font-light text-white/40">
            No hidden fees. No surprises.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white/40 hover:text-white/90"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
