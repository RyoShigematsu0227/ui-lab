"use client";

import { useState } from "react";

export function PricingToggle001() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "STARTER",
      description: "For individuals and small projects",
      monthlyPrice: 12,
      yearlyPrice: 120,
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "1GB storage",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "PROFESSIONAL",
      description: "For teams and growing businesses",
      monthlyPrice: 39,
      yearlyPrice: 390,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "API access",
        "Custom domains",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "ENTERPRISE",
      description: "For large scale deployments",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "SSO & SAML",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  // コーナードット
  const CornerDots = ({ visible = false }: { visible?: boolean }) => {
    if (!visible) return null;
    return (
      <>
        <div className="absolute top-3 left-3 h-1 w-1 rounded-full bg-foreground/40" />
        <div className="absolute top-3 right-3 h-1 w-1 rounded-full bg-foreground/40" />
        <div className="absolute bottom-3 left-3 h-1 w-1 rounded-full bg-foreground/40" />
        <div className="absolute bottom-3 right-3 h-1 w-1 rounded-full bg-foreground/40" />
      </>
    );
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base tracking-wide text-muted-foreground">
            Choose the plan that works for you
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <span
            className={`text-sm tracking-wide transition-colors ${
              !isYearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-8 w-14 rounded-full border border-border bg-muted/50 transition-colors hover:bg-muted"
            aria-label={isYearly ? "Switch to monthly billing" : "Switch to yearly billing"}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-primary transition-all ${
                isYearly ? "left-7" : "left-1"
              }`}
            />
          </button>

          <span
            className={`text-sm tracking-wide transition-colors ${
              isYearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Yearly
          </span>

          {/* Savings Badge */}
          <span className="ml-2 rounded-sm bg-muted px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Save 17%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 transition-all ${
                plan.featured
                  ? "border border-border bg-muted/50"
                  : "border border-border/50 bg-transparent"
              }`}
            >
              <CornerDots visible={plan.featured} />

              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-4 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 mb-2">
                <span className="text-5xl font-light text-foreground">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              {/* Per month equivalent for yearly */}
              {isYearly && (
                <p className="text-xs tracking-wide text-muted-foreground">
                  ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                </p>
              )}

              {/* Description */}
              <p className="mt-4 text-sm tracking-wide text-muted-foreground">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-border" />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm tracking-wide text-muted-foreground"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-foreground/40"
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
                className={`mt-8 w-full py-3 text-xs font-medium uppercase tracking-[0.15em] transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs tracking-wide text-muted-foreground">
            All prices in USD. Taxes may apply.
          </p>
        </div>
      </div>
    </section>
  );
}
