export function CtaSplit001() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[500px] lg:grid-cols-2">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center border-b border-zinc-800/50 px-8 py-20 lg:border-b-0 lg:border-r lg:px-16 lg:py-32">
            {/* Eyebrow */}
            <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-zinc-600">
              Next Generation Platform
            </p>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to scale
              <br />
              <span className="text-zinc-500">your business?</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed tracking-wide text-zinc-500">
              Join thousands of companies who trust our platform to power their
              growth. Start building today.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="border border-white bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-950 transition-all hover:bg-transparent hover:text-white">
                Start Free
              </button>
              <button className="border border-zinc-800 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 transition-all hover:border-zinc-600 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-32">
            <div className="space-y-10">
              {/* Stat 1 */}
              <div className="border-l border-zinc-800 pl-8">
                <p className="text-4xl font-extralight tracking-tight text-white">
                  10K+
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                  Active Users
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-l border-zinc-800 pl-8">
                <p className="text-4xl font-extralight tracking-tight text-white">
                  99.9%
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                  Uptime Guaranteed
                </p>
              </div>

              {/* Stat 3 */}
              <div className="border-l border-zinc-800 pl-8">
                <p className="text-4xl font-extralight tracking-tight text-white">
                  24/7
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-zinc-600">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
