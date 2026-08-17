export function TestimonialFeatured001() {
  const featured = {
    quote:
      "導入から半年で業務効率が劇的に改善しました。チーム全体の生産性が向上し、これまで手作業で行っていたプロセスが自動化されたことで、本質的な業務に集中できるようになりました。",
    name: "田中 美咲",
    role: "プロダクトマネージャー",
    company: "Aether Technologies",
  };

  const supporting = [
    {
      quote:
        "シンプルなインターフェースと強力な機能の両立。技術チームからの評価も非常に高いです。",
      name: "佐藤 健一",
      role: "CTO",
      company: "Prism Labs",
    },
    {
      quote:
        "サポート体制が素晴らしく、導入時の不安を完全に払拭してくれました。信頼できるパートナーです。",
      name: "山田 優子",
      role: "事業部長",
      company: "Vertex Inc",
    },
    {
      quote:
        "柔軟なカスタマイズ性が決め手でした。私たちの独自のワークフローに完全に適応しています。",
      name: "鈴木 大輔",
      role: "エンジニアリングリード",
      company: "Lumina Systems",
    },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-3 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
            お客様の声
          </h2>
        </div>

        {/* フィーチャードテスティモニアル */}
        <div className="relative mt-16 border border-border px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-foreground/10" />

          <svg
            className="mx-auto h-6 w-6 text-foreground/10"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>

          <blockquote className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-foreground sm:text-lg">
            {featured.quote}
          </blockquote>

          <div className="mt-8 h-px bg-border/30" />

          <div className="mt-6 text-center">
            <p className="text-sm font-medium tracking-wide text-foreground">
              {featured.name}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              {featured.role} — {featured.company}
            </p>
          </div>
        </div>

        {/* サポーティングテスティモニアル */}
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {supporting.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between bg-background px-6 py-8"
            >
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6">
                <div className="h-px bg-border/30" />
                <div className="mt-4">
                  <p className="text-xs font-medium tracking-wide text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    {item.role}
                  </p>
                  <p className="mt-0.5 text-[10px] tracking-[0.15em] text-muted-foreground/40">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* フッターテキスト */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            導入企業 200社以上
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
            顧客満足度 98.5%
          </p>
        </div>
      </div>
    </section>
  );
}
