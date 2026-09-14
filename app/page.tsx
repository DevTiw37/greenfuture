import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProgramCard from "@/components/ProgramCard";
import ImpactStat from "@/components/ImpactStat";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { programsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const programs = await client.fetch<
    {
      _id: string;
      title: string;
      description: string;
      icon?: string;
      slug?: {
        current: string;
      };
    }[]
  >(programsQuery);
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-green-950">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2000&q=80')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Hero Content */}
          <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-20">
            <div className="max-w-3xl text-white">
              {/* Small Label */}
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
                Building a greener future
              </p>

              {/* Main Heading */}
              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Empowering Communities
                <span className="block text-green-300">
                  for a Sustainable Tomorrow
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
                Together, we can create healthier communities, protect our
                environment, and build a sustainable future for generations to
                come.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-green-600 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-green-500"
                >
                  Become a Volunteer
                </Link>

                <Link
                  href="/impact"
                  className="rounded-full border border-white/60 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white hover:text-green-900"
                >
                  See Our Impact
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Section Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Our Mission
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
                Small Actions. Meaningful Change.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                GreenFuture brings people together to create positive
                environmental and social change through community action,
                education, and sustainable initiatives.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl border border-green-100 bg-green-50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-2xl">
                  🌱
                </div>

                <h3 className="mt-6 text-xl font-bold text-green-950">
                  Community Action
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We organize local initiatives that empower communities to take
                  meaningful environmental action.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-green-100 bg-green-50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-2xl">
                  📚
                </div>

                <h3 className="mt-6 text-xl font-bold text-green-950">
                  Education
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We help students and communities understand sustainability and
                  turn knowledge into action.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-green-100 bg-green-50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-2xl">
                  🌍
                </div>

                <h3 className="mt-6 text-xl font-bold text-green-950">
                  Sustainable Future
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  We support initiatives designed to create lasting benefits for
                  people, communities, and the planet.
                </p>
              </div>
            </div>

            {/* About Link */}
            <div className="mt-12 text-center">
              <Link
                href="/about"
                className="font-semibold text-green-700 transition hover:text-green-900"
              >
                Learn more about GreenFuture →
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Section Heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
                Our Programs
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
                Turning Ideas Into Action
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                From planting trees to educating the next generation, our
                programs give communities practical ways to create lasting
                change.
              </p>
            </div>
            {/* Program Cards */}
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {programs.map((program) => (
                <ProgramCard
                  key={program._id}
                  icon={program.icon || "🌱"}
                  title={program.title}
                  description={program.description}
                  slug={program.slug?.current}
                />
              ))}
            </div>
            const programs
            {/* Programs CTA */}
            <div className="mt-12">
              <Link
                href="/services"
                className="inline-flex rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Explore All Programs →
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-green-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
                Our Impact
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Together, We Make a Difference
              </h2>

              <p className="mt-6 text-lg leading-8 text-green-100/80">
                Every volunteer, project, and partnership contributes to a
                healthier environment and stronger communities.
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-2 gap-y-12 md:grid-cols-4">
              <ImpactStat value="10K+" label="Trees Planted" />

              <ImpactStat value="5K+" label="Volunteers" />

              <ImpactStat value="120+" label="Community Projects" />

              <ImpactStat value="50+" label="Schools Reached" />
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="bg-green-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Be Part of the Change
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-green-950 sm:text-5xl">
              Your Actions Can Shape a Better Future
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Whether you volunteer your time, support a local project, or share
              our mission with others, every action helps build a more
              sustainable world.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Become a Volunteer
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-green-700 px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
