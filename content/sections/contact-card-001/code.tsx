"use client";

import { useState } from "react";

export function ContactCard001() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      label: "Email",
      value: "hello@example.com",
      icon: (
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "03-1234-5678",
      icon: (
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "東京都渋谷区神南1-2-3",
      icon: (
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
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact Us
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            プロジェクトのご相談やお見積りなど、お気軽にお問い合わせください。通常2営業日以内にご返信いたします。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* コンテンツ */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* 連絡先情報カード */}
          <div className="space-y-6 lg:col-span-1">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="group relative rounded-lg border border-border p-6 transition-colors duration-200 hover:border-border/80 hover:bg-muted/30"
              >
                {/* コーナードット */}
                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-foreground/15" />
                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-foreground/15" />
                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-foreground/15" />
                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-foreground/15" />

                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50 text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {info.label}
                    </p>
                    <p className="mt-1.5 text-sm font-medium tracking-wide text-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 営業時間 */}
            <div className="rounded-lg border border-border p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Business Hours
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-muted-foreground">月曜 - 金曜</span>
                  <span className="text-foreground">9:00 - 18:00</span>
                </div>
                <div className="h-px bg-border/30" />
                <div className="flex items-center justify-between text-xs tracking-wide">
                  <span className="text-muted-foreground">土曜・日曜</span>
                  <span className="text-muted-foreground/60">休業</span>
                </div>
              </div>
            </div>
          </div>

          {/* フォーム */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-card-name"
                    className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="contact-card-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-card-email"
                    className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="contact-card-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-card-subject"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  件名
                </label>
                <input
                  type="text"
                  id="contact-card-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="お問い合わせの内容"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-card-message"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メッセージ
                </label>
                <textarea
                  id="contact-card-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="プロジェクトの概要やご要望をお聞かせください..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-[10px] tracking-wide text-muted-foreground/50">
                  * すべての項目は必須です
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm border border-foreground bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-background transition-all duration-200 hover:bg-foreground/90"
                >
                  送信する
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
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
