export function CtaNewsletter001() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border border-border/50 p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground/60">
                Newsletter
              </p>

              {/* Heading */}
              <h2 className="mt-6 text-2xl font-light tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Stay in the loop
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                Get the latest news, updates, and insights delivered straight to
                your inbox. No spam, unsubscribe anytime.
              </p>

              {/* Features list */}
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
                  <span className="h-px w-4 bg-border" />
                  Weekly product updates
                </li>
                <li className="flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
                  <span className="h-px w-4 bg-border" />
                  Industry insights and trends
                </li>
                <li className="flex items-center gap-3 text-xs tracking-wide text-muted-foreground">
                  <span className="h-px w-4 bg-border" />
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
                    className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/60"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/50 transition-colors focus:border-foreground/50 focus:outline-none"
                  />
                </div>

                {/* First name input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/60"
                  >
                    First Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John"
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/50 transition-colors focus:border-foreground/50 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-6 w-full border border-foreground bg-foreground py-4 text-xs font-medium uppercase tracking-[0.25em] text-background transition-all hover:bg-transparent hover:text-foreground"
                >
                  Subscribe
                </button>

                {/* Privacy note */}
                <p className="text-center text-[10px] tracking-wide text-muted-foreground/50">
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
