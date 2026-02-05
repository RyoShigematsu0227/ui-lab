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
    <section className="bg-background py-16 overflow-hidden border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading companies worldwide
        </p>
      </div>

      {/* Animated Logo Marquee */}
      <div className="relative mt-12">
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling Container */}
        <div className="flex animate-[scroll_30s_linear_infinite]">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-8 flex flex-shrink-0 items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-all duration-300 hover:border-border/80 hover:text-foreground">
                <span className="text-lg font-semibold tracking-wider">{logo.letter}</span>
              </div>
              <span className="text-sm font-medium tracking-wide text-muted-foreground">
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
