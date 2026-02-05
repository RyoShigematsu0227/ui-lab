export function HeroSplit001() {
  return (
    <section className="min-h-screen bg-background">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-foreground/30" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-foreground/30" />

      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Content */}
        <div className="relative flex flex-col justify-center border-r border-border px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
          {/* コーナードット */}
          <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-foreground/30" />

          <div className="max-w-lg">
            {/* Badge */}
            <div className="mb-10">
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
                New Release v2.0
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Build products
              <br />
              <span className="text-muted-foreground">people love</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Create beautiful, responsive interfaces with our comprehensive
              design system. Ship faster with pre-built components.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 border border-border bg-foreground px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/90">
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
              <button className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex items-center gap-12">
              <div>
                <div className="text-2xl font-light text-foreground">2,000+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Customers
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-light text-foreground">99.9%</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Uptime
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative hidden bg-muted/50 lg:block">
          {/* コーナードット */}
          <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-foreground/30" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Centered content */}
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground/60">
                Performance
              </div>
              <div className="mt-4 text-6xl font-light text-foreground/80">3x</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Faster Development
              </div>
            </div>
          </div>

          {/* Bottom card */}
          <div className="absolute bottom-12 left-12 right-12 border border-border bg-card/50 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-border">
                <svg
                  className="h-5 w-5 text-muted-foreground"
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
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Development Speed
                </p>
                <p className="mt-1 text-lg font-light text-foreground/80">
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
