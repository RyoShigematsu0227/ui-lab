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
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Loved by thousands
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See what our customers have to say about their experience
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                testimonial.featured
                  ? "bg-indigo-600 text-white md:col-span-2 lg:col-span-1"
                  : "border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      testimonial.featured
                        ? "text-indigo-200"
                        : "text-yellow-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className={`mt-6 text-lg leading-relaxed ${
                  testimonial.featured
                    ? "text-indigo-100"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className={`font-semibold ${
                      testimonial.featured
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className={`text-sm ${
                      testimonial.featured
                        ? "text-indigo-200"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
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
