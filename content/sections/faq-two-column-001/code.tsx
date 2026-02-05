"use client";

import { useState } from "react";

export function FaqTwoColumn001() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply create a free account, and you'll have access to our starter plan immediately. No credit card required.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! All paid plans come with a 14-day free trial. You can explore all features before committing.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 email support for all plans. Pro and Enterprise plans also include priority support and dedicated account managers.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time. If you cancel, you'll still have access until the end of your billing period.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Support
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-relaxed tracking-wide text-muted-foreground">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our customer support team.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 border border-border px-8 py-3 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Contact Support
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

          {/* Right Column - FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border transition-colors hover:border-muted-foreground/50"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-light tracking-wide text-foreground">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-muted-foreground leading-relaxed tracking-wide">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
