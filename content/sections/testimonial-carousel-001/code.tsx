export function TestimonialCarousel001() {
  const testimonials = [
    {
      content:
        "This product has completely transformed how our team works. The intuitive interface and powerful features have increased our productivity by 40%.",
      author: "Sarah Chen",
      role: "CEO at TechStart",
      avatar: "S",
    },
    {
      content:
        "I've tried many similar tools, but nothing comes close to this. The attention to detail and user experience is unmatched.",
      author: "Michael Rodriguez",
      role: "Product Designer at Creative Co",
      avatar: "M",
    },
    {
      content:
        "Outstanding support and continuous improvements. They actually listen to customer feedback and implement it quickly.",
      author: "Emily Watson",
      role: "Engineering Lead at DevFlow",
      avatar: "E",
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Loved by developers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Join thousands of satisfied customers who have transformed their
            workflow.
          </p>
        </div>

        {/* テスティモニアルグリッド */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* 引用符 */}
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* コンテンツ */}
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                {testimonial.content}
              </p>

              {/* 著者 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 font-medium text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 評価バッジ */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            4.9/5 average rating from 2,000+ reviews
          </p>
        </div>
      </div>
    </section>
  );
}
