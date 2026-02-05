export function CtaSplit001() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[500px] lg:grid-cols-2">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center border-b border-border/50 px-8 py-20 lg:border-b-0 lg:border-r lg:px-16 lg:py-32">
            {/* Eyebrow */}
            <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground/60">
              Next Generation Platform
            </p>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Ready to scale
              <br />
              <span className="text-muted-foreground">your business?</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
              Join thousands of companies who trust our platform to power their
              growth. Start building today.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="border border-foreground bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground">
                Start Free
              </button>
              <button className="border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/50 hover:text-foreground">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-32">
            <div className="space-y-10">
              {/* Stat 1 */}
              <div className="border-l border-border pl-8">
                <p className="text-4xl font-extralight tracking-tight text-foreground">
                  10K+
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  Active Users
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-l border-border pl-8">
                <p className="text-4xl font-extralight tracking-tight text-foreground">
                  99.9%
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  Uptime Guaranteed
                </p>
              </div>

              {/* Stat 3 */}
              <div className="border-l border-border pl-8">
                <p className="text-4xl font-extralight tracking-tight text-foreground">
                  24/7
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
