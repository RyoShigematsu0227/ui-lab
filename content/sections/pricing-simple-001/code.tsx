export function PricingSimple001() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Simple Pricing
          </p>
          <h2 className="text-3xl font-light tracking-wide text-white sm:text-4xl lg:text-5xl">
            One plan. Everything included.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base tracking-wide text-white/50">
            No tiers. No hidden fees. Just everything you need to get started.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="relative border border-white/10 p-10 lg:p-16">
          {/* Corner Dots */}
          <div className="absolute top-4 left-4 h-1 w-1 rounded-full bg-white/30" />
          <div className="absolute top-4 right-4 h-1 w-1 rounded-full bg-white/30" />
          <div className="absolute bottom-4 left-4 h-1 w-1 rounded-full bg-white/30" />
          <div className="absolute bottom-4 right-4 h-1 w-1 rounded-full bg-white/30" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Price */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                ALL-IN-ONE
              </p>

              <div className="mt-6">
                <span className="text-6xl font-light text-white lg:text-7xl">$29</span>
                <span className="ml-2 text-lg text-white/30">/month</span>
              </div>

              <p className="mt-4 text-sm tracking-wide text-white/40">
                Billed monthly. Cancel anytime.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-950 transition-all hover:bg-white/90">
                  Start 14-day trial
                </button>
                <button className="border border-white/15 px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white/60 transition-all hover:border-white/30 hover:text-white">
                  Book a demo
                </button>
              </div>

              <p className="mt-6 text-xs tracking-wide text-white/30">
                No credit card required for trial
              </p>
            </div>

            {/* Right Side - Features */}
            <div className="lg:border-l lg:border-white/10 lg:pl-12">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                WHAT&apos;S INCLUDED
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Unlimited projects",
                  "Unlimited team members",
                  "50GB storage",
                  "Advanced analytics",
                  "Priority support",
                  "Custom domains",
                  "API access",
                  "Integrations",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm tracking-wide text-white/60"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-white/40"
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
            </div>
          </div>
        </div>

        {/* Bottom FAQ Teaser */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-sm tracking-wide text-white/40">
            <span>Have questions?</span>
            <div className="h-px w-8 bg-white/20" />
            <a
              href="#faq"
              className="text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              Check our FAQ
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: "shield", text: "SOC2 Compliant" },
              { icon: "lock", text: "Bank-level security" },
              { icon: "clock", text: "99.9% uptime" },
              { icon: "users", text: "10K+ customers" },
            ].map((badge) => (
              <div key={badge.text} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                  {badge.icon === "shield" && (
                    <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {badge.icon === "lock" && (
                    <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {badge.icon === "clock" && (
                    <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {badge.icon === "users" && (
                    <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <span className="text-xs tracking-wide text-white/40">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
