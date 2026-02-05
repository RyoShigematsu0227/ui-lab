"use client";

import { useState } from "react";

export function NewsletterSimple001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="bg-zinc-950 border-y border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl md:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 text-base leading-relaxed tracking-wide text-zinc-500">
              Get the latest updates, articles, and resources delivered straight
              to your inbox. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:ml-8"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-w-0 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3.5 text-sm tracking-wide text-white placeholder-zinc-600 transition-colors duration-200 focus:border-zinc-600 focus:outline-none sm:w-72"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-shrink-0 rounded-lg border border-zinc-700 bg-white px-6 py-3.5 text-sm font-medium tracking-wide text-zinc-900 transition-all duration-200 hover:bg-zinc-100"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-zinc-800/50 pt-10">
          <div className="flex items-center gap-3 text-sm tracking-wide text-zinc-500">
            <svg
              className="h-5 w-5 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-3 text-sm tracking-wide text-zinc-500">
            <svg
              className="h-5 w-5 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>No spam</span>
          </div>
          <div className="flex items-center gap-3 text-sm tracking-wide text-zinc-500">
            <svg
              className="h-5 w-5 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
