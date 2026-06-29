"use client";

import { useState } from "react";

const tabs = [
  { id: "form", label: "フォーム" },
  { id: "office", label: "オフィス" },
  { id: "social", label: "ソーシャル" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ContactTabbed001() {
  const [activeTab, setActiveTab] = useState<TabId>("form");
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

  return (
    <section className="border-t border-border bg-background py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            ご質問やご相談がございましたら、お気軽にご連絡ください。
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border/60 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-1.5 text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {/* Form Tab */}
          {activeTab === "form" && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-tabbed-name"
                    className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="contact-tabbed-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-tabbed-email"
                    className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="contact-tabbed-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-tabbed-message"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メッセージ
                </label>
                <textarea
                  id="contact-tabbed-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="ご要件をお聞かせください..."
                />
              </div>
              <div className="pt-2">
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
          )}

          {/* Office Tab */}
          {activeTab === "office" && (
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              {[
                {
                  city: "東京",
                  address: "東京都渋谷区神宮前 3-21-5",
                  phone: "+81 3-0000-0000",
                  hours: "月〜金 9:00 - 18:00",
                },
                {
                  city: "大阪",
                  address: "大阪府大阪市北区梅田 1-12-8",
                  phone: "+81 6-0000-0000",
                  hours: "月〜金 9:00 - 18:00",
                },
              ].map((office) => (
                <div key={office.city}>
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <h3 className="text-sm font-medium tracking-wide text-foreground">
                      {office.city}
                    </h3>
                  </div>
                  <div className="ml-4 mt-5 space-y-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                        住所
                      </p>
                      <p className="mt-1.5 text-sm font-light tracking-wide text-foreground">
                        {office.address}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                        電話
                      </p>
                      <p className="mt-1.5 text-sm font-light tracking-wide text-foreground">
                        {office.phone}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                        営業時間
                      </p>
                      <p className="mt-1.5 text-sm font-light tracking-wide text-foreground">
                        {office.hours}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social Tab */}
          {activeTab === "social" && (
            <div className="space-y-6">
              {[
                {
                  platform: "X (Twitter)",
                  handle: "@example_studio",
                  description: "最新情報やデザインに関する投稿",
                },
                {
                  platform: "GitHub",
                  handle: "example-studio",
                  description: "オープンソースプロジェクト",
                },
                {
                  platform: "LinkedIn",
                  handle: "Example Studio",
                  description: "採用情報とカンパニーニュース",
                },
                {
                  platform: "Dribbble",
                  handle: "example_studio",
                  description: "デザインワークのポートフォリオ",
                },
              ].map((social, index) => (
                <div key={social.platform}>
                  {index > 0 && <div className="mb-6 h-px bg-border/40" />}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium tracking-wide text-foreground">
                        {social.platform}
                      </p>
                      <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground">
                        {social.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-light tracking-wide text-muted-foreground/60">
                      {social.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="mx-auto h-px w-12 bg-border/40" />
          <p className="mt-6 text-xs font-light tracking-wide text-muted-foreground/60">
            通常2営業日以内にご返信いたします
          </p>
        </div>
      </div>
    </section>
  );
}
