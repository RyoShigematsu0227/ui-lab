export function HeroBrand001() {
  return (
    <section className="relative min-h-screen bg-zinc-950">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-white/40" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-white/40" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          {/* Logo mark */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center border border-white/20">
              <span className="text-lg font-light text-white/90">N</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium tracking-wide text-white/90">
                NEUTRAL
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Design Studio
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {["Work", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white/80"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Menu button */}
          <button className="border border-white/10 p-3 md:hidden">
            <svg
              className="h-4 w-4 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col items-center justify-center py-16">
          {/* Large brand mark */}
          <div className="mb-12 flex h-32 w-32 items-center justify-center border border-white/10 sm:h-40 sm:w-40">
            <span className="text-6xl font-extralight tracking-tight text-white/80 sm:text-7xl">
              N
            </span>
          </div>

          {/* Brand name */}
          <h1 className="mb-4 text-center text-3xl font-light tracking-[0.15em] text-white/90 sm:text-4xl md:text-5xl">
            NEUTRAL
          </h1>

          {/* Tagline */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-8 bg-white/20" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50">
              Design with intention
            </span>
            <div className="h-px w-8 bg-white/20" />
          </div>

          {/* Description */}
          <p className="mb-12 max-w-md text-center text-base leading-relaxed text-white/45">
            We believe in the power of restraint. Every element serves a
            purpose. Every detail has meaning.
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white/70 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white/90">
            View Portfolio
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
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
          {/* Location */}
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Tokyo, Japan
          </div>

          {/* Social */}
          <div className="flex items-center gap-6">
            {["Instagram", "Twitter", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/70"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:hello@neutral.co"
            className="text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white/70"
          >
            hello@neutral.co
          </a>
        </div>
      </div>
    </section>
  );
}
