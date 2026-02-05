import Image from "next/image";
import Link from "next/link";

export function BlogCards001() {
  const posts = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring the latest trends in web development and what they mean for developers in 2024 and beyond.",
      category: "Technology",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      author: {
        name: "Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      },
    },
    {
      title: "Design Systems That Scale",
      excerpt:
        "How to build and maintain design systems that grow with your product and team.",
      category: "Design",
      date: "Jan 12, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      author: {
        name: "Michael Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
    },
    {
      title: "Mastering TypeScript",
      excerpt:
        "Advanced TypeScript patterns and techniques for building type-safe applications.",
      category: "Engineering",
      date: "Jan 10, 2024",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
      author: {
        name: "Emily Watson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      },
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
              Latest Articles
            </h2>
            <p className="mt-3 text-base tracking-wide text-zinc-500">
              Insights and stories from our team
            </p>
          </div>
          <Link
            href="#"
            className="hidden text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white sm:block"
          >
            View all articles
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs tracking-wide text-zinc-600">
                  <time>{post.date}</time>
                  <span className="text-zinc-700">|</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-4 text-lg font-medium tracking-wide text-white transition-colors duration-200 group-hover:text-zinc-300">
                  <Link href="#">{post.title}</Link>
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed tracking-wide text-zinc-500">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-zinc-800/50 pt-6">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <span className="text-sm font-medium tracking-wide text-zinc-400">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="#"
            className="text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
