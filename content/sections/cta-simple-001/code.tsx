export function CtaSimple001() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Simple centered content */}
        <div className="text-center">
          {/* One line heading */}
          <h2 className="text-xl font-light tracking-wide text-foreground sm:text-2xl">
            Ready to get started?{" "}
            <span className="text-muted-foreground">Create your free account.</span>
          </h2>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full border border-foreground bg-foreground px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground sm:w-auto">
              Sign Up Free
            </button>
            <span className="hidden text-muted-foreground/50 sm:inline">or</span>
            <button className="w-full text-xs tracking-wide text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground sm:w-auto">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Minimal divider */}
        <div className="mx-auto mt-12 h-px w-24 bg-border" />

        {/* Bottom links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-wide text-muted-foreground/60">
          <a href="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
          <span className="h-1 w-1 rounded-full bg-border" />
          <a href="#" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
