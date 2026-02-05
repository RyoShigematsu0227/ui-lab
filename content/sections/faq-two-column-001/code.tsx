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
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
              Support
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our customer support team.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-700"
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
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex-shrink-0 rounded-full bg-gray-100 p-1 transition-transform dark:bg-zinc-800 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
