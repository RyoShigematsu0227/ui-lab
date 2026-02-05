export function HeroDark001() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* コーナードット装飾 */}
      <div className="absolute left-10 top-10 h-1.5 w-1.5 rounded-full bg-foreground/30" />
      <div className="absolute right-10 top-10 h-1.5 w-1.5 rounded-full bg-foreground/30" />
      <div className="absolute bottom-10 left-10 h-1.5 w-1.5 rounded-full bg-foreground/30" />
      <div className="absolute bottom-10 right-10 h-1.5 w-1.5 rounded-full bg-foreground/30" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Border frame */}
      <div className="pointer-events-none absolute inset-8 border border-border/50" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-16 sm:px-12 lg:px-16">
        {/* Top section */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground/60">
              Digital Experiences
            </span>
          </div>
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground/60">
              2024
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="py-12">
          {/* Large heading - ultra minimal */}
          <h1 className="mb-12 text-5xl font-extralight leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Into
            <br />
            <span className="text-muted-foreground">the void</span>
          </h1>

          {/* Description + CTA row */}
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Where darkness meets design. We create immersive digital
              experiences that push the boundaries of aesthetic minimalism.
            </p>

            <div className="flex items-center gap-8">
              <button className="group flex items-center gap-4 border-b border-border pb-2 transition-colors hover:border-foreground/40">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground">
                  Enter
                </span>
                <svg
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground"
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
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Stats */}
          <div className="flex gap-12">
            {[
              { value: "01", label: "Studios" },
              { value: "47", label: "Projects" },
              { value: "12", label: "Awards" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extralight text-foreground/70">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/40">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-foreground/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
