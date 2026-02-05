"use client";

import { useState } from "react";

export function NewsletterCentered001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted">
          <svg
            className="h-6 w-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Header */}
        <h2 className="mt-8 text-2xl font-semibold tracking-wide text-foreground sm:text-3xl">
          Subscribe to our newsletter
        </h2>
        <p className="mt-4 text-sm leading-relaxed tracking-wide text-muted-foreground">
          Get weekly updates on design, development, and the latest trends in tech.
          No spam, unsubscribe at any time.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-border bg-muted px-4 py-3.5 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none sm:w-80"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Trust Text */}
        <p className="mt-8 text-xs tracking-wide text-muted-foreground/70">
          Join <span className="text-muted-foreground">2,000+</span> subscribers
        </p>
      </div>
    </section>
  );
}
