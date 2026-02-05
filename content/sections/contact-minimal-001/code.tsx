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
    <section className="bg-zinc-950 py-24 border-t border-zinc-800/50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-4 text-sm leading-relaxed tracking-wide text-zinc-500">
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
                className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-500"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-zinc-800 bg-transparent py-3 text-sm tracking-wide text-white placeholder-zinc-600 transition-colors duration-200 focus:border-zinc-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-500"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 block w-full border-b border-zinc-800 bg-transparent py-3 text-sm tracking-wide text-white placeholder-zinc-600 transition-colors duration-200 focus:border-zinc-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-500"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-3 block w-full resize-none border-b border-zinc-800 bg-transparent py-3 text-sm tracking-wide text-white placeholder-zinc-600 transition-colors duration-200 focus:border-zinc-500 focus:outline-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-lg border border-zinc-700 bg-white px-6 py-3.5 text-sm font-medium tracking-wide text-zinc-900 transition-all duration-200 hover:bg-zinc-100 sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Alternative Contact */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-wide text-zinc-600">
            Prefer email?{" "}
            <Link
              href="mailto:hello@example.com"
              className="text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              hello@example.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
