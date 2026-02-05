import Image from "next/image";

export function GalleryMasonry001() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop",
      alt: "Abstract art 1",
      title: "Geometric Flow",
      category: "Abstract",
      span: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Architecture 1",
      title: "Urban Lines",
      category: "Architecture",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      alt: "Nature 1",
      title: "Mountain Peak",
      category: "Nature",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=400&fit=crop",
      alt: "Abstract art 2",
      title: "Color Burst",
      category: "Abstract",
      span: "",
    },
    {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=800&fit=crop",
      alt: "Architecture 2",
      title: "Sky Tower",
      category: "Architecture",
      span: "row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      alt: "Nature 2",
      title: "Forest Mist",
      category: "Nature",
      span: "",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl md:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-base tracking-wide text-zinc-500">
            A collection of our best work across different categories
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["All", "Abstract", "Architecture", "Nature"].map((filter) => (
            <button
              key={filter}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-200 ${
                filter === "All"
                  ? "border border-zinc-700 bg-white text-zinc-900"
                  : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-zinc-800/50 ${image.span}`}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                  {image.category}
                </span>
                <h3 className="mt-2 text-lg font-medium tracking-wide text-white">
                  {image.title}
                </h3>
              </div>

              {/* View Button */}
              <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 text-white backdrop-blur transition-all duration-200 hover:bg-white hover:text-zinc-900">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-14 text-center">
          <button className="rounded-full border border-zinc-800 bg-zinc-900 px-8 py-3 text-sm font-medium tracking-wide text-white transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
