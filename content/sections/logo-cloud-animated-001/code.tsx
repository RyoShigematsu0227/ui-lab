"use client";

export function LogoCloudAnimated001() {
  const logos = [
    { name: "Vercel", letter: "V" },
    { name: "Stripe", letter: "S" },
    { name: "Linear", letter: "L" },
    { name: "Notion", letter: "N" },
    { name: "Figma", letter: "F" },
    { name: "Slack", letter: "S" },
    { name: "Discord", letter: "D" },
    { name: "GitHub", letter: "G" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-zinc-950 py-16 overflow-hidden border-y border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Trusted by leading companies worldwide
        </p>
      </div>

      {/* Animated Logo Marquee */}
      <div className="relative mt-12">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-zinc-950 to-transparent" />

        {/* Scrolling Container */}
        <div className="flex animate-[scroll_30s_linear_infinite]">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-8 flex flex-shrink-0 items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-300 hover:border-zinc-700 hover:text-white">
                <span className="text-lg font-semibold tracking-wider">{logo.letter}</span>
              </div>
              <span className="text-sm font-medium tracking-wide text-zinc-500">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
