import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
          GreenFuture
        </p>

        <h1 className="mt-6 text-7xl font-bold tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
          This page has gone off the map.
        </h2>

        <p className="mt-4 leading-7 text-green-100/70">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-950"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}