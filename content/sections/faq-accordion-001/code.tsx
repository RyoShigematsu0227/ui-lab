"use client";

import { useState } from "react";

export function FaqAccordion001() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply sign up for a free account, and you'll have access to all our basic features. Our onboarding wizard will guide you through the setup process step by step.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through Stripe.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your paid features until the end of your current billing period.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Absolutely! We offer a 14-day free trial with full access to all Pro features. No credit card required to start your trial.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use bank-grade encryption (AES-256) for all data, and our infrastructure is SOC 2 Type II certified. We never share your data with third parties.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Support
          </p>
          <h2 className="mb-6 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-lg tracking-wide text-muted-foreground">
            Everything you need to know about the product.
          </p>
        </div>

        {/* FAQ アコーディオン */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden border border-border bg-background transition-colors hover:border-muted-foreground/50"
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
                <svg
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
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

        {/* サポートCTA */}
        <div className="mt-16 border border-border p-8 text-center">
          <p className="mb-2 text-lg font-light tracking-wide text-foreground">
            Still have questions?
          </p>
          <p className="mb-6 text-muted-foreground tracking-wide">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            support team.
          </p>
          <button className="inline-flex h-11 items-center justify-center border border-border bg-transparent px-8 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
