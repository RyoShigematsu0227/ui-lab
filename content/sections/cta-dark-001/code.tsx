export function CtaDark001() {
  return (
    <section className="relative overflow-hidden bg-background py-40">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted/40 via-background to-background" />

      {/* Minimal decorative lines */}
      <div className="absolute left-0 top-1/2 h-px w-1/4 -translate-y-1/2 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute right-0 top-1/2 h-px w-1/4 -translate-y-1/2 bg-gradient-to-l from-transparent via-border/50 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Small top decorative element */}
        <div className="mx-auto mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-border" />
          <span className="h-2 w-2 rotate-45 border border-border" />
          <span className="h-px w-12 bg-border" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extralight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Experience
          <br />
          <span className="mt-2 block font-light italic tracking-wide text-muted-foreground">
            the difference
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-lg text-sm font-light leading-loose tracking-wider text-muted-foreground/60">
          Crafted with precision. Designed for the future. Built to last.
          Join the evolution.
        </p>

        {/* CTA Button */}
        <div className="mt-14">
          <button className="group relative overflow-hidden border border-border bg-transparent px-12 py-5 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500 hover:border-foreground/50 hover:text-foreground">
            <span className="relative z-10">Begin Your Journey</span>
            <div className="absolute inset-0 -translate-x-full bg-muted transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </div>

        {/* Bottom element */}
        <div className="mt-16 flex items-center justify-center gap-8 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50">
          <span>Free to start</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>No limits</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Cancel anytime</span>
        </div>

        {/* Small bottom decorative element */}
        <div className="mx-auto mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-border" />
          <span className="h-2 w-2 rotate-45 border border-border" />
          <span className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
}
