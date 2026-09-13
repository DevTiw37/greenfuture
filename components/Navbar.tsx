"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight text-green-800"
          >
            GreenFuture
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              Programs
            </Link>

            <Link
              href="/impact"
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              Impact
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 md:block"
          >
            Get Involved
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-green-50 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 pt-4 md:hidden">
            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                About
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                Programs
              </Link>

              <Link
                href="/impact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                Impact
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-green-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-800"
              >
                Get Involved
              </Link>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
}