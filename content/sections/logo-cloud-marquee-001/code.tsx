"use client";

export function LogoCloudMarquee001() {
  const companies = [
    "ALPINE",
    "HORIZON",
    "NEXUS",
    "QUANTUM",
    "STELLAR",
    "VERTEX",
    "ZENITH",
    "AURORA",
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-12 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by Industry Leaders
          </span>
        </div>

        {/* マーキーコンテナ */}
        <div className="relative">
          {/* グラデーションオーバーレイ */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          {/* マーキー */}
          <div className="flex animate-marquee gap-16">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex min-w-[180px] items-center justify-center"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 transition-colors hover:text-foreground">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 装飾的な区切り線 */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="h-1 w-1 rounded-full bg-foreground/20" />
          <div className="h-1 w-1 rounded-full bg-foreground/20" />
          <div className="h-1 w-1 rounded-full bg-foreground/20" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
