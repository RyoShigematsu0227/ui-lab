"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactMinimal001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-foreground sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-muted-foreground">
            Have a question or want to work together? <br className="hidden sm:block" />
            Drop us a message below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-14 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-3 block w-full resize-none border-b border-border bg-transparent py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90 sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Alternative Contact */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-wide text-muted-foreground/70">
            Prefer email?{" "}
            <Link
              href="mailto:hello@example.com"
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              hello@example.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
