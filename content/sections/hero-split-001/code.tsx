import Image from "next/image";
import Link from "next/link";

export function HeroSplit001() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24 xl:px-24">
          <div className="mx-auto max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 dark:border-indigo-900 dark:bg-indigo-950">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                New Release v2.0
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Build products
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                people love
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Create beautiful, responsive interfaces with our comprehensive
              design system. Ship faster with pre-built components and intuitive
              workflows.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                Get Started Free
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
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-300 dark:hover:bg-zinc-800"
              >
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white object-cover dark:border-zinc-950"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    2,000+
                  </span>{" "}
                  happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600" />
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=1600&fit=crop"
            alt="Team collaboration"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />

          {/* Floating Card */}
          <div className="absolute bottom-12 left-12 right-12 rounded-2xl bg-white/10 p-6 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/70">Development Speed</p>
                <p className="text-2xl font-bold text-white">3x faster</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
