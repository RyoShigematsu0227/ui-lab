"use client";

import { useState } from "react";

export function NewsletterBanner001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative border border-border/40 px-6 py-14 sm:px-12 sm:py-16">
          {/* コーナードット */}
          <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
          <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
          <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />
          <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-muted-foreground/20" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* 左: テキスト */}
            <div>
              <div className="flex items-center gap-3">
                <svg
                  className="h-4 w-4 text-foreground/30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Newsletter
                </p>
              </div>
              <h2 className="mt-4 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                最新のデザイントレンドを
                <br className="hidden sm:block" />
                毎週お届けします
              </h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                UI/UXの最新動向、実践的なTips、厳選されたリソースを無料で配信。
              </p>
            </div>

            {/* 右: フォーム */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレス"
                    required
                    className="flex-1 border border-border/40 bg-transparent px-4 py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 border border-foreground/80 bg-foreground/5 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
                  >
                    購読
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
                </div>
              </form>

              {/* 補足情報 */}
              <div className="mt-5 flex items-center gap-4">
                <div className="h-1 w-1 rounded-full bg-foreground/20" />
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                  2,000人以上が購読中
                </p>
                <div className="h-3 w-px bg-border/40" />
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                  いつでも解除可能
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
