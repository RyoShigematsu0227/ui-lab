"use client";

import { useState } from "react";

export function ContactGrid001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactCards = [
    {
      label: "General",
      title: "一般的なお問い合わせ",
      description: "製品やサービスに関するご質問はこちら",
      email: "info@example.com",
    },
    {
      label: "Sales",
      title: "お見積もり・ご契約",
      description: "料金プランやご契約に関するご相談",
      email: "sales@example.com",
    },
    {
      label: "Support",
      title: "テクニカルサポート",
      description: "技術的な問題やトラブルの対応",
      email: "support@example.com",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact Us
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お問い合わせ
          </h2>
          <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            ご要件に合わせた窓口をお選びください。担当者が迅速にご対応いたします。
          </p>
        </div>

        <div className="mt-8 h-px bg-border/40" />

        {/* コンタクトカードグリッド */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="group relative rounded-lg border border-border bg-muted/30 p-6 transition-colors duration-300 hover:bg-muted/60"
            >
              {/* コーナードット */}
              <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                {card.label}
              </p>
              <h3 className="mt-3 text-sm font-medium tracking-wide text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-xs font-light leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-4 h-px bg-border/40" />
              <p className="mt-4 text-xs font-light tracking-wide text-foreground/80">
                {card.email}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px bg-border/40" />

        {/* フォーム */}
        <div className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Send a Message
              </p>
              <h3 className="mt-3 text-lg font-medium tracking-wide text-foreground">
                メッセージを送る
              </h3>
            </div>
            <p className="text-xs font-light tracking-wide text-muted-foreground/60">
              通常2営業日以内にご返信いたします
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="contact-grid-name"
                className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                お名前
              </label>
              <input
                type="text"
                id="contact-grid-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                placeholder="山田太郎"
              />
            </div>

            <div>
              <label
                htmlFor="contact-grid-email"
                className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="contact-grid-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contact-grid-type"
                className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                お問い合わせ種別
              </label>
              <select
                id="contact-grid-type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-3 block w-full appearance-none border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground transition-colors duration-200 focus:border-foreground focus:outline-none"
              >
                <option value="" className="bg-background">
                  選択してください
                </option>
                <option value="general" className="bg-background">
                  一般的なお問い合わせ
                </option>
                <option value="sales" className="bg-background">
                  お見積もり・ご契約
                </option>
                <option value="support" className="bg-background">
                  テクニカルサポート
                </option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contact-grid-message"
                className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              >
                メッセージ
              </label>
              <textarea
                id="contact-grid-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                placeholder="ご要件をお聞かせください..."
              />
            </div>

            <div className="sm:col-span-2 pt-2">
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
    </section>
  );
}
