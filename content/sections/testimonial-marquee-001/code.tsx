const testimonials = [
  {
    content:
      "導入から3ヶ月で開発サイクルが40%短縮されました。チーム全体の生産性が目に見えて向上しています。",
    author: "田中 美咲",
    role: "CTO",
    company: "Apex Technologies",
  },
  {
    content:
      "直感的なインターフェースと堅牢なAPI。私たちが求めていたものがすべて揃っていました。",
    author: "鈴木 健太",
    role: "Lead Engineer",
    company: "Nova Digital",
  },
  {
    content:
      "サポートチームの対応が素晴らしい。技術的な質問にも的確に答えてくれます。",
    author: "山田 優子",
    role: "Product Manager",
    company: "Bloom Studio",
  },
  {
    content:
      "スケーラビリティに優れ、急成長するサービスにも安心して使えるプラットフォームです。",
    author: "佐藤 亮",
    role: "Founder",
    company: "Drift Labs",
  },
  {
    content:
      "デザインシステムとの統合が非常にスムーズ。開発者体験を最優先に考えられた設計です。",
    author: "伊藤 真理",
    role: "Design Director",
    company: "Echo Creative",
  },
  {
    content:
      "コスト効率と信頼性のバランスが絶妙。他のソリューションに戻ることは考えられません。",
    author: "高橋 翔",
    role: "VP of Engineering",
    company: "Forge Systems",
  },
];

function TestimonialCard({
  content,
  author,
  role,
  company,
}: {
  content: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <div className="relative flex w-[340px] shrink-0 flex-col justify-between border border-border/40 px-8 py-8 sm:w-[400px]">
      <div className="absolute left-3 top-3 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-foreground/20" />

      <p className="text-sm font-light leading-relaxed text-foreground/80">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-8">
        <div className="h-px w-8 bg-border/60" />
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
            {author.charAt(0)}
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-foreground">
              {author}
            </p>
            <p className="mt-0.5 text-[10px] tracking-[0.15em] text-muted-foreground">
              {role} — {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialMarquee001() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お客様の声
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            多くのチームに信頼され、日々のワークフローを支えています。
          </p>
        </div>
      </div>

      {/* マーキースクロール */}
      <div className="overflow-hidden">
        {/* 上段：左へスクロール */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <div className="flex animate-[testimonial-scroll_45s_linear_infinite] gap-6 py-3">
            {testimonials.map((t) => (
              <TestimonialCard key={`a-${t.author}`} {...t} />
            ))}
            {testimonials.map((t) => (
              <TestimonialCard key={`b-${t.author}`} {...t} />
            ))}
          </div>
        </div>

        {/* 区切り */}
        <div className="mx-auto h-px max-w-5xl bg-border/20" />

        {/* 下段：右へスクロール */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <div className="flex animate-[testimonial-scroll-reverse_50s_linear_infinite] gap-6 py-3">
            {[...testimonials].reverse().map((t) => (
              <TestimonialCard key={`c-${t.author}`} {...t} />
            ))}
            {[...testimonials].reverse().map((t) => (
              <TestimonialCard key={`d-${t.author}`} {...t} />
            ))}
          </div>
        </div>
      </div>

      {/* フッター */}
      <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            500社以上の導入実績
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            顧客満足度 98.5%
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes testimonial-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes testimonial-scroll-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `,
        }}
      />
    </section>
  );
}
