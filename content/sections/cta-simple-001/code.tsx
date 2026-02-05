export function CtaSimple001() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Simple centered content */}
        <div className="text-center">
          {/* One line heading */}
          <h2 className="text-xl font-light tracking-wide text-white sm:text-2xl">
            Ready to get started?{" "}
            <span className="text-zinc-500">Create your free account.</span>
          </h2>

          {/* Inline CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full border border-white bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-950 transition-all hover:bg-transparent hover:text-white sm:w-auto">
              Sign Up Free
            </button>
            <span className="hidden text-zinc-700 sm:inline">or</span>
            <button className="w-full text-xs tracking-wide text-zinc-500 underline underline-offset-4 transition-colors hover:text-white sm:w-auto">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Minimal divider */}
        <div className="mx-auto mt-12 h-px w-24 bg-zinc-800" />

        {/* Bottom links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-wide text-zinc-600">
          <a href="#" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <span className="h-1 w-1 rounded-full bg-zinc-800" />
          <a href="#" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <span className="h-1 w-1 rounded-full bg-zinc-800" />
          <a href="#" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
