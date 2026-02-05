import Image from "next/image";
import Link from "next/link";

export function CtaImage001() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            Limited Time Offer
            <span className="h-px w-8 bg-border" />
          </span>

          {/* Heading */}
          <h2 className="mt-10 text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to transform
            <br />
            <span className="text-muted-foreground">your workflow?</span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-base font-light leading-relaxed tracking-wide text-muted-foreground">
            Join thousands of teams who have already made the switch. Start your
            free trial today and see the difference.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-transparent hover:text-foreground"
            >
              Start Free Trial
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-3 border border-border bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-foreground/50 hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Watch Demo
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-12 border-t border-border/50 pt-12">
            <div className="text-center">
              <p className="text-2xl font-light tracking-tight text-foreground">14 days</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">Free trial</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light tracking-tight text-foreground">No credit card</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">Required</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light tracking-tight text-foreground">Cancel</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
