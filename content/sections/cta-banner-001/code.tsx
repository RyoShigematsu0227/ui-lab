export function CtaBanner001() {
  return (
    <section className="bg-background py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-y border-border/50 py-8 sm:flex-row lg:py-10">
          {/* Left - Content */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8">
            {/* Icon/Badge */}
            <div className="flex h-12 w-12 items-center justify-center border border-border">
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

            {/* Text */}
            <div className="text-center sm:text-left">
              <p className="text-sm font-light tracking-wide text-foreground">
                New feature available
              </p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground/60">
                Check out our latest updates and improvements
              </p>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex items-center gap-4">
            <button className="border border-border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/50 hover:text-foreground">
              Dismiss
            </button>
            <button className="border border-foreground bg-foreground px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
