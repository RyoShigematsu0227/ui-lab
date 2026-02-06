"use client";

import { useState } from "react";

export function ContactSplit001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* 左カラム: 情報 */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              お問い合わせ
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
              プロジェクトのご相談やお見積もりなど、
              お気軽にお問い合わせください。通常2営業日以内にご返信いたします。
            </p>

            <div className="mt-12 h-px bg-border/40" />

            {/* 連絡先情報 */}
            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <svg
                    className="h-4 w-4 text-muted-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                    Email
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-foreground">
                    hello@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <svg
                    className="h-4 w-4 text-muted-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                    Location
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-foreground">
                    東京都渋谷区
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <svg
                    className="h-4 w-4 text-muted-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                    営業時間
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-foreground">
                    月〜金 10:00 - 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右カラム: フォーム */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="contact-split-name"
                  className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="contact-split-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-split-email"
                  className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="contact-split-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-split-company"
                  className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  会社名
                  <span className="ml-2 normal-case tracking-normal text-muted-foreground/40">
                    (任意)
                  </span>
                </label>
                <input
                  type="text"
                  id="contact-split-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-split-message"
                  className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="contact-split-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="プロジェクトの概要をお聞かせください..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-muted-foreground"
                >
                  送信する
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors duration-200 hover:bg-muted">
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
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
