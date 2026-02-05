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
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to know about the product.
          </p>
        </div>

        {/* FAQ アコーディオン */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-zinc-600 dark:text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* サポートCTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8 text-center dark:from-violet-500/20 dark:to-cyan-500/20">
          <p className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Still have questions?
          </p>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            support team.
          </p>
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-6 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
