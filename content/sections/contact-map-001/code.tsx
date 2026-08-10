"use client";

import { useState } from "react";

export function ContactMap001() {
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

  const offices = [
    { city: "東京", address: "渋谷区神南1-2-3", hours: "9:00 – 18:00" },
    { city: "大阪", address: "北区梅田4-5-6", hours: "9:00 – 18:00" },
    { city: "福岡", address: "中央区天神7-8-9", hours: "10:00 – 17:00" },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            ご相談やご質問がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-6 h-px bg-border/40" />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* 左: マップ風ビジュアル + 拠点情報 */}
          <div>
            {/* SVGマップ風装飾 */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-muted/20 p-8">
              {/* コーナードット */}
              <div className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <div className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <div className="absolute bottom-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <div className="absolute bottom-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />

              <svg
                viewBox="0 0 400 240"
                fill="none"
                className="w-full text-foreground/[0.06]"
                aria-hidden="true"
              >
                {/* グリッド線 */}
                {Array.from({ length: 9 }, (_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 30}
                    x2="400"
                    y2={i * 30}
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                ))}
                {Array.from({ length: 14 }, (_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 30}
                    y1="0"
                    x2={i * 30}
                    y2="240"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                ))}
                {/* 抽象的な島の輪郭 */}
                <path
                  d="M180 40 C200 35, 240 30, 270 50 C290 65, 310 55, 320 70 C330 85, 340 100, 330 120 C320 140, 300 150, 280 145 C260 140, 250 155, 230 160 C210 165, 190 155, 175 140 C160 125, 150 105, 155 90 C160 75, 165 50, 180 40Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/10"
                  fill="none"
                />
                {/* ロケーションピン */}
                <circle cx="220" cy="70" r="4" className="fill-foreground/20" />
                <circle cx="220" cy="70" r="1.5" className="fill-foreground/40" />
                <circle cx="270" cy="110" r="4" className="fill-foreground/20" />
                <circle cx="270" cy="110" r="1.5" className="fill-foreground/40" />
                <circle cx="300" cy="135" r="4" className="fill-foreground/20" />
                <circle cx="300" cy="135" r="1.5" className="fill-foreground/40" />
                {/* 接続線 */}
                <line
                  x1="220"
                  y1="70"
                  x2="270"
                  y2="110"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  className="text-foreground/10"
                />
                <line
                  x1="270"
                  y1="110"
                  x2="300"
                  y2="135"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  className="text-foreground/10"
                />
              </svg>
            </div>

            {/* 拠点一覧 */}
            <div className="mt-8 space-y-4">
              {offices.map((office, index) => (
                <div
                  key={office.city}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-[10px] font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-medium tracking-wide text-foreground">
                        {office.city}
                      </p>
                      <div className="h-px flex-1 bg-border/30" />
                      <p className="text-[10px] tracking-[0.15em] text-muted-foreground/60">
                        {office.hours}
                      </p>
                    </div>
                    <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* メールリンク */}
            <div className="mt-8 flex items-center gap-4 border-t border-border/40 pt-6">
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
              <span className="text-xs font-light tracking-wide text-muted-foreground">
                hello@example.com
              </span>
            </div>
          </div>

          {/* 右: フォーム */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="contact-map-name"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="contact-map-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-map-email"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="contact-map-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-map-message"
                  className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メッセージ
                </label>
                <textarea
                  id="contact-map-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  placeholder="プロジェクトの概要やご要望をお聞かせください..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-[10px] tracking-wide text-muted-foreground/50">
                  通常2営業日以内にご返信
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 border-b border-foreground py-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-muted-foreground hover:text-muted-foreground"
                >
                  送信する
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
