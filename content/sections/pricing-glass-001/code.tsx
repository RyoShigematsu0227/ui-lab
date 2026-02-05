export function PricingGlass001() {
  const plans = [
    {
      name: "Starter",
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
      name: "Pro",
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
      name: "Enterprise",
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

  return (
    <section className="relative overflow-hidden bg-zinc-900 py-24">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        {/* 料金カード */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 backdrop-blur-sm ${
                plan.popular
                  ? "border-violet-500/50 bg-white/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {/* 人気バッジ */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* プラン名 */}
              <h3 className="mb-2 text-xl font-semibold text-white">
                {plan.name}
              </h3>

              {/* 価格 */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-400">/month</span>
              </div>

              {/* 説明 */}
              <p className="mb-6 text-sm text-zinc-400">{plan.description}</p>

              {/* 機能リスト */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <svg
                      className="h-4 w-4 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA ボタン */}
              <button
                className={`w-full rounded-lg py-3 font-medium transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90"
                    : "border border-white/20 text-white hover:bg-white/10"
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
