export function CtaMinimal001() {
  return (
    <section className="bg-slate-950 py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-zinc-500">
          Start for free
        </p>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to get started?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed tracking-wide text-zinc-400">
          Join over 10,000+ teams using our platform to build better products
          faster. No credit card required.
        </p>

        {/* Email Input & Button */}
        <form className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-zinc-800 bg-transparent px-5 py-3.5 text-sm tracking-wide text-white placeholder-zinc-600 transition-colors focus:border-zinc-600 focus:outline-none"
          />
          <button
            type="submit"
            className="border border-white bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-950 transition-all hover:bg-transparent hover:text-white"
          >
            Get Started
          </button>
        </form>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs tracking-[0.15em] text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            Free 14-day trial
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
