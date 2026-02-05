import Link from "next/link";

const footerLinks = [
  { label: "Sections", href: "/" },
  { label: "Sites", href: "/sites" },
  { label: "About", href: "/about" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950">
      <div className="h-px bg-zinc-800/50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center">
          {/* ロゴ */}
          <Link
            href="/"
            className="group"
          >
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/90 transition-opacity duration-300 group-hover:opacity-60">
              UI Lab
            </span>
          </Link>

          {/* ナビゲーション */}
          <nav className="mt-8 flex items-center gap-8" aria-label="フッターナビゲーション">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase text-white/40 transition-all duration-300 hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 説明文 */}
          <p className="mt-10 max-w-md text-[11px] leading-relaxed tracking-wide text-white/30">
            AIが生成するモダンUIセクションのギャラリー。
            Next.js + Tailwind CSSのコードをコピーして、すぐに導入できます。
          </p>

          {/* コピーライト */}
          <div className="mt-12 pt-8 border-t border-zinc-800/30 w-full">
            <p className="text-[10px] tracking-[0.15em] uppercase text-white/25">
              {currentYear} UI Lab
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
