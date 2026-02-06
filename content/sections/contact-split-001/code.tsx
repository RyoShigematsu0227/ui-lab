export function ContactSplit001() {
  return (
    <section className="relative bg-background">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* 左側: 情報エリア */}
        <div className="relative flex flex-col justify-center bg-muted/30 px-8 py-24 lg:px-16">
          {/* コーナードット装飾 */}
          <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />

          <div className="mx-auto w-full max-w-lg">
            {/* ラベル */}
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Get In Touch
            </p>

            {/* 見出し */}
            <h2 className="mb-8 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              プロジェクトについて
              <br />
              お話ししましょう
            </h2>

            {/* 説明文 */}
            <p className="mb-12 text-sm font-light leading-relaxed text-muted-foreground">
              新しいプロジェクトのご相談、パートナーシップ、
              <br />
              その他のお問い合わせをお待ちしております。
              <br />
              24時間以内に返信いたします。
            </p>

            {/* コンタクト情報 */}
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="text-base font-light tracking-wide text-foreground transition-colors hover:text-foreground/70"
                >
                  hello@example.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Phone
                </p>
                <a
                  href="tel:+81312345678"
                  className="text-base font-light tracking-wide text-foreground transition-colors hover:text-foreground/70"
                >
                  +81 (3) 1234-5678
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Office
                </p>
                <p className="text-base font-light leading-relaxed tracking-wide text-foreground">
                  東京都渋谷区
                  <br />
                  〒150-0001
                </p>
              </div>
            </div>

            {/* 装飾的な区切り線 */}
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                Follow Us
              </span>
            </div>

            {/* ソーシャルリンク */}
            <div className="mt-8 flex gap-6">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-light tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 右側: フォームエリア */}
        <div className="relative flex flex-col justify-center bg-background px-8 py-24 lg:px-16">
          {/* コーナードット装飾 */}
          <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />

          <div className="mx-auto w-full max-w-lg">
            <form className="space-y-8">
              {/* 名前 */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="h-12 w-full border-b border-border bg-transparent px-0 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              {/* メール */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="h-12 w-full border-b border-border bg-transparent px-0 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* 件名 */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="h-12 w-full border-b border-border bg-transparent px-0 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                  placeholder="プロジェクトのご相談"
                />
              </div>

              {/* メッセージ */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm leading-relaxed tracking-wide text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* 送信ボタン */}
              <button
                type="submit"
                className="h-14 w-full border border-border bg-foreground text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
