"use client";

import { useState } from "react";

export function NewsletterFloating001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-background py-32">
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative border border-border bg-muted/10 p-8 sm:p-12 lg:p-16">
          <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
          <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
          <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
          <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Newsletter
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
                インサイトを受け取る
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                デザイン・エンジニアリング・プロダクト開発に関する厳選された情報を、隔週でお届けします。
              </p>

              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground/60">
                    隔週配信
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground/60">
                    厳選コンテンツ
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground/30" />
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground/60">
                    いつでも解除
                  </span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="newsletter-floating-email"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="newsletter-floating-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/30 transition-colors duration-200 focus:border-foreground/40 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 border border-foreground/80 bg-foreground/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
                >
                  購読する
                  <svg
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>

              <div className="mt-4 h-px w-full bg-border/30" />

              <p className="mt-4 text-center text-[10px] tracking-[0.1em] text-muted-foreground/40">
                3,200人以上のプロフェッショナルが購読中
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
