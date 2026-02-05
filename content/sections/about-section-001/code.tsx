import Image from "next/image";
import Link from "next/link";

export function AboutSection001() {
  const stats = [
    { value: "2018", label: "Founded" },
    { value: "50+", label: "Team Members" },
    { value: "12", label: "Countries" },
    { value: "500+", label: "Projects" },
  ];

  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              About Us
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-wide text-foreground sm:text-3xl lg:text-4xl">
              We build digital experiences that matter
            </h2>
            <p className="mt-6 text-base leading-relaxed tracking-wide text-muted-foreground">
              Founded in 2018, we are a team of designers, developers, and strategists
              passionate about creating exceptional digital products. We believe in the
              power of thoughtful design and clean code to transform businesses.
            </p>
            <p className="mt-4 text-base leading-relaxed tracking-wide text-muted-foreground">
              Our approach combines deep technical expertise with a keen eye for design,
              ensuring every project we deliver not only looks beautiful but performs
              flawlessly.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold tracking-wide text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:text-muted-foreground"
              >
                Learn more about our story
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-xl border border-border/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
