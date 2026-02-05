export function PricingMinimal001() {
  const plans = [
    {
      name: "FREE",
      price: "$0",
      period: "forever",
      description: "For individuals exploring the platform",
      features: ["1 project", "Basic features", "Community support"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "PRO",
      price: "$19",
      period: "month",
      description: "For professionals who need more power",
      features: [
        "Unlimited projects",
        "Advanced features",
        "Priority support",
        "API access",
      ],
      cta: "Start Trial",
      highlight: true,
    },
    {
      name: "TEAM",
      price: "$49",
      period: "month",
      description: "For teams working together",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin controls",
        "Custom branding",
      ],
      cta: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-light tracking-wide text-white sm:text-5xl">
            Pricing
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-white/20" />
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-10 ${
                plan.highlight ? "bg-white/[0.06]" : "bg-zinc-950"
              }`}
            >
              {/* Corner Dots */}
              <div className="absolute top-3 left-3 h-0.5 w-0.5 rounded-full bg-white/30" />
              <div className="absolute top-3 right-3 h-0.5 w-0.5 rounded-full bg-white/30" />

              {/* Plan Name */}
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-light text-white">{plan.price}</span>
                <span className="ml-1 text-sm text-white/30">/{plan.period}</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed tracking-wide text-white/40">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm tracking-wide text-white/60"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-white/40" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-10 w-full py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all ${
                  plan.highlight
                    ? "bg-white text-zinc-950 hover:bg-white/90"
                    : "border border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
