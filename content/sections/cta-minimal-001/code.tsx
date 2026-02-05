export function CtaMinimal001() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          Start for free
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Ready to get started?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Join over 10,000+ teams using our platform to build better products
          faster. No credit card required.
        </p>

        {/* Email Input & Button */}
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-gray-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40"
          >
            Get Started
          </button>
        </form>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Free 14-day trial
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
