"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationFloating001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#" },
    { label: "Work", href: "#" },
    { label: "About", href: "#" },
    { label: "Journal", href: "#" },
  ];

  return (
    <header className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-border/60 bg-background/80 px-6 py-3 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2.5"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-muted">
              <span className="text-xs font-medium text-foreground">A</span>
            </div>
            <span className="text-sm font-medium tracking-wide text-foreground">
              Atelier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#"
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-foreground px-5 py-1.5 text-sm font-medium tracking-wide text-background transition-colors duration-200 hover:bg-foreground/90"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-1.5 text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-border/60 bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 h-px bg-border/40" />
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="rounded-lg px-3 py-2.5 text-center text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:bg-muted"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium tracking-wide text-background"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
