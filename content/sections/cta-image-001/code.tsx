import Image from "next/image";
import Link from "next/link";

export function CtaImage001() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Limited Time Offer
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to transform
            <br />
            your workflow?
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Join thousands of teams who have already made the switch. Start your
            free trial today and see the difference.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Start Free Trial
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
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
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

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">14 days</p>
              <p className="text-sm text-gray-400">Free trial</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">No credit card</p>
              <p className="text-sm text-gray-400">Required</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Cancel</p>
              <p className="text-sm text-gray-400">Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
