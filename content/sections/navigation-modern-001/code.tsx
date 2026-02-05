"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationModern001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900">
            <span className="text-sm font-bold tracking-wider text-white">L</span>
          </div>
          <span className="text-xl font-semibold tracking-wide text-white">
            Logo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white">
            Log in
          </button>
          <button className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium tracking-wide text-zinc-900 transition-all duration-200 hover:bg-zinc-100">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
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
        <div className="border-t border-zinc-800/50 bg-zinc-950 px-4 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <button className="w-full rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium tracking-wide text-zinc-300 transition-colors duration-200 hover:bg-zinc-800">
                Log in
              </button>
              <button className="w-full rounded-lg bg-white px-4 py-2.5 text-sm font-medium tracking-wide text-zinc-900">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
