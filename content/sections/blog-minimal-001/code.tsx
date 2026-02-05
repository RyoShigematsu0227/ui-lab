import Link from "next/link";

export function BlogMinimal001() {
  const posts = [
    {
      title: "Building Scalable Design Systems",
      excerpt: "A comprehensive guide to creating design systems that grow with your team and product.",
      date: "Jan 28, 2024",
      category: "Design",
    },
    {
      title: "The Art of Minimalist Web Design",
      excerpt: "Less is more. Discover how simplicity can elevate your digital experiences.",
      date: "Jan 22, 2024",
      category: "Design",
    },
    {
      title: "Performance Optimization Techniques",
      excerpt: "Practical strategies to improve your website's speed and user experience.",
      date: "Jan 15, 2024",
      category: "Engineering",
    },
    {
      title: "Modern CSS Architecture",
      excerpt: "Exploring new approaches to organizing and scaling CSS in large applications.",
      date: "Jan 10, 2024",
      category: "Engineering",
    },
  ];

  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-foreground sm:text-3xl">
            Journal
          </h2>
          <p className="mt-3 text-sm tracking-wide text-muted-foreground">
            Thoughts on design, development, and building products
          </p>
        </div>

        {/* Posts List */}
        <div className="mt-16 divide-y divide-border">
          {posts.map((post) => (
            <article key={post.title} className="group py-8 first:pt-0 last:pb-0">
              <Link href="#" className="block">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-wide text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed tracking-wide text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs tracking-wide text-muted-foreground/70 sm:flex-col sm:items-end sm:gap-2">
                    <time>{post.date}</time>
                    <span className="rounded-full border border-border px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            View all articles
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
