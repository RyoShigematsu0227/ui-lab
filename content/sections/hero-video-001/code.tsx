import Image from "next/image";
import Link from "next/link";

export function HeroVideo001() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-all hover:bg-white/30 hover:scale-110">
            <svg
              className="h-8 w-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-sm font-medium text-white">
              Now Available Worldwide
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            The future of
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Transform the way you create, collaborate, and connect. Our
            platform empowers teams to build extraordinary things together.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100"
            >
              Get Started Free
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
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
              Watch Video
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/50">Scroll to explore</span>
              <div className="h-12 w-6 rounded-full border border-white/30">
                <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
