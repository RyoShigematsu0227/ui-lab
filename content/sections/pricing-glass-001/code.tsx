export function PricingGlass001() {
  const plans = [
    {
      name: "STARTER",
      price: "$9",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "PRO",
      price: "$29",
      description: "Best for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom domains",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      price: "$99",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "SSO & SAML",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  // コーナードット装飾コンポーネント
  const CornerDots = ({ highlight = false }: { highlight?: boolean }) => {
    const dotColor = highlight ? "bg-white/60" : "bg-white/20";
    return (
      <>
        <div className={`absolute top-4 left-4 h-1 w-1 rounded-full ${dotColor}`} />
        <div className={`absolute top-4 right-4 h-1 w-1 rounded-full ${dotColor}`} />
        <div className={`absolute bottom-4 left-4 h-1 w-1 rounded-full ${dotColor}`} />
        <div className={`absolute bottom-4 right-4 h-1 w-1 rounded-full ${dotColor}`} />
      </>
    );
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      {/* 背景グラデーション - subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Choose Your Plan
          </p>
          <h2 className="mb-4 text-3xl font-light tracking-wide text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-base tracking-wide text-white/50">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        {/* 料金カード */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm p-8 backdrop-blur-sm ${
                plan.popular
                  ? "border border-white/20 bg-white/[0.08]"
                  : "border border-white/10 bg-white/[0.03]"
              }`}
            >
              <CornerDots highlight={plan.popular} />

              {/* 人気バッジ */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-sm bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.15em] text-zinc-950">
                    Most Popular
                  </span>
                </div>
              )}

              {/* プラン名 */}
              <h3 className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                {plan.name}
              </h3>

              {/* 価格 */}
              <div className="mb-4">
                <span className="text-4xl font-light tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="text-white/40">/month</span>
              </div>

              {/* 説明 */}
              <p className="mb-6 text-sm tracking-wide text-white/40">{plan.description}</p>

              {/* Divider */}
              <div className="mb-6 h-px bg-white/10" />

              {/* 機能リスト */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm tracking-wide text-white/60"
                  >
                    <svg
                      className="h-4 w-4 text-white/40"
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

              {/* CTA ボタン */}
              <button
                className={`w-full rounded-sm py-3 text-sm font-medium uppercase tracking-[0.15em] transition-all ${
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
