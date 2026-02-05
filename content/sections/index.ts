// セクションコンポーネントのエクスポート
export { HeroGradient001 } from "./hero-gradient-001/code";
export { HeroMinimal001 } from "./hero-minimal-001/code";
export { FeatureBento001 } from "./feature-bento-001/code";
export { PricingGlass001 } from "./pricing-glass-001/code";
export { CtaGradient001 } from "./cta-gradient-001/code";
export { TestimonialCarousel001 } from "./testimonial-carousel-001/code";
export { StatsAnimated001 } from "./stats-animated-001/code";
export { FaqAccordion001 } from "./faq-accordion-001/code";

// セクションコンポーネントのマップ（slugからコンポーネントを取得）
import { HeroGradient001 } from "./hero-gradient-001/code";
import { HeroMinimal001 } from "./hero-minimal-001/code";
import { FeatureBento001 } from "./feature-bento-001/code";
import { PricingGlass001 } from "./pricing-glass-001/code";
import { CtaGradient001 } from "./cta-gradient-001/code";
import { TestimonialCarousel001 } from "./testimonial-carousel-001/code";
import { StatsAnimated001 } from "./stats-animated-001/code";
import { FaqAccordion001 } from "./faq-accordion-001/code";

export const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  "hero-gradient-001": HeroGradient001,
  "hero-minimal-001": HeroMinimal001,
  "feature-bento-001": FeatureBento001,
  "pricing-glass-001": PricingGlass001,
  "cta-gradient-001": CtaGradient001,
  "testimonial-carousel-001": TestimonialCarousel001,
  "stats-animated-001": StatsAnimated001,
  "faq-accordion-001": FaqAccordion001,
};

// セクションのソースコード
export const SECTION_CODES: Record<string, string> = {
  "hero-gradient-001": `export function HeroGradient001() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-500/30" />

      {/* コンテンツ */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Build faster with
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">
            modern UI
          </span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-white/60 sm:text-xl">
          Create stunning websites in minutes with our collection of beautifully
          designed, production-ready components.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 font-medium text-white">
            Get Started
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
}`,
  "hero-minimal-001": `export function HeroMinimal001() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Simplicity is the ultimate sophistication
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Less is more. Focus on what matters most with our minimal design approach.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="h-12 rounded-md bg-zinc-900 px-8 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
              Start Building
            </button>
            <button className="h-12 rounded-md border border-zinc-200 px-8 font-medium dark:border-zinc-800">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "feature-bento-001": `export function FeatureBento001() {
  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-bold">Everything you need</h2>
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* 大きなカード */}
          <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-8 text-white md:row-span-2">
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-white/80">Optimized for performance.</p>
          </div>
          {/* 小さなカード */}
          <div className="rounded-2xl border bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Customizable</h3>
          </div>
          <div className="rounded-2xl border bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold">Responsive</h3>
          </div>
          <div className="rounded-2xl bg-zinc-900 p-6 text-white md:col-span-2">
            <h3 className="font-semibold">Enterprise Security</h3>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "pricing-glass-001": `export function PricingGlass001() {
  const plans = [
    { name: "Starter", price: "$9", popular: false },
    { name: "Pro", price: "$29", popular: true },
    { name: "Enterprise", price: "$99", popular: false },
  ];

  return (
    <section className="bg-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">
          Simple, transparent pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="text-4xl font-bold text-white">{plan.price}<span className="text-zinc-400">/mo</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "cta-gradient-001": `export function CtaGradient001() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-12 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Join thousands of developers building amazing products.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="h-12 rounded-full bg-white px-8 font-semibold text-violet-600">
              Start Free Trial
            </button>
            <button className="h-12 rounded-full border-2 border-white/30 px-8 font-semibold text-white">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "testimonial-carousel-001": `export function TestimonialCarousel001() {
  const testimonials = [
    { content: "This product has transformed our workflow.", author: "Sarah Chen", role: "CEO" },
    { content: "Nothing comes close to this.", author: "Michael Rodriguez", role: "Designer" },
    { content: "Outstanding support.", author: "Emily Watson", role: "Engineer" },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-bold">Loved by developers</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">{t.content}</p>
              <p className="font-medium">{t.author}</p>
              <p className="text-sm text-zinc-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "stats-animated-001": `export function StatsAnimated001() {
  const stats = [
    { value: "10M+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">Trusted by millions</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "faq-accordion-001": `"use client";
import { useState } from "react";

export function FaqAccordion001() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { question: "How do I get started?", answer: "Sign up for a free account..." },
    { question: "What payment methods?", answer: "We accept all major credit cards..." },
    { question: "Can I cancel anytime?", answer: "Yes, cancel anytime..." },
  ];

  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border bg-white dark:border-zinc-800 dark:bg-zinc-900">
              <button className="flex w-full justify-between px-6 py-4" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <p className="px-6 pb-4 text-zinc-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
};
