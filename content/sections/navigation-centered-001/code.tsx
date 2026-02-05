"use client";

import { useState } from "react";
import Link from "next/link";

export function NavigationCentered001() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900">
              <span className="text-lg font-bold tracking-wider text-white">L</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex lg:gap-x-12">
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="#"
            className="text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium tracking-wide text-zinc-900 transition-all duration-200 hover:bg-zinc-100"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
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
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-800/50 bg-zinc-950 px-4 py-6 lg:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-base font-medium tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="#"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium tracking-wide text-white"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-white px-4 py-2.5 text-center text-sm font-medium tracking-wide text-zinc-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
