export function ContactElegant001() {
  const contactMethods = [
    {
      label: "Email",
      value: "hello@example.com",
      description: "お気軽にメールでお問い合わせください",
    },
    {
      label: "Phone",
      value: "+81 3-1234-5678",
      description: "平日 10:00 - 18:00 対応",
    },
    {
      label: "Address",
      value: "東京都渋谷区神宮前 1-2-3",
      description: "最寄り駅: 原宿駅 徒歩5分",
    },
  ];

  return (
    <section className="bg-background py-28">
      {/* コーナードット */}
      <div className="absolute left-8 top-8 hidden h-1 w-1 rounded-full bg-foreground/20 sm:block" />
      <div className="absolute right-8 top-8 hidden h-1 w-1 rounded-full bg-foreground/20 sm:block" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お問い合わせ
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            プロジェクトのご相談やお見積もりなど、お気軽にご連絡ください。
            3営業日以内にご返信いたします。
          </p>
        </div>

        <div className="h-px bg-border/40" />

        {/* メインコンテンツ: 2カラム */}
        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* 左: フォーム */}
          <div className="lg:col-span-3">
            <form className="space-y-8">
              {/* 名前（2カラム） */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    姓
                  </label>
                  <div className="border-b border-border pb-2 transition-colors focus-within:border-foreground/40">
                    <input
                      type="text"
                      placeholder="山田"
                      className="w-full bg-transparent text-sm font-light tracking-wide text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    名
                  </label>
                  <div className="border-b border-border pb-2 transition-colors focus-within:border-foreground/40">
                    <input
                      type="text"
                      placeholder="太郎"
                      className="w-full bg-transparent text-sm font-light tracking-wide text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* メール */}
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  メールアドレス
                </label>
                <div className="border-b border-border pb-2 transition-colors focus-within:border-foreground/40">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-sm font-light tracking-wide text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* 件名 */}
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  件名
                </label>
                <div className="border-b border-border pb-2 transition-colors focus-within:border-foreground/40">
                  <input
                    type="text"
                    placeholder="プロジェクトのご相談"
                    className="w-full bg-transparent text-sm font-light tracking-wide text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* メッセージ */}
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  メッセージ
                </label>
                <div className="border-b border-border pb-2 transition-colors focus-within:border-foreground/40">
                  <textarea
                    rows={4}
                    placeholder="お問い合わせ内容をご記入ください"
                    className="w-full resize-none bg-transparent text-sm font-light leading-relaxed tracking-wide text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                  />
                </div>
              </div>

              {/* 送信ボタン */}
              <div className="pt-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  送信する
                  <svg
                    className="h-3 w-3"
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

          {/* 右: 連絡先情報 */}
          <div className="lg:col-span-2">
            <div className="space-y-0 divide-y divide-border">
              {contactMethods.map((method, i) => (
                <div key={i} className="py-6 first:pt-0">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {method.label}
                  </p>
                  <p className="mt-2 text-sm font-medium tracking-wide text-foreground">
                    {method.value}
                  </p>
                  <p className="mt-1 text-xs font-light tracking-wide text-muted-foreground/60">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ソーシャルリンク */}
            <div className="mt-10 border-t border-border pt-6">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Follow
              </p>
              <div className="flex gap-6">
                {["X", "Instagram", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs font-light tracking-wide text-muted-foreground/60 transition-colors hover:text-foreground"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
