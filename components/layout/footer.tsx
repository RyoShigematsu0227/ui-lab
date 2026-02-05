import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Content",
    links: [
      { label: "Sections", href: "/" },
      { label: "Sites", href: "/sites" },
      { label: "Favorites", href: "/favorites" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Hero", href: "/categories/hero" },
      { label: "Feature", href: "/categories/feature" },
      { label: "Pricing", href: "/categories/pricing" },
      { label: "CTA", href: "/categories/cta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About", href: "/about" },
      { label: "All Categories", href: "/categories" },
      { label: "All Tags", href: "/tags" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ブランド */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 hover-opacity"
            >
              {/* ロゴマーク */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-sm font-bold text-background">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide">UI Lab</span>
                <span className="text-[9px] tracking-widest-custom uppercase text-muted-foreground">
                  Modern UI Gallery
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs">
              AIが生成するモダンUIセクションのギャラリー。
              Next.js + Tailwind CSSのコードをコピーして、
              あなたのプロジェクトにすぐに導入できます。
            </p>

            {/* ソーシャルリンク */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-opacity hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover-opacity hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* リンク */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="heading-section text-muted-foreground tracking-widest-custom">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover-opacity hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground tracking-wide">
              &copy; {currentYear} UI Lab. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground tracking-wide">
              Made with AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
