export function HeroSplit001() {
  return (
    <section className="min-h-screen bg-zinc-950">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-white/30" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-white/30" />

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative flex flex-col justify-center border-r border-white/5 px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
          {/* コーナードット */}
          <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-white/30" />

          <div className="max-w-lg">
            {/* Badge */}
            <div className="mb-10">
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
                New Release v2.0
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-light tracking-tight text-white/90 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Build products
              <br />
              <span className="text-white/50">people love</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/50">
              Create beautiful, responsive interfaces with our comprehensive
              design system. Ship faster with pre-built components.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-900 transition-all hover:bg-white/90">
                Get Started
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/10 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-all hover:border-white/20 hover:text-white/80">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex items-center gap-12">
              <div>
                <div className="text-2xl font-light text-white/90">2,000+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Customers
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-light text-white/90">99.9%</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Uptime
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative hidden bg-zinc-900/50 lg:block">
          {/* コーナードット */}
          <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-white/30" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Centered content */}
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/30">
                Performance
              </div>
              <div className="mt-4 text-6xl font-light text-white/80">3x</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                Faster Development
              </div>
            </div>
          </div>

          {/* Bottom card */}
          <div className="absolute bottom-12 left-12 right-12 border border-white/10 bg-zinc-950/50 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-white/10">
                <svg
                  className="h-5 w-5 text-white/60"
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
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Development Speed
                </p>
                <p className="mt-1 text-lg font-light text-white/80">
                  Ship in days, not weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
