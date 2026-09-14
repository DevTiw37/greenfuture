"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.website) {
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to send message.");
        return;
      }

      alert("Thank you! Your message has been received.");

      setForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-green-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              Get Involved
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s create a greener future together.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100/80">
              Have a question, want to volunteer, or have an idea for a
              community project? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            {/* Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Contact Us
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-green-950">
                Start a conversation
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
                Whether you want to volunteer, partner with us, or learn more
                about our programs, send us a message and our team will get back
                to you.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="font-semibold text-green-950">Email</h3>

                  <p className="mt-1 text-gray-600">hello@greenfuture.org</p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-950">Location</h3>

                  <p className="mt-1 text-gray-600">
                    Working with communities everywhere
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-green-950">Volunteer</h3>

                  <p className="mt-1 text-gray-600">
                    Tell us how you would like to contribute.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
