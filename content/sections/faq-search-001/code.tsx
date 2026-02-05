"use client";

import { useState, useMemo } from "react";

// FAQデータの型定義
type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

// FAQデータ（コンポーネント外に配置して参照の安定性を確保）
const FAQ_DATA: FaqItem[] = [
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page. Enter your email address and we'll send you a secure link to reset your password within minutes.",
    category: "Account",
  },
  {
    question: "Can I change my email address?",
    answer:
      "Yes, you can update your email address in Account Settings. You'll need to verify the new email before the change takes effect.",
    category: "Account",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, and bank transfers. Enterprise customers can also pay via invoice.",
    category: "Billing",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Navigate to Settings > Subscription > Cancel. Your access continues until the end of the current billing period. You can reactivate anytime.",
    category: "Billing",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all paid plans include a 14-day free trial with full feature access. No credit card required to start.",
    category: "Billing",
  },
  {
    question: "How do I invite team members?",
    answer:
      "Go to Team Settings and click 'Invite Members'. Enter their email addresses and select their role. They'll receive an invitation to join.",
    category: "Teams",
  },
  {
    question: "What are the different user roles?",
    answer:
      "We offer Admin, Editor, and Viewer roles. Admins have full access, Editors can create and modify content, and Viewers have read-only access.",
    category: "Teams",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use AES-256 encryption, are SOC 2 Type II certified, and perform regular security audits. Your data is backed up daily across multiple regions.",
    category: "Security",
  },
  {
    question: "Do you have an API?",
    answer:
      "Yes, we offer a comprehensive REST API with detailed documentation. API access is included in Pro and Enterprise plans.",
    category: "Features",
  },
  {
    question: "Can I export my data?",
    answer:
      "Absolutely. Export your data anytime in CSV, JSON, or PDF format from Settings > Data Export. We believe in data portability.",
    category: "Features",
  },
];

export function FaqSearch001() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQ_DATA;
    const query = searchQuery.toLowerCase();
    return FAQ_DATA.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const categories = useMemo(() => {
    const cats = new Set(filteredFaqs.map((faq) => faq.category));
    return Array.from(cats);
  }, [filteredFaqs]);

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Help Center
          </p>
          <h2 className="mb-6 text-3xl font-light tracking-wide text-white sm:text-4xl">
            How can we help you?
          </h2>
        </div>

        {/* 検索フィールド */}
        <div className="relative mb-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <svg
              className="h-5 w-5 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-zinc-800 bg-transparent py-4 pl-14 pr-5 text-white placeholder-zinc-500 tracking-wide transition-colors focus:border-zinc-600 focus:outline-none"
          />
        </div>

        {/* 検索結果カウント */}
        {searchQuery && (
          <p className="mb-8 text-sm tracking-wide text-zinc-500">
            {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""}{" "}
            found
          </p>
        )}

        {/* FAQ リスト（カテゴリ別） */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {category}
                </h3>
                <div className="space-y-3">
                  {filteredFaqs
                    .filter((faq) => faq.category === category)
                    .map((faq, index) => {
                      const globalIndex = FAQ_DATA.indexOf(faq);
                      return (
                        <div
                          key={index}
                          className="border border-zinc-800 transition-colors hover:border-zinc-700"
                        >
                          <button
                            className="flex w-full items-center justify-between px-6 py-5 text-left"
                            onClick={() =>
                              setOpenIndex(
                                openIndex === globalIndex ? null : globalIndex
                              )
                            }
                          >
                            <span className="font-light tracking-wide text-white">
                              {faq.question}
                            </span>
                            <svg
                              className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 ${
                                openIndex === globalIndex ? "rotate-180" : ""
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
                              openIndex === globalIndex ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            <p className="px-6 pb-5 text-zinc-400 leading-relaxed tracking-wide">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-400 tracking-wide">
              No results found for &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:text-zinc-400"
            >
              Clear search
            </button>
          </div>
        )}

        {/* サポートCTA */}
        <div className="mt-16 border-t border-zinc-800 pt-16 text-center">
          <p className="mb-2 text-lg font-light tracking-wide text-white">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <p className="mb-6 text-zinc-400 tracking-wide">
            Our support team is here to help.
          </p>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center border border-zinc-700 px-8 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:border-white hover:bg-white hover:text-zinc-950"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
