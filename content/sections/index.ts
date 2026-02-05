// セクションコンポーネントのエクスポート
export { HeroGradient001 } from "./hero-gradient-001/code";
export { HeroMinimal001 } from "./hero-minimal-001/code";
export { FeatureBento001 } from "./feature-bento-001/code";
export { PricingGlass001 } from "./pricing-glass-001/code";
export { CtaGradient001 } from "./cta-gradient-001/code";
export { TestimonialCarousel001 } from "./testimonial-carousel-001/code";
export { StatsAnimated001 } from "./stats-animated-001/code";
export { FaqAccordion001 } from "./faq-accordion-001/code";
export { NavigationModern001 } from "./navigation-modern-001/code";
export { FooterModern001 } from "./footer-modern-001/code";
export { TeamGrid001 } from "./team-grid-001/code";
export { LogoCloud001 } from "./logo-cloud-001/code";
export { ContactForm001 } from "./contact-form-001/code";
export { BlogCards001 } from "./blog-cards-001/code";
export { GalleryMasonry001 } from "./gallery-masonry-001/code";
export { HeroSplit001 } from "./hero-split-001/code";
export { NewsletterSimple001 } from "./newsletter-simple-001/code";
export { FeatureList001 } from "./feature-list-001/code";
export { TestimonialGrid001 } from "./testimonial-grid-001/code";
export { PricingTable001 } from "./pricing-table-001/code";
export { CtaImage001 } from "./cta-image-001/code";
export { FooterMinimal001 } from "./footer-minimal-001/code";
export { StatsIcons001 } from "./stats-icons-001/code";
export { FaqTwoColumn001 } from "./faq-two-column-001/code";
export { FeatureAlternating001 } from "./feature-alternating-001/code";
export { HeroVideo001 } from "./hero-video-001/code";
export { CtaMinimal001 } from "./cta-minimal-001/code";
export { NavigationCentered001 } from "./navigation-centered-001/code";
export { TeamCards001 } from "./team-cards-001/code";
export { TrustBadges001 } from "./trust-badges-001/code";

// セクションコンポーネントのマップ（slugからコンポーネントを取得）
import { HeroGradient001 } from "./hero-gradient-001/code";
import { HeroMinimal001 } from "./hero-minimal-001/code";
import { FeatureBento001 } from "./feature-bento-001/code";
import { PricingGlass001 } from "./pricing-glass-001/code";
import { CtaGradient001 } from "./cta-gradient-001/code";
import { TestimonialCarousel001 } from "./testimonial-carousel-001/code";
import { StatsAnimated001 } from "./stats-animated-001/code";
import { FaqAccordion001 } from "./faq-accordion-001/code";
import { NavigationModern001 } from "./navigation-modern-001/code";
import { FooterModern001 } from "./footer-modern-001/code";
import { TeamGrid001 } from "./team-grid-001/code";
import { LogoCloud001 } from "./logo-cloud-001/code";
import { ContactForm001 } from "./contact-form-001/code";
import { BlogCards001 } from "./blog-cards-001/code";
import { GalleryMasonry001 } from "./gallery-masonry-001/code";
import { HeroSplit001 } from "./hero-split-001/code";
import { NewsletterSimple001 } from "./newsletter-simple-001/code";
import { FeatureList001 } from "./feature-list-001/code";
import { TestimonialGrid001 } from "./testimonial-grid-001/code";
import { PricingTable001 } from "./pricing-table-001/code";
import { CtaImage001 } from "./cta-image-001/code";
import { FooterMinimal001 } from "./footer-minimal-001/code";
import { StatsIcons001 } from "./stats-icons-001/code";
import { FaqTwoColumn001 } from "./faq-two-column-001/code";
import { FeatureAlternating001 } from "./feature-alternating-001/code";
import { HeroVideo001 } from "./hero-video-001/code";
import { CtaMinimal001 } from "./cta-minimal-001/code";
import { NavigationCentered001 } from "./navigation-centered-001/code";
import { TeamCards001 } from "./team-cards-001/code";
import { TrustBadges001 } from "./trust-badges-001/code";

