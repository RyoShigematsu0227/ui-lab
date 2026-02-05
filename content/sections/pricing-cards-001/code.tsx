export function PricingCards001() {
  const plans = [
    {
      name: "BASIC",
      price: "$12",
      period: "month",
      description: "Essential features for small teams",
      features: [
        { text: "5 team members", available: true },
        { text: "10GB storage", available: true },
        { text: "Basic support", available: true },
        { text: "Analytics", available: false },
        { text: "Custom domain", available: false },
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "PROFESSIONAL",
      price: "$39",
      period: "month",
      description: "Advanced tools for growing businesses",
      features: [
        { text: "Unlimited members", available: true },
        { text: "100GB storage", available: true },
        { text: "Priority support", available: true },
        { text: "Advanced analytics", available: true },
        { text: "Custom domain", available: true },
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "BUSINESS",
      price: "$79",
      period: "month",
      description: "Complete solution for enterprises",
      features: [
        { text: "Unlimited everything", available: true },
        { text: "Unlimited storage", available: true },
        { text: "24/7 dedicated support", available: true },
        { text: "Custom analytics", available: true },
        { text: "White-label solution", available: true },
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  // コーナードット装飾
  const CornerDecorations = ({ featured = false }: { featured?: boolean }) => {
    const lineColor = featured ? "bg-foreground/40" : "bg-foreground/15";
    return (
      <>
        {/* Top left corner */}
        <div className={`absolute top-0 left-0 h-4 w-px ${lineColor}`} />
        <div className={`absolute top-0 left-0 h-px w-4 ${lineColor}`} />
        {/* Top right corner */}
        <div className={`absolute top-0 right-0 h-4 w-px ${lineColor}`} />
        <div className={`absolute top-0 right-0 h-px w-4 ${lineColor}`} />
        {/* Bottom left corner */}
        <div className={`absolute bottom-0 left-0 h-4 w-px ${lineColor}`} />
        <div className={`absolute bottom-0 left-0 h-px w-4 ${lineColor}`} />
        {/* Bottom right corner */}
        <div className={`absolute bottom-0 right-0 h-4 w-px ${lineColor}`} />
        <div className={`absolute bottom-0 right-0 h-px w-4 ${lineColor}`} />
      </>
    );
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Pricing Plans
          </p>
          <h2 className="text-3xl font-light tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-base tracking-wide text-muted-foreground">
            Flexible pricing for teams of all sizes
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 ${
                plan.featured
                  ? "bg-muted/50 lg:-my-4 lg:py-12"
                  : "bg-transparent"
              }`}
            >
              <CornerDecorations featured={plan.featured} />

              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground">
                    Recommended
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-light text-foreground">{plan.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="mt-3 text-sm tracking-wide text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Features */}
              <ul className="my-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3"
                  >
                    {feature.available ? (
                      <svg
                        className="h-4 w-4 text-foreground/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
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
                        className="h-4 w-4 text-muted-foreground/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M18 12H6"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm tracking-wide ${
                        feature.available ? "text-foreground/60" : "text-muted-foreground/50"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground/70 hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-wide text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
