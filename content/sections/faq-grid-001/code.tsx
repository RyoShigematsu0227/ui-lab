"use client";

export function FaqGrid001() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click the Sign Up button and follow the simple registration process. You'll be up and running in under a minute.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes, we offer a generous free plan that includes all core features. Perfect for individuals and small teams getting started.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and wire transfers for enterprise customers.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "You can cancel anytime with no questions asked. Your data remains accessible until the end of your billing period.",
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer:
        "Yes, we offer 50% off for registered nonprofits and educational institutions. Contact us for verification.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use industry-standard encryption and are SOC 2 Type II certified. Your data security is our top priority.",
    },
    {
      question: "Can I invite team members?",
      answer:
        "Yes, you can invite unlimited team members on Pro and Enterprise plans. Collaborate seamlessly with your entire organization.",
    },
    {
      question: "Do you have an API?",
      answer:
        "Yes, we provide a comprehensive REST API with detailed documentation. Available on Pro plans and above.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Help Center
          </p>
          <h2 className="mb-6 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg tracking-wide text-muted-foreground">
            Find answers to common questions about our platform, pricing, and features.
          </p>
        </div>

        {/* FAQ グリッド */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border p-8 transition-colors hover:border-muted-foreground/50"
            >
              <h3 className="mb-4 text-lg font-light tracking-wide text-foreground">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* サポートバナー */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border border-border p-8 sm:flex-row">
          <div>
            <h3 className="mb-2 text-lg font-light tracking-wide text-foreground">
              Need more help?
            </h3>
            <p className="text-muted-foreground tracking-wide">
              Our support team is available 24/7 to assist you.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center border border-border px-8 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
