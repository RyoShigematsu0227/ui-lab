export function PricingEnterprise001() {
  const tiers = [
    {
      name: "TEAM",
      description: "For small to medium teams getting started",
      price: "$49",
      period: "user/month",
      minUsers: "5 users minimum",
      features: [
        "Unlimited projects",
        "Advanced collaboration",
        "Priority email support",
        "99.9% uptime SLA",
        "Basic analytics",
        "Standard integrations",
      ],
      cta: "Start 14-day trial",
    },
    {
      name: "ENTERPRISE",
      description: "For organizations with advanced needs",
      price: "Custom",
      period: "",
      minUsers: "Contact for pricing",
      features: [
        "Everything in Team",
        "Dedicated success manager",
        "Custom onboarding",
        "99.99% uptime SLA",
        "Advanced security & compliance",
        "Custom integrations & API",
        "SSO/SAML authentication",
        "Audit logs & admin controls",
      ],
      cta: "Contact sales",
      featured: true,
    },
  ];

  const stats = [
    { value: "500+", label: "Enterprise clients" },
    { value: "99.99%", label: "Uptime guaranteed" },
    { value: "24/7", label: "Support available" },
    { value: "SOC2", label: "Certified" },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Enterprise Solutions
          </p>
          <h2 className="text-3xl font-light tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            Scale with confidence
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base tracking-wide text-muted-foreground">
            Flexible solutions designed for growing teams and enterprise organizations
          </p>
        </div>

        {/* Trust Stats */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-light text-foreground sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-10 ${
                tier.featured
                  ? "border border-border bg-muted/30"
                  : "border border-border/50"
              }`}
            >
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 h-6 w-px bg-foreground/20" />
              <div className="absolute top-0 left-0 h-px w-6 bg-foreground/20" />
              <div className="absolute top-0 right-0 h-6 w-px bg-foreground/20" />
              <div className="absolute top-0 right-0 h-px w-6 bg-foreground/20" />
              <div className="absolute bottom-0 left-0 h-6 w-px bg-foreground/20" />
              <div className="absolute bottom-0 left-0 h-px w-6 bg-foreground/20" />
              <div className="absolute bottom-0 right-0 h-6 w-px bg-foreground/20" />
              <div className="absolute bottom-0 right-0 h-px w-6 bg-foreground/20" />

              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-primary px-4 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground">
                    Most Flexible
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="mb-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm tracking-wide text-muted-foreground">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-light text-foreground sm:text-5xl">{tier.price}</span>
                {tier.period && (
                  <span className="ml-2 text-sm text-muted-foreground">/{tier.period}</span>
                )}
              </div>
              <p className="text-xs tracking-wide text-muted-foreground">{tier.minUsers}</p>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Features */}
              <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm tracking-wide text-muted-foreground"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/40"
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
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 text-xs font-medium uppercase tracking-[0.15em] transition-all ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-border p-8 text-center lg:p-12">
          <div className="mx-auto max-w-xl">
            <h3 className="text-xl font-light tracking-wide text-foreground">
              Not sure which plan is right for you?
            </h3>
            <p className="mt-3 text-sm tracking-wide text-muted-foreground">
              Our team can help you find the perfect solution for your organization&apos;s needs.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground sm:w-auto">
                Schedule a demo
              </button>
              <button className="w-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90 sm:w-auto">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
