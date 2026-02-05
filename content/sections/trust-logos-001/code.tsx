export function TrustLogos001() {
  const companies = [
    { name: "Google", letter: "G" },
    { name: "Meta", letter: "M" },
    { name: "Apple", letter: "A" },
    { name: "Amazon", letter: "A" },
    { name: "Microsoft", letter: "M" },
    { name: "Netflix", letter: "N" },
  ];

  const metrics = [
    { value: "10M+", label: "Active Users" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-zinc-950 py-20 border-y border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Companies */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Trusted by teams at
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 text-zinc-500 transition-colors duration-200 hover:text-white"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
                  <span className="text-sm font-semibold">{company.letter}</span>
                </div>
                <span className="text-sm font-medium tracking-wide">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-zinc-800/50" />

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-semibold tracking-wide text-white lg:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-xs tracking-widest text-zinc-500 uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