export const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  "hero-gradient-001": HeroGradient001,
  "hero-minimal-001": HeroMinimal001,
  "feature-bento-001": FeatureBento001,
  "pricing-glass-001": PricingGlass001,
  "cta-gradient-001": CtaGradient001,
  "testimonial-carousel-001": TestimonialCarousel001,
  "stats-animated-001": StatsAnimated001,
  "faq-accordion-001": FaqAccordion001,
  "navigation-modern-001": NavigationModern001,
  "footer-modern-001": FooterModern001,
  "team-grid-001": TeamGrid001,
  "logo-cloud-001": LogoCloud001,
  "contact-form-001": ContactForm001,
  "blog-cards-001": BlogCards001,
  "gallery-masonry-001": GalleryMasonry001,
  "hero-split-001": HeroSplit001,
  "newsletter-simple-001": NewsletterSimple001,
  "feature-list-001": FeatureList001,
  "testimonial-grid-001": TestimonialGrid001,
  "pricing-table-001": PricingTable001,
  "cta-image-001": CtaImage001,
  "footer-minimal-001": FooterMinimal001,
  "stats-icons-001": StatsIcons001,
  "faq-two-column-001": FaqTwoColumn001,
  "feature-alternating-001": FeatureAlternating001,
  "hero-video-001": HeroVideo001,
  "cta-minimal-001": CtaMinimal001,
  "navigation-centered-001": NavigationCentered001,
  "team-cards-001": TeamCards001,
  "trust-badges-001": TrustBadges001,
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
  "navigation-modern-001": `"use client";

import { useState } from "react";

export function NavigationModern001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
            <span className="text-sm font-bold text-white">L</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Logo
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Log in
          </button>
          <button className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <button className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                Log in
              </button>
              <button className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}`,
  "footer-modern-001": `export function FooterModern001() {
  const footerLinks = {
    product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { label: "Twitter", href: "#", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
    { label: "GitHub", href: "#", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
    { label: "LinkedIn", href: "#", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <span className="text-sm font-bold text-white">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="text-gray-400 transition-colors hover:text-gray-500 dark:hover:text-gray-300">
                  <span className="sr-only">{social.label}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Product</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Resources</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Legal</h3>
                <ul className="mt-4 space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}`,
  "team-grid-001": `export function TeamGrid001() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      bio: "Former VP at Google. 15+ years in tech.",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Ex-Amazon principal engineer. Open source advocate.",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer. Previously at Figma.",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Built systems at scale for Netflix.",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet our team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We're a passionate group of people working together to build something amazing.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-2xl bg-gray-50 p-6 transition-all hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "logo-cloud-001": `export function LogoCloud001() {
  const logos = [
    { name: "Company 1" },
    { name: "Company 2" },
    { name: "Company 3" },
    { name: "Company 4" },
    { name: "Company 5" },
    { name: "Company 6" },
  ];

  return (
    <section className="bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Trusted by industry leaders
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100">
              <div className="h-8 w-24 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join <span className="font-semibold text-gray-900 dark:text-white">5,000+</span> companies already growing with us
          </p>
        </div>
      </div>
    </section>
  );
}`,
  "contact-form-001": `"use client";

import { useState } from "react";

