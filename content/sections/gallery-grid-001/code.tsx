import Image from "next/image";
import Link from "next/link";

export function GalleryGrid001() {
  const projects = [
    {
      title: "Brand Identity",
      client: "Acme Corp",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    },
    {
      title: "Website Redesign",
      client: "TechStart",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    },
    {
      title: "Mobile App",
      client: "FinanceFlow",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
    {
      title: "E-commerce Platform",
      client: "StyleHub",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&h=600&fit=crop",
    },
    {
      title: "Dashboard Design",
      client: "DataViz",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    },
    {
      title: "Marketing Campaign",
      client: "GrowthLab",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
              Selected Work
            </h2>
            <p className="mt-3 text-sm tracking-wide text-zinc-500">
              A showcase of our recent projects and collaborations
            </p>
          </div>
          <Link
            href="#"
            className="text-sm tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            View all projects
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-zinc-800/50"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-medium tracking-wide text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm tracking-wide text-zinc-400">
                  {project.client}
                </p>
              </div>

              {/* Always visible label */}
              <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-base font-medium tracking-wide text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
