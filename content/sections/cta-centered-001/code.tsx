export function CtaCentered001() {
  return (
    <section className="bg-background py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Decorative element */}
        <div className="mx-auto mb-10 h-px w-16 bg-border" />

        {/* Eyebrow */}
        <p className="text-[11px] font-medium uppercase tracking-[0.5em] text-muted-foreground/60">
          The future is here
        </p>

        {/* Main heading */}
        <h2 className="mt-8 text-4xl font-extralight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Build something
          <br />
          <span className="font-light italic text-muted-foreground">extraordinary</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed tracking-wide text-muted-foreground">
          We believe in the power of simplicity. Our platform helps you create
          stunning experiences without the complexity.
        </p>

        {/* Single CTA button */}
        <div className="mt-12">
          <button className="group relative inline-flex items-center gap-4 border border-border bg-transparent px-10 py-5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground transition-all hover:border-foreground hover:text-foreground">
            <span>Get Started</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-[11px] tracking-[0.2em] text-muted-foreground/50">
          Free forever — No credit card needed
        </p>

        {/* Decorative element */}
        <div className="mx-auto mt-16 h-px w-16 bg-border" />
      </div>
    </section>
  );
}
