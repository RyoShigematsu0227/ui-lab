"use client";

import { useState } from "react";

export function NewsletterSimple001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="bg-indigo-600 dark:bg-indigo-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
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
              className="w-full min-w-0 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-indigo-200 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white sm:w-72"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-shrink-0 rounded-lg bg-white px-6 py-3 font-medium text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-indigo-500 pt-8">
          <div className="flex items-center gap-2 text-sm text-indigo-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-indigo-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>No spam</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-indigo-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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
