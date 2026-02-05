import Image from "next/image";

// acsim.appスタイル: 深いダーク背景、白テキスト、広いletter-spacing、コーナードット、subtle border
// 統計データと引用を組み合わせたテスティモニアル
export function TestimonialStats001() {
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "Rating" },
    { value: "50M+", label: "API Requests" },
  ];

  const testimonial = {
    content:
      "We evaluated dozens of solutions before choosing this platform. The performance, reliability, and developer experience are simply unmatched. Our team has never been more productive.",
    author: "Jennifer Martinez",
    role: "VP of Engineering",
    company: "Quantum Labs",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  };

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
            By the numbers
          </p>
          <h2 className="text-3xl font-light tracking-tight text-white">
            Trusted at scale
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative border border-zinc-800/50 bg-zinc-900/20 p-6 text-center"
            >
              {/* Corner dots */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-zinc-800" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-zinc-800" />

              <p className="text-3xl font-light tracking-tight text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="relative mt-12 border border-zinc-800/50 bg-zinc-900/30 p-8 md:p-12">
          {/* Corner dots */}
          <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />

          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            {/* Avatar */}
            <div className="shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={80}
                height={80}
                className="rounded-full object-cover grayscale"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Quote */}
              <div className="mb-6 flex h-8 w-8 items-center justify-center border border-zinc-800 text-zinc-600">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-lg leading-relaxed tracking-wide text-zinc-300 md:text-xl">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author info */}
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs tracking-wider text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-zinc-700">|</span>
                <span className="text-xs uppercase tracking-[0.15em] text-zinc-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <span className="h-px w-16 bg-zinc-800" />
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Join 10,000+ teams
          </span>
          <span className="h-px w-16 bg-zinc-800" />
        </div>
      </div>
    </section>
  );
}
