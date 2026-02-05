export function PricingComparison001() {
  const features = [
    {
      category: "CORE FEATURES",
      items: [
        { name: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Storage", starter: "5GB", pro: "50GB", enterprise: "Unlimited" },
        { name: "Team members", starter: "3", pro: "15", enterprise: "Unlimited" },
        { name: "API calls/month", starter: "10K", pro: "100K", enterprise: "Unlimited" },
      ],
    },
    {
      category: "COLLABORATION",
      items: [
        { name: "Real-time editing", starter: false, pro: true, enterprise: true },
        { name: "Comments & mentions", starter: true, pro: true, enterprise: true },
        { name: "Version history", starter: "7 days", pro: "90 days", enterprise: "Unlimited" },
        { name: "Guest access", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: "SECURITY",
      items: [
        { name: "SSO/SAML", starter: false, pro: false, enterprise: true },
        { name: "Two-factor auth", starter: true, pro: true, enterprise: true },
        { name: "Audit logs", starter: false, pro: true, enterprise: true },
        { name: "Custom permissions", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      category: "SUPPORT",
      items: [
        { name: "Email support", starter: true, pro: true, enterprise: true },
        { name: "Priority support", starter: false, pro: true, enterprise: true },
        { name: "Dedicated manager", starter: false, pro: false, enterprise: true },
        { name: "SLA guarantee", starter: false, pro: false, enterprise: true },
      ],
    },
  ];

  const plans = [
    { name: "STARTER", price: "$15", period: "month", cta: "Get Started" },
    { name: "PRO", price: "$45", period: "month", cta: "Start Trial", featured: true },
    { name: "ENTERPRISE", price: "Custom", period: "", cta: "Contact Us" },
  ];

  // セルの値をレンダリング
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <svg className="mx-auto h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span className="text-white/20">-</span>
      );
    }
    return <span className="text-sm text-white/60">{value}</span>;
  };

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Compare Plans
          </p>
          <h2 className="text-3xl font-light tracking-wide text-white sm:text-4xl">
            Find the right plan for you
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            {/* Header Row */}
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-6 pr-4 text-left">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                    Features
                  </span>
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="relative pb-6 text-center">
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-950">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="space-y-2">
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                        {plan.name}
                      </p>
                      <div>
                        <span className="text-3xl font-light text-white">{plan.price}</span>
                        {plan.period && (
                          <span className="text-sm text-white/30">/{plan.period}</span>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature Rows */}
            <tbody>
              {features.map((section) => (
                <>
                  {/* Category Header */}
                  <tr key={section.category}>
                    <td colSpan={4} className="pt-10 pb-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
                        {section.category}
                      </span>
                    </td>
                  </tr>

                  {/* Feature Items */}
                  {section.items.map((item, idx) => (
                    <tr
                      key={item.name}
                      className={idx !== section.items.length - 1 ? "border-b border-white/5" : ""}
                    >
                      <td className="py-4 pr-4">
                        <span className="text-sm tracking-wide text-white/50">{item.name}</span>
                      </td>
                      <td className="py-4 text-center">{renderValue(item.starter)}</td>
                      <td className="py-4 text-center bg-white/[0.02]">{renderValue(item.pro)}</td>
                      <td className="py-4 text-center">{renderValue(item.enterprise)}</td>
                    </tr>
                  ))}
                </>
              ))}

              {/* CTA Row */}
              <tr className="border-t border-white/10">
                <td className="pt-8"></td>
                {plans.map((plan) => (
                  <td key={plan.name} className="pt-8 px-2 text-center">
                    <button
                      className={`w-full max-w-[160px] py-3 text-xs font-medium uppercase tracking-[0.15em] transition-all ${
                        plan.featured
                          ? "bg-white text-zinc-950 hover:bg-white/90"
                          : "border border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Corner Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div className="h-px w-16 bg-white/10" />
            <div className="h-1 w-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
