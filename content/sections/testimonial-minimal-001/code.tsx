// acsim.appスタイル: コーナードット、subtle border
// シンプルで洗練されたミニマルテスティモニアル
// ダーク/ライトモード両対応
export function TestimonialMinimal001() {
  const testimonials = [
    {
      content: "Exceptional quality and attention to detail.",
      author: "David Park",
      role: "Founder",
    },
    {
      content: "Changed the way we approach design systems.",
      author: "Maria Santos",
      role: "Design Director",
    },
    {
      content: "Fast, reliable, and beautifully crafted.",
      author: "James Liu",
      role: "Tech Lead",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Quote */}
              <p className="max-w-2xl text-2xl font-light leading-relaxed tracking-wide text-foreground/90 md:text-3xl">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-border" />
                <span className="text-sm tracking-wide text-muted-foreground">
                  {testimonial.author}
                </span>
                <span className="text-muted-foreground/50">/</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {testimonial.role}
                </span>
                <span className="h-px w-8 bg-border" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
