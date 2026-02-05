export function PricingTable001() {
  const plans = [
    {
      name: "Starter",
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
      name: "Professional",
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
      name: "Enterprise",
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

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-indigo-600 shadow-xl"
                  : "border border-gray-200 dark:border-zinc-800"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-300 dark:text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`mt-8 w-full rounded-lg px-6 py-3 font-medium transition-all ${
                  plan.popular
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
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
