export function HeroCta001() {
  return (
    <section className="relative min-h-screen bg-slate-950">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-white/40" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-white/40" />
      <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-white/40" />
      <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-white/40" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Label */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 border border-white/10 px-5 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
              Limited Offer
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-4xl font-light tracking-tight text-white/90 sm:text-5xl md:text-6xl lg:text-7xl">
          Start building today
        </h1>

        {/* Subheading */}
        <p className="mb-12 max-w-lg text-lg text-white/50">
          Get 50% off your first year. No credit card required.
          Cancel anytime.
        </p>

        {/* Primary CTA - Large and prominent */}
        <div className="mb-8 w-full max-w-md">
          <button className="group w-full border border-white/20 bg-white px-8 py-5 transition-all hover:bg-white/95">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-slate-950">
              Get Started Free
            </span>
            <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">
              No credit card required
            </div>
          </button>
        </div>

        {/* Secondary CTA */}
        <button className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white/70">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Watch 2 min demo
        </button>

        {/* Divider */}
        <div className="my-16 h-px w-24 bg-white/10" />

        {/* Features list */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {[
            "Unlimited projects",
            "24/7 Support",
            "99.9% Uptime",
            "Enterprise security",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/40"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Bottom testimonial */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center border border-white/10 bg-zinc-900 text-[10px] text-white/40"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Join 10,000+ developers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
