// acsim.appスタイル: コーナードット、subtle border
// ロゴクラウドと引用を組み合わせたテスティモニアル
// ダーク/ライトモード両対応
export function TestimonialLogos001() {
  const companies = [
    { name: "Stripe", logo: "STRIPE" },
    { name: "Vercel", logo: "VERCEL" },
    { name: "Linear", logo: "LINEAR" },
    { name: "Notion", logo: "NOTION" },
    { name: "Figma", logo: "FIGMA" },
    { name: "Raycast", logo: "RAYCAST" },
  ];

  const testimonials = [
    {
      content: "The best design system we've ever implemented.",
      author: "Engineering Team",
      company: "Stripe",
    },
    {
      content: "Transformed how we build products at scale.",
      author: "Design Team",
      company: "Vercel",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Trusted by
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground">
            Industry-leading teams
          </h2>
        </div>

        {/* Logo Cloud */}
        <div className="relative mt-16 border border-border bg-card/20 py-12">
          {/* Corner dots */}
          <div className="absolute left-3 top-3 h-1 w-1 rounded-full bg-muted-foreground/30" />
          <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-muted-foreground/30" />
          <div className="absolute bottom-3 left-3 h-1 w-1 rounded-full bg-muted-foreground/30" />
          <div className="absolute bottom-3 right-3 h-1 w-1 rounded-full bg-muted-foreground/30" />

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-8">
            {companies.map((company, index) => (
              <span
                key={index}
                className="text-sm font-medium tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {company.logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative border border-border/50 bg-card/10 p-8"
            >
              {/* Corner line accents */}
              <div className="absolute left-0 top-0 h-4 w-px bg-border" />
              <div className="absolute left-0 top-0 h-px w-4 bg-border" />
              <div className="absolute bottom-0 right-0 h-4 w-px bg-border" />
              <div className="absolute bottom-0 right-0 h-px w-4 bg-border" />

              <p className="text-lg leading-relaxed tracking-wide text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm tracking-wide text-muted-foreground">
                  {testimonial.author}
                </span>
                <span className="text-muted-foreground/50">—</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group relative border border-border bg-transparent px-8 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground">
            <span>View all customers</span>
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
