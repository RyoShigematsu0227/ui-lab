"use client";

import { useState } from "react";

export function ContactForm001() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left side - Info */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-foreground sm:text-3xl md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-5 text-base leading-relaxed tracking-wide text-muted-foreground">
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-14 space-y-10">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
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
                <div>
                  <p className="font-medium tracking-wide text-foreground">
                    Email
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-muted-foreground">
                    hello@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium tracking-wide text-foreground">
                    Phone
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium tracking-wide text-foreground">
                    Office
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-muted-foreground">
                    123 Innovation Street
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="rounded-xl border border-border bg-muted/50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-3 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-3 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Company{" "}
                  <span className="normal-case text-muted-foreground/50">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-3 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-3 block w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm tracking-wide text-foreground placeholder-muted-foreground/60 transition-colors duration-200 focus:border-primary focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-200 hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
