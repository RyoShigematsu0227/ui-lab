import Image from "next/image";

// acsim.appスタイル: コーナードット、subtle border
// カードスタイルのテスティモニアル
// ダーク/ライトモード両対応
export function TestimonialCards001() {
  const testimonials = [
    {
      content:
        "The level of craftsmanship is unmatched. Every interaction feels intentional and polished.",
      author: "Sophie Anderson",
      role: "Product Designer",
      company: "Craft Studio",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      content:
        "Finally, a solution that understands the nuances of modern design. Highly recommended.",
      author: "Thomas Wright",
      role: "Creative Director",
      company: "Pixel Perfect",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      content:
        "Streamlined our entire workflow. The ROI speaks for itself.",
      author: "Rachel Kim",
      role: "Head of Engineering",
      company: "Scale Systems",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      content:
        "A game-changer for our team. We shipped faster than ever before.",
      author: "Marcus Chen",
      role: "Startup Founder",
      company: "Velocity",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="text-3xl font-light tracking-tight text-foreground">
              Trusted by industry leaders
            </h2>
          </div>
          <p className="max-w-md text-sm tracking-wide text-muted-foreground">
            See why teams choose us to build their most ambitious projects.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative border border-border bg-card/20 p-8 transition-colors hover:border-border/80 hover:bg-card/40"
            >
              {/* Corner dots */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-muted-foreground/20 transition-colors group-hover:bg-muted-foreground/30" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-muted-foreground/20 transition-colors group-hover:bg-muted-foreground/30" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-muted-foreground/20 transition-colors group-hover:bg-muted-foreground/30" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-muted-foreground/20 transition-colors group-hover:bg-muted-foreground/30" />

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-8 text-base leading-relaxed tracking-wide text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="text-sm font-medium tracking-wide text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-xs tracking-wider text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
