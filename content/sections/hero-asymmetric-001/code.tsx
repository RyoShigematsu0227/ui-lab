export function HeroAsymmetric001() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-foreground/40" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-foreground/40" />
      <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-foreground/40" />
      <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-foreground/40" />

      {/* Grid lines */}
      <div className="absolute inset-0">
        <div className="absolute left-[20%] top-0 h-full w-px bg-border/30" />
        <div className="absolute left-[40%] top-0 h-full w-px bg-border/30" />
        <div className="absolute left-[60%] top-0 h-full w-px bg-border/30" />
        <div className="absolute left-[80%] top-0 h-full w-px bg-border/30" />
      </div>

      <div className="relative mx-auto min-h-screen max-w-7xl px-6 py-24">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-12">
          {/* Left content - takes 7 columns */}
          <div className="lg:col-span-7">
            {/* Label */}
            <div className="mb-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
                Creative Agency
              </span>
            </div>

            {/* Large heading */}
            <h1 className="text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              We create
              <br />
              <span className="text-muted-foreground">digital</span>
              <br />
              experiences
            </h1>

            {/* Horizontal line */}
            <div className="my-10 h-px w-32 bg-border" />

            {/* Description - offset to the right */}
            <div className="max-w-sm lg:ml-24">
              <p className="text-base leading-relaxed text-muted-foreground">
                Pushing the boundaries of digital design through innovative
                solutions and meticulous craftsmanship.
              </p>
            </div>
          </div>

          {/* Right content - takes 5 columns */}
          <div className="flex flex-col justify-between lg:col-span-5 lg:h-[60vh]">
            {/* Top section */}
            <div className="border border-border p-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Services
              </div>
              <ul className="mt-6 space-y-3">
                {["Brand Identity", "Web Design", "Development", "Strategy"].map(
                  (service) => (
                    <li
                      key={service}
                      className="flex items-center gap-3 text-sm text-foreground/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-foreground/40" />
                      {service}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 lg:mt-0">
              <button className="group flex w-full items-center justify-between border border-border bg-muted/30 p-6 transition-all hover:border-foreground/30 hover:bg-muted/50">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
                  Start a Project
                </span>
                <svg
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1"
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
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between border-t border-border pt-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Tokyo / New York / London
          </div>
          <div className="flex items-center gap-6">
            {["Tw", "In", "Be"].map((social) => (
              <span
                key={social}
                className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
