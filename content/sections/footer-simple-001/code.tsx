import Link from "next/link";

export function FooterSimple001() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted">
              <span className="text-sm font-bold tracking-wider text-foreground">L</span>
            </div>
            <span className="text-lg font-semibold tracking-wide text-foreground">
              Logo
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <Link
              href="#"
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-xs tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Company
          </p>
        </div>
      </div>
    </footer>
  );
}
