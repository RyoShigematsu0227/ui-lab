import Image from "next/image";
import Link from "next/link";

export function FeatureAlternating001() {
  const features = [
    {
      title: "Streamlined Workflow",
      description:
        "Automate repetitive tasks and focus on what matters most. Our intelligent system learns your patterns and suggests optimizations.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      badges: ["Automation", "AI-Powered"],
    },
    {
      title: "Real-time Collaboration",
      description:
        "Work together seamlessly with your team. See changes instantly, leave comments, and never lose track of who did what.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      badges: ["Team", "Real-time"],
    },
    {
      title: "Powerful Analytics",
      description:
        "Get deep insights into your data with beautiful dashboards and customizable reports. Make informed decisions backed by data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      badges: ["Analytics", "Reports"],
    },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful tools designed to help teams work better together
          </p>
        </div>

        {/* Feature Items */}
        <div className="mt-20 space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                {/* Badges */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {feature.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
