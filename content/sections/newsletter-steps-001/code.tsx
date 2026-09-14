"use client";

import { useState } from "react";

export function NewsletterSteps001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const steps = [
    {
      number: "01",
      title: "メールアドレスを登録",
      description: "お持ちのメールアドレスを入力するだけ。",
    },
    {
      number: "02",
      title: "毎週レターが届く",
      description: "厳選されたデザイン知見を毎週お届け。",
    },
    {
      number: "03",
      title: "実務に活かす",
      description: "最新トレンドをプロジェクトに反映。",
    },
  ];

  return (
    <section className="bg-background py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="h-px w-12 bg-border/40" />
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Newsletter
        </p>

        <h2 className="mt-4 text-3xl font-medium leading-snug tracking-wide text-foreground sm:text-4xl">
          3ステップで、
          <br />
          情報をキャッチアップ。
        </h2>

        <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
          デザインとテクノロジーの最前線を、週に一度のレターでお届けします。
          登録は30秒で完了します。
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 pb-10">
                {index < steps.length - 1 && (
                  <div className="absolute left-[11px] top-8 h-full w-px bg-border/40" />
                )}

                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    Step {step.number}
                  </span>
                  <h3 className="mt-1.5 text-sm font-medium tracking-wide text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-lg border border-border p-8">
            <div className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
            <div className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
            <div className="absolute bottom-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
            <div className="absolute bottom-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />

            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Subscribe
            </p>

            <p className="mt-4 text-xs font-light leading-relaxed text-muted-foreground">
              週1回、デザインとエンジニアリングの
              交差点をお届けします。
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="newsletter-steps-email" className="sr-only">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="newsletter-steps-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="メールアドレスを入力"
                  required
                  className="block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-sm border border-foreground bg-foreground py-3 text-xs font-medium uppercase tracking-[0.15em] text-background transition-all duration-200 hover:bg-foreground/90"
              >
                無料で購読する
              </button>
            </form>

            <div className="mt-6 h-px bg-border/30" />

            <div className="mt-5 flex items-center justify-between text-[10px] tracking-[0.1em] text-muted-foreground/50">
              <span>いつでも解除可能</span>
              <span>3,200+ が購読中</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
