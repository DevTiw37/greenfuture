import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/icon.png"
                alt="GreenFuture"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
            </Link>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Empowering communities to create positive environmental and social
              change for a healthier and more sustainable future.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">Explore</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-green-400">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-green-400"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/impact"
                  className="transition hover:text-green-400"
                >
                  Impact
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-green-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-white">Get Involved</h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Want to help create a greener future? Join our community and make
              a difference.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-block text-sm font-semibold text-green-400 transition hover:text-green-300"
            >
              Become a Volunteer →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} GreenFuture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
