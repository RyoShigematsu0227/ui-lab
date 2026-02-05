"use client";

export function FaqSimple001() {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with our product, contact us within 30 days for a full refund.",
    },
    {
      question: "How do I upgrade my plan?",
      answer:
        "You can upgrade your plan at any time from your account settings. The new features will be available immediately, and we'll prorate the difference.",
    },
    {
      question: "Do you offer custom enterprise plans?",
      answer:
        "Yes, we offer custom enterprise solutions tailored to your organization's needs. Contact our sales team for a personalized quote.",
    },
    {
      question: "Is technical support included?",
      answer:
        "All plans include email support. Pro and Enterprise plans include priority support with faster response times and dedicated account managers.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export all your data at any time in various formats including CSV, JSON, and PDF. Data portability is important to us.",
    },
    {
      question: "What happens when my trial ends?",
      answer:
        "When your trial ends, you'll be automatically moved to the free plan. No charges will occur unless you explicitly choose to upgrade.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            FAQ
          </p>
          <h2 className="text-3xl font-light tracking-wide text-white sm:text-4xl">
            Questions & Answers
          </h2>
        </div>

        {/* FAQ リスト */}
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-zinc-800 pb-12 last:border-b-0"
            >
              <h3 className="mb-4 text-lg font-light tracking-wide text-white">
                {faq.question}
              </h3>
              <p className="text-zinc-400 leading-relaxed tracking-wide">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-zinc-400 tracking-wide">
            Have more questions?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:text-zinc-400"
          >
            Get in touch
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
