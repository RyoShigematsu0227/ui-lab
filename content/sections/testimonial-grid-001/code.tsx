import Image from "next/image";

// acsim.appスタイル: コーナードット、subtle border
// ダーク/ライトモード両対応
export function TestimonialGrid001() {
  const testimonials = [
    {
      content:
        "This platform has completely transformed how we build products. The speed and quality improvements are remarkable.",
      author: "Sarah Chen",
      role: "CEO at TechStart",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      featured: true,
    },
    {
      content:
        "The best investment we've made for our design team. Collaboration has never been easier.",
      author: "Michael Rodriguez",
      role: "Design Lead at Creative Co",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      featured: false,
    },
    {
      content:
        "Intuitive, fast, and beautiful. Everything a modern tool should be.",
      author: "Emily Watson",
      role: "Product Manager at Scale",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      featured: false,
    },
    {
      content:
        "We've cut our development time in half. The ROI has been incredible.",
      author: "David Kim",
      role: "CTO at Innovate Labs",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      featured: false,
    },
    {
      content:
        "Outstanding support team. They went above and beyond to help us succeed.",
      author: "Lisa Park",
      role: "Engineering Manager at Growth Inc",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      featured: false,
    },
    {
      content:
        "The attention to detail is incredible. Every feature feels thoughtfully designed.",
      author: "James Wilson",
      role: "Founder at BuildRight",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      featured: false,
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Loved by thousands
          </h2>
          <p className="mt-4 text-lg tracking-wide text-muted-foreground">
            See what our customers have to say about their experience
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 ${
                testimonial.featured
                  ? "border border-border bg-card/50 md:col-span-2 lg:col-span-1"
                  : "border border-border/50 bg-card/30"
              }`}
            >
              {/* Corner dots */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-muted-foreground/30" />

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-muted-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-base leading-relaxed tracking-wide text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={44}
                  height={44}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
