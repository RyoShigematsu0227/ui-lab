// acsim.appスタイル: 深いダーク背景、白テキスト、広いletter-spacing、コーナードット、subtle border
// シンプルで洗練されたミニマルテスティモニアル
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
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
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
              <p className="max-w-2xl text-2xl font-light leading-relaxed tracking-wide text-zinc-200 md:text-3xl">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-zinc-800" />
                <span className="text-sm tracking-wide text-zinc-500">
                  {testimonial.author}
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {testimonial.role}
                </span>
                <span className="h-px w-8 bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-zinc-700" />
            <div className="h-1 w-1 rounded-full bg-zinc-700" />
            <div className="h-1 w-1 rounded-full bg-zinc-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
