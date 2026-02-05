import Link from "next/link";

export function FooterDark001() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <span className="text-base font-bold tracking-wider text-white">L</span>
              </div>
              <span className="text-xl font-semibold tracking-wide text-white">
                Logo
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed tracking-wide text-zinc-500">
              Build better products faster with our modern platform. Join thousands of teams who trust us.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {["Twitter", "GitHub", "LinkedIn", "Discord"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-500 transition-all duration-200 hover:border-zinc-700 hover:text-white"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  {section.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm tracking-wide text-zinc-500 transition-colors duration-200 hover:text-white"
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

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-800/50 pt-10 sm:flex-row">
          <p className="text-xs tracking-widest text-zinc-600">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs tracking-wide text-zinc-600 transition-colors duration-200 hover:text-zinc-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wide text-zinc-600 transition-colors duration-200 hover:text-zinc-400"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs tracking-wide text-zinc-600 transition-colors duration-200 hover:text-zinc-400"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
