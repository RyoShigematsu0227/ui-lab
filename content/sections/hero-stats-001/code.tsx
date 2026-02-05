export function HeroStats001() {
  return (
    <section className="relative min-h-screen bg-zinc-950">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-white/40" />

      <div className="mx-auto min-h-screen max-w-6xl px-6 py-24">
        <div className="flex min-h-screen flex-col justify-center">
          {/* Top label */}
          <div className="mb-16">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">
              By the Numbers
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-8 max-w-3xl text-3xl font-light tracking-tight text-white/90 sm:text-4xl md:text-5xl lg:text-6xl">
            Delivering results that
            <span className="text-white/50"> speak for themselves</span>
          </h1>

          {/* Description */}
          <p className="mb-16 max-w-xl text-base leading-relaxed text-white/50">
            Our track record demonstrates consistent excellence in digital
            solutions, helping businesses achieve measurable growth.
          </p>

          {/* Stats grid */}
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Projects Delivered", sublabel: "Since 2018" },
              { value: "98%", label: "Client Retention", sublabel: "Year over year" },
              { value: "4.9", label: "Average Rating", sublabel: "From 1,200+ reviews" },
              { value: "$2B+", label: "Revenue Generated", sublabel: "For our clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-zinc-950 p-8 transition-colors hover:bg-zinc-900/50"
              >
                <div className="text-4xl font-light text-white/90 sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-4 text-sm text-white/60">{stat.label}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <button className="inline-flex items-center gap-3 border border-white/20 bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-900 transition-all hover:bg-white/90">
              View Case Studies
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
            <div className="h-px w-12 bg-white/20 sm:rotate-90" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Trusted by Fortune 500 companies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
