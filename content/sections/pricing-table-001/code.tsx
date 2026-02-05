export function PricingTable001() {
  const plans = [
    {
      name: "STARTER",
      description: "Perfect for getting started",
      price: "$9",
      period: "month",
      features: [
        { name: "Up to 5 projects", included: true },
        { name: "Basic analytics", included: true },
        { name: "24/7 Support", included: true },
        { name: "Custom domains", included: false },
        { name: "Advanced security", included: false },
        { name: "Dedicated support", included: false },
      ],
      cta: "Start free trial",
      popular: false,
    },
    {
      name: "PROFESSIONAL",
      description: "Best for growing teams",
      price: "$29",
      period: "month",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 Support", included: true },
        { name: "Custom domains", included: true },
        { name: "Advanced security", included: true },
        { name: "Dedicated support", included: false },
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      description: "For large organizations",
      price: "$99",
      period: "month",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 Support", included: true },
        { name: "Custom domains", included: true },
        { name: "Advanced security", included: true },
        { name: "Dedicated support", included: true },
      ],
      cta: "Contact sales",
      popular: false,
    },
  ];

  // コーナードット装飾コンポーネント
  const CornerDots = ({ highlight = false }: { highlight?: boolean }) => {
    const dotColor = highlight ? "bg-white" : "bg-white/30";
    return (
      <>
        <div className={`absolute top-3 left-3 h-1 w-1 rounded-full ${dotColor}`} />
        <div className={`absolute top-3 right-3 h-1 w-1 rounded-full ${dotColor}`} />
        <div className={`absolute bottom-3 left-3 h-1 w-1 rounded-full ${dotColor}`} />
        <div className={`absolute bottom-3 right-3 h-1 w-1 rounded-full ${dotColor}`} />
      </>
    );
  };

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            Pricing
          </p>
          <h2 className="text-3xl font-light tracking-wide text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base tracking-wide text-white/60">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm p-8 ${
                plan.popular
                  ? "border border-white/30 bg-white/5"
                  : "border border-white/10 bg-transparent"
              }`}
            >
              <CornerDots highlight={plan.popular} />

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-sm bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-950">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center">
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm tracking-wide text-white/40">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-5xl font-light tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/40">/{plan.period}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-white/20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm tracking-wide ${
                        feature.included ? "text-white/70" : "text-white/30"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`mt-8 w-full rounded-sm px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] transition-all ${
                  plan.popular
                    ? "bg-white text-zinc-950 hover:bg-white/90"
                    : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
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
