import Image from "next/image";

// acsim.appスタイル: 深いダーク背景、白テキスト、広いletter-spacing、コーナードット、subtle border
// 1つの大きな引用を中央に配置したシングルテスティモニアル
export function TestimonialSingle001() {
  const testimonial = {
    content:
      "Working with this team has been transformative for our business. Their attention to detail, commitment to excellence, and innovative approach have helped us achieve results we never thought possible. I cannot recommend them highly enough.",
    author: "Alexandra Chen",
    role: "Chief Executive Officer",
    company: "Nexus Technologies",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  };

  return (
    <section className="bg-zinc-950 py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Main testimonial container */}
        <div className="relative border border-zinc-800/50 bg-zinc-900/20 p-12 md:p-16">
          {/* Corner dots */}
          <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-zinc-700" />

          {/* Quote icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center border border-zinc-800 bg-zinc-900/50">
              <svg
                className="h-6 w-6 text-zinc-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Quote text */}
          <blockquote className="text-center">
            <p className="text-xl leading-relaxed tracking-wide text-zinc-200 md:text-2xl md:leading-relaxed">
              &ldquo;{testimonial.content}&rdquo;
            </p>
          </blockquote>

          {/* Author info */}
          <div className="mt-12 flex flex-col items-center">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              width={64}
              height={64}
              className="rounded-full object-cover grayscale"
            />
            <div className="mt-4 text-center">
              <p className="text-base font-medium tracking-wide text-white">
                {testimonial.author}
              </p>
              <p className="mt-1 text-sm tracking-wider text-zinc-500">
                {testimonial.role}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
