export function HeroVideo001() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 z-10 h-1.5 w-1.5 rounded-full bg-foreground/40" />
      <div className="absolute right-8 top-8 z-10 h-1.5 w-1.5 rounded-full bg-foreground/40" />
      <div className="absolute bottom-8 left-8 z-10 h-1.5 w-1.5 rounded-full bg-foreground/40" />
      <div className="absolute bottom-8 right-8 z-10 h-1.5 w-1.5 rounded-full bg-foreground/40" />

      {/* Video Background Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-muted/80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--foreground) / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="group flex h-20 w-20 items-center justify-center border border-border transition-all hover:border-foreground/40 hover:scale-105">
          <svg
            className="ml-1 h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 border border-border px-5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400/80" />
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Now Available Worldwide
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The future of
            <br />
            <span className="text-muted-foreground">digital experiences</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            Transform the way you create, collaborate, and connect. Our
            platform empowers teams to build extraordinary things together.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center gap-2 border border-border bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/90">
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
            <button className="inline-flex items-center gap-2 border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground">
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
              Watch Video
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                Scroll
              </span>
              <div className="h-10 w-px bg-gradient-to-b from-foreground/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
