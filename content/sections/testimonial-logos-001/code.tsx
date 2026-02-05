// acsim.appスタイル: 深いダーク背景、白テキスト、広いletter-spacing、コーナードット、subtle border
// ロゴクラウドと引用を組み合わせたテスティモニアル
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
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
            Trusted by
          </p>
          <h2 className="text-3xl font-light tracking-tight text-white">
            Industry-leading teams
          </h2>
        </div>

        {/* Logo Cloud */}
        <div className="relative mt-16 border border-zinc-800/50 bg-zinc-900/20 py-12">
          {/* Corner dots */}
          <div className="absolute left-3 top-3 h-1 w-1 rounded-full bg-zinc-700" />
          <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-zinc-700" />
          <div className="absolute bottom-3 left-3 h-1 w-1 rounded-full bg-zinc-700" />
          <div className="absolute bottom-3 right-3 h-1 w-1 rounded-full bg-zinc-700" />

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 px-8">
            {companies.map((company, index) => (
              <span
                key={index}
                className="text-sm font-medium tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-400"
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
              className="group relative border border-zinc-800/30 bg-zinc-900/10 p-8"
            >
              {/* Corner line accents */}
              <div className="absolute left-0 top-0 h-4 w-px bg-zinc-800" />
              <div className="absolute left-0 top-0 h-px w-4 bg-zinc-800" />
              <div className="absolute bottom-0 right-0 h-4 w-px bg-zinc-800" />
              <div className="absolute bottom-0 right-0 h-px w-4 bg-zinc-800" />

              <p className="text-lg leading-relaxed tracking-wide text-zinc-300">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm tracking-wide text-zinc-500">
                  {testimonial.author}
                </span>
                <span className="text-zinc-700">—</span>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group relative border border-zinc-800 bg-transparent px-8 py-3 text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-300">
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
