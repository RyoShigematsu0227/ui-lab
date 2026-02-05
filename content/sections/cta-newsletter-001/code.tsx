export function CtaNewsletter001() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border border-zinc-800/50 p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-zinc-600">
                Newsletter
              </p>

              {/* Heading */}
              <h2 className="mt-6 text-2xl font-light tracking-tight text-white sm:text-3xl md:text-4xl">
                Stay in the loop
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed tracking-wide text-zinc-500">
                Get the latest news, updates, and insights delivered straight to
                your inbox. No spam, unsubscribe anytime.
              </p>

              {/* Features list */}
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-xs tracking-wide text-zinc-500">
                  <span className="h-px w-4 bg-zinc-700" />
                  Weekly product updates
                </li>
                <li className="flex items-center gap-3 text-xs tracking-wide text-zinc-500">
                  <span className="h-px w-4 bg-zinc-700" />
                  Industry insights and trends
                </li>
                <li className="flex items-center gap-3 text-xs tracking-wide text-zinc-500">
                  <span className="h-px w-4 bg-zinc-700" />
                  Exclusive early access
                </li>
              </ul>
            </div>

            {/* Right - Form */}
            <div className="flex flex-col justify-center">
              <form className="space-y-4">
                {/* Email input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="mt-3 w-full border-b border-zinc-800 bg-transparent pb-3 text-sm tracking-wide text-white placeholder-zinc-700 transition-colors focus:border-zinc-600 focus:outline-none"
                  />
                </div>

                {/* First name input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-600"
                  >
                    First Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John"
                    className="mt-3 w-full border-b border-zinc-800 bg-transparent pb-3 text-sm tracking-wide text-white placeholder-zinc-700 transition-colors focus:border-zinc-600 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-6 w-full border border-white bg-white py-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-950 transition-all hover:bg-transparent hover:text-white"
                >
                  Subscribe
                </button>

                {/* Privacy note */}
                <p className="text-center text-[10px] tracking-wide text-zinc-700">
                  By subscribing, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
