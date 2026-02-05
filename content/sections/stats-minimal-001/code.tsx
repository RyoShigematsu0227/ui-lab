// コーナードット装飾コンポーネント
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-zinc-600" />
    </div>
  );
}

export function StatsMinimal001() {
  const stats = [
    { value: "50K+", label: "Downloads" },
    { value: "4.9", label: "Rating" },
    { value: "99%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative bg-zinc-950 py-16">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 md:gap-x-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-light tracking-wider text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
