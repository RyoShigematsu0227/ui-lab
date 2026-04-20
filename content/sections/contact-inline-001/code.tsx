"use client";

import { useState } from "react";

export function ContactInline001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const contactMethods = [
    { label: "メール", value: "hello@example.com" },
    { label: "電話", value: "+81 3-1234-5678" },
    { label: "所在地", value: "東京都渋谷区" },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            お気軽にご連絡ください
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
            プロジェクトのご相談やお見積もりなど、どんなことでもお問い合わせください
          </p>
        </div>

        {/* 連絡先インライン表示 */}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          {contactMethods.map((method, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {method.label}
                </p>
                <p className="text-sm tracking-wide text-foreground">
                  {method.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 区切り線 */}
        <div className="mx-auto my-16 h-px w-full max-w-md bg-border/40" />

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-inline-name"
                className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                お名前
              </label>
              <input
                type="text"
                id="contact-inline-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-border/60 bg-transparent py-3 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-foreground/40 focus:outline-none"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label
                htmlFor="contact-inline-email"
                className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="contact-inline-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-border/60 bg-transparent py-3 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-foreground/40 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-inline-message"
              className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              メッセージ
            </label>
            <textarea
              id="contact-inline-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-3 block w-full resize-none border-b border-border/60 bg-transparent py-3 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-foreground/40 focus:outline-none"
              placeholder="プロジェクトの詳細をお聞かせください..."
            />
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="border border-border px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground/5"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
