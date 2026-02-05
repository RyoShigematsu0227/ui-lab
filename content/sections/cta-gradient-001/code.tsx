export function CtaGradient001() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-muted/50" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Start building today
        </p>

        {/* Heading */}
        <h2 className="mb-6 text-center text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Ready to get started?
        </h2>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg font-light leading-relaxed tracking-wide text-muted-foreground">
          Join thousands of developers building amazing products with our
          components. Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex h-12 items-center justify-center border border-foreground bg-foreground px-8 text-sm font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground">
            Start Free Trial
          </button>
          <button className="inline-flex h-12 items-center justify-center border border-border bg-transparent px-8 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/50 hover:text-foreground">
            Talk to Sales
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-10 text-center text-xs tracking-[0.2em] text-muted-foreground/60">
          No credit card required — 14-day free trial — Cancel anytime
        </p>

        {/* Subtle bottom border */}
        <div className="mx-auto mt-16 h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
