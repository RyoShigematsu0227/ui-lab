"use client";

import { useState } from "react";

export function ContactSplit001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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

  const contactInfo = [
    {
      label: "メール",
      value: "hello@example.com",
    },
    {
      label: "電話",
      value: "+81 3-0000-0000",
    },
    {
      label: "所在地",
      value: "東京都渋谷区",
    },
  ];

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
            <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
              プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。通常2営業日以内にご返信いたします。
            </p>

            <div className="mt-12 h-px bg-border/40" />

            {/* 連絡先情報 */}
            <div className="mt-12 space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                    {info.label}
                  </p>
                  <p className="mt-2 text-sm font-light tracking-wide text-foreground">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* 営業時間 */}
            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                営業時間
              </p>
              <p className="mt-2 text-sm font-light tracking-wide text-foreground">
                月〜金 9:00 - 18:00
              </p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground/60">
                土日祝日を除く
              </p>
            </div>
          </div>

          {/* 右カラム: フォーム */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="contact-split-name"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="contact-split-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-split-email"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="contact-split-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-split-subject"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  件名
                </label>
                <input
                  type="text"
                  id="contact-split-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="プロジェクトのご相談"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-split-message"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メッセージ
                </label>
                <textarea
                  id="contact-split-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="ご要件をお聞かせください..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-muted-foreground"
                >
                  送信する
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
          </div>
        </div>
      </div>
    </section>
  );
}
