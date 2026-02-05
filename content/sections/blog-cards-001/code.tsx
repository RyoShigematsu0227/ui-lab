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
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Latest Articles
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Insights and stories from our team
            </p>
          </div>
          <a
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block dark:text-indigo-400"
          >
            View all articles →
          </a>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur dark:bg-zinc-900/90 dark:text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  <a href="#">{post.title}</a>
                </h3>

                <p className="mt-2 flex-1 text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            View all articles →
          </a>
        </div>
      </div>
    </section>
  );
}