export function ContactForm001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Get in touch</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind? We'd love to hear about it.
            </p>
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                  <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">hello@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                  className="mt-2 block w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-indigo-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "blog-cards-001": `export function BlogCards001() {
  const posts = [
    { title: "The Future of Web Development", excerpt: "Exploring the latest trends...", category: "Technology", date: "Jan 15, 2024", readTime: "5 min read", author: { name: "Sarah Chen" } },
    { title: "Design Systems That Scale", excerpt: "How to build and maintain design systems...", category: "Design", date: "Jan 12, 2024", readTime: "8 min read", author: { name: "Michael Rodriguez" } },
    { title: "Mastering TypeScript", excerpt: "Advanced TypeScript patterns...", category: "Engineering", date: "Jan 10, 2024", readTime: "12 min read", author: { name: "Emily Watson" } },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Articles</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Insights and stories from our team</p>
          </div>
          <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block dark:text-indigo-400">View all articles →</a>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <time>{post.date}</time><span>·</span><span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white">{post.title}</h3>
                <p className="mt-2 flex-1 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                <div className="mt-6"><span className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "gallery-masonry-001": `export function GalleryMasonry001() {
  const images = [
    { title: "Geometric Flow", category: "Abstract", span: "row-span-2" },
    { title: "Urban Lines", category: "Architecture", span: "" },
    { title: "Mountain Peak", category: "Nature", span: "" },
    { title: "Color Burst", category: "Abstract", span: "" },
    { title: "Sky Tower", category: "Architecture", span: "row-span-2" },
    { title: "Forest Mist", category: "Nature", span: "" },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Our Portfolio</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A collection of our best work</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["All", "Abstract", "Architecture", "Nature"].map((filter) => (
            <button key={filter} className={\`rounded-full px-4 py-2 text-sm font-medium transition-colors \${filter === "All" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900" : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-zinc-900 dark:text-gray-300"}\`}>{filter}</button>
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className={\`group relative overflow-hidden rounded-2xl bg-gray-200 dark:bg-zinc-800 \${image.span}\`} style={{ minHeight: image.span ? "400px" : "200px" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-medium text-indigo-300">{image.category}</span>
                <h3 className="mt-1 text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "hero-split-001": `export function HeroSplit001() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24 xl:px-24">
          <div className="mx-auto max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 dark:border-indigo-900 dark:bg-indigo-950">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">New Release v2.0</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Build products<br /><span className="text-indigo-600 dark:text-indigo-400">people love</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Create beautiful, responsive interfaces with our comprehensive design system.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg">Get Started Free →</a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 dark:border-zinc-700 dark:text-gray-300">Watch Demo</a>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />
        </div>
      </div>
    </section>
  );
}`,
  "newsletter-simple-001": `"use client";

import { useState } from "react";

export function NewsletterSimple001() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-indigo-600 dark:bg-indigo-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay in the loop</h2>
            <p className="mt-4 text-lg text-indigo-100">Get the latest updates delivered to your inbox.</p>
          </div>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-indigo-200 sm:w-72" placeholder="Enter your email" />
            <button type="submit" className="rounded-lg bg-white px-6 py-3 font-medium text-indigo-600">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}`,
  "feature-list-001": `export function FeatureList001() {
  const features = [
    { title: "Lightning Fast", description: "Built for speed with optimized performance." },
    { title: "Enterprise Security", description: "Bank-level encryption keeps your data safe." },
    { title: "Flexible Layout", description: "Customize every aspect with drag-and-drop." },
    { title: "Team Collaboration", description: "Work together with real-time features." },
    { title: "Advanced Analytics", description: "Get deep insights with customizable dashboards." },
    { title: "Easy Integrations", description: "Connect with 100+ popular tools." },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Features</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Everything you need to succeed</h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-indigo-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "testimonial-grid-001": `export function TestimonialGrid001() {
  const testimonials = [
    { content: "This platform has completely transformed how we build products.", author: "Sarah Chen", role: "CEO at TechStart", featured: true },
    { content: "The best investment we've made for our design team.", author: "Michael Rodriguez", role: "Design Lead at Creative Co", featured: false },
    { content: "Intuitive, fast, and beautiful.", author: "Emily Watson", role: "Product Manager at Scale", featured: false },
    { content: "We've cut our development time in half.", author: "David Kim", role: "CTO at Innovate Labs", featured: false },
    { content: "Outstanding support team.", author: "Lisa Park", role: "Engineering Manager at Growth Inc", featured: false },
    { content: "The attention to detail is incredible.", author: "James Wilson", role: "Founder at BuildRight", featured: false },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Loved by thousands</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className={\`rounded-2xl p-8 \${t.featured ? "bg-indigo-600 text-white" : "border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"}\`}>
              <p className={\`text-lg leading-relaxed \${t.featured ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"}\`}>"{t.content}"</p>
              <div className="mt-8">
                <p className={\`font-semibold \${t.featured ? "text-white" : "text-gray-900 dark:text-white"}\`}>{t.author}</p>
                <p className={\`text-sm \${t.featured ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}\`}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "pricing-table-001": `export function PricingTable001() {
  const plans = [
    { name: "Starter", price: "$9", period: "month", features: ["Up to 5 projects", "Basic analytics", "24/7 Support"], cta: "Start free trial", popular: false },
    { name: "Professional", price: "$29", period: "month", features: ["Unlimited projects", "Advanced analytics", "Custom domains"], cta: "Start free trial", popular: true },
    { name: "Enterprise", price: "$99", period: "month", features: ["Everything in Pro", "Dedicated support", "Advanced security"], cta: "Contact sales", popular: false },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Simple, transparent pricing</h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={\`relative rounded-2xl p-8 \${plan.popular ? "border-2 border-indigo-600 shadow-xl" : "border border-gray-200 dark:border-zinc-800"}\`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="rounded-full bg-indigo-600 px-4 py-1 text-sm font-medium text-white">Most Popular</span></div>}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <div className="mt-6"><span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span><span className="text-gray-500">/{plan.period}</span></div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{feature}</span></li>)}
              </ul>
              <button className={\`mt-8 w-full rounded-lg px-6 py-3 font-medium \${plan.popular ? "bg-indigo-600 text-white" : "border border-gray-300 text-gray-700 dark:border-zinc-700 dark:text-white"}\`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "cta-image-001": `export function CtaImage001() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">Limited Time Offer</span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Ready to transform your workflow?</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">Join thousands of teams who have already made the switch.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-gray-900">Start Free Trial →</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur">Watch Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "footer-minimal-001": `export function FooterMinimal001() {
  const links = [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 dark:bg-white">
              <span className="text-sm font-bold text-white dark:text-gray-900">L</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Logo</span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {links.map((link) => <a key={link.label} href={link.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{link.label}</a>)}
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center dark:border-zinc-800">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}`,
  "stats-icons-001": `export function StatsIcons001() {
  const stats = [
    { value: "10M+", label: "Active Users", description: "People using our platform daily" },
    { value: "150+", label: "Countries", description: "Global presence worldwide" },
    { value: "99.9%", label: "Uptime", description: "Guaranteed availability" },
    { value: "<50ms", label: "Response Time", description: "Lightning-fast performance" },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Trusted by millions</h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "faq-two-column-001": `"use client";

import { useState } from "react";

export function FaqTwoColumn001() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { question: "How do I get started?", answer: "Getting started is easy! Simply create a free account." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards and PayPal." },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade at any time." },
    { question: "Is there a free trial?", answer: "Yes! All paid plans come with a 14-day free trial." },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Support</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Frequently Asked Questions</h2>
            <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white">Contact Support →</a>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <button className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <span className={\`ml-4 transition-transform \${openIndex === index ? "rotate-180" : ""}\`}>▼</span>
                </button>
                {openIndex === index && <p className="px-6 pb-5 text-gray-600 dark:text-gray-400">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "feature-alternating-001": `export function FeatureAlternating001() {
  const features = [
    { title: "Streamlined Workflow", description: "Automate repetitive tasks and focus on what matters most.", badges: ["Automation", "AI-Powered"] },
    { title: "Real-time Collaboration", description: "Work together seamlessly with your team.", badges: ["Team", "Real-time"] },
    { title: "Powerful Analytics", description: "Get deep insights into your data with beautiful dashboards.", badges: ["Analytics", "Reports"] },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Features</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Everything you need to scale</h2>
        </div>
        <div className="mt-20 space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={\`flex flex-col items-center gap-12 lg:flex-row \${index % 2 === 1 ? "lg:flex-row-reverse" : ""}\`}>
              <div className="w-full lg:w-1/2"><div className="h-64 rounded-2xl bg-gray-200 dark:bg-zinc-800" /></div>
              <div className="w-full lg:w-1/2">
                <div className="mb-4 flex flex-wrap gap-2">
                  {feature.badges.map((badge) => <span key={badge} className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">{badge}</span>)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">{feature.title}</h3>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{feature.description}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "hero-video-001": `export function HeroVideo001() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm font-medium text-white">Now Available Worldwide</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            The future of<br /><span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">digital experiences</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Transform the way you create, collaborate, and connect.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900">Get Started Free →</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur">Watch Video</a>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "cta-minimal-001": `export function CtaMinimal001() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">Start for free</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">Ready to get started?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">Join over 10,000+ teams using our platform to build better products faster.</p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white" />
          <button type="submit" className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white">Get Started</button>
        </form>
      </div>
    </section>
  );
}`,
  "navigation-centered-001": `"use client";

import { useState } from "react";

export function NavigationCentered001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [{ label: "Products", href: "#" }, { label: "Solutions", href: "#" }, { label: "Resources", href: "#" }, { label: "Pricing", href: "#" }];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur dark:bg-zinc-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-1"><a href="#" className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600"><span className="text-lg font-bold text-white">L</span></div></a></div>
        <div className="hidden lg:flex lg:gap-x-10">{navLinks.map((link) => <a key={link.label} href={link.href} className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300">{link.label}</a>)}</div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4"><a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-300">Sign in</a><a href="#" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white">Get Started</a></div>
        <div className="lg:hidden"><button className="rounded-lg p-2 text-gray-600 dark:text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg></button></div>
      </nav>
    </header>
  );
}`,
  "team-cards-001": `export function TeamCards001() {
  const team = [
    { name: "Sarah Chen", role: "CEO & Founder", bio: "15 years in tech leadership. Previously VP at Google." },
    { name: "Michael Rodriguez", role: "CTO", bio: "Open-source advocate. Former principal engineer at Amazon." },
    { name: "Emily Watson", role: "Head of Design", bio: "Award-winning designer with a passion for accessible design." },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Leadership Team</h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900">
              <div className="aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-zinc-800" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{member.role}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
  "trust-badges-001": `export function TrustBadges001() {
  const badges = [
    { title: "SOC 2 Certified", description: "Enterprise-grade security" },
    { title: "GDPR Compliant", description: "Your data is protected" },
    { title: "99.9% Uptime", description: "Reliable & always available" },
    { title: "24/7 Support", description: "We're here to help" },
  ];

  return (
    <section className="bg-white py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{badge.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,
};
