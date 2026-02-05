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
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A collection of our best work across different categories
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["All", "Abstract", "Architecture", "Nature"].map((filter) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === "All"
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-zinc-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-medium text-indigo-300">
                  {image.category}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {image.title}
                </h3>
              </div>

              {/* View Button */}
              <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 backdrop-blur transition-transform hover:scale-110">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="rounded-full border border-gray-300 bg-white px-8 py-3 font-medium text-gray-900 transition-all hover:border-gray-400 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-600">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
