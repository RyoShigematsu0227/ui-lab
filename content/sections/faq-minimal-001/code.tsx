"use client";

import { useState } from "react";

export function FaqMinimal001() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in the starter plan?",
      answer:
        "The starter plan includes all essential features: 5 projects, 10GB storage, basic analytics, and email support. Perfect for individuals and small teams.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill monthly or annually (save 20% with annual billing). You can change your plan or cancel at any time with no hidden fees.",
    },
    {
      question: "Can I try before I buy?",
      answer:
        "Absolutely. Start with our free plan or take advantage of the 14-day trial on any paid plan. No credit card required.",
    },
    {
      question: "What integrations are available?",
      answer:
        "We integrate with 50+ popular tools including Slack, GitHub, Figma, Notion, and more. Custom integrations available for Enterprise.",
    },
    {
      question: "Is there a learning curve?",
      answer:
        "Our platform is designed to be intuitive. Most users are productive within minutes. We also offer documentation and video tutorials.",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16">
          <h2 className="text-2xl font-light tracking-wide text-foreground sm:text-3xl">
            FAQ
          </h2>
        </div>

        {/* FAQ リスト */}
        <div className="divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="pr-8 font-light tracking-wide text-foreground">
                  {faq.question}
                </span>
                <span className="mt-1 flex-shrink-0 text-muted-foreground">
                  {openIndex === index ? (
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
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pt-4" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
