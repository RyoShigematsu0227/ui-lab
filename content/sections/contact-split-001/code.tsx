"use client";

export function ContactSplit001() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* 左側：情報エリア */}
        <div className="flex flex-col justify-center border-r border-border px-8 py-24 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-lg">
            {/* ラベル */}
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Get in Touch
            </span>

            {/* 見出し */}
            <h2 className="mt-6 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              お気軽にご連絡ください
            </h2>

            {/* 説明文 */}
            <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
              プロジェクトのご相談、お見積もり、その他ご質問など、どんなことでもお気軽にお問い合わせください。
            </p>

            {/* コンタクト情報 */}
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-1 w-1 rounded-full bg-foreground/40" />
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </div>
                  <div className="mt-2 text-sm font-light text-foreground">
                    hello@example.com
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-1 w-1 rounded-full bg-foreground/40" />
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Phone
                  </div>
                  <div className="mt-2 text-sm font-light text-foreground">
                    03-1234-5678
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-1 w-1 rounded-full bg-foreground/40" />
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Office
                  </div>
                  <div className="mt-2 text-sm font-light leading-relaxed text-foreground">
                    東京都渋谷区渋谷 1-2-3
                    <br />
                    渋谷ビル 5F
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：フォームエリア */}
        <div className="flex flex-col justify-center bg-muted/20 px-8 py-24 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-lg">
            <form className="space-y-6">
              {/* 名前 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                  placeholder="山田太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              {/* メッセージ */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* 送信ボタン */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center border border-border bg-foreground px-8 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
