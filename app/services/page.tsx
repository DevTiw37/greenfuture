import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { client } from "@/sanity/lib/client";
import { programsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore GreenFuture programs for community tree planting, sustainability education, and community-led environmental projects.",
};

type Program = {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  slug?: {
    current: string;
  };
};

export default async function ServicesPage() {
  const programs = await client.fetch<Program[]>(programsQuery);

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-green-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              Our Programs
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Practical programs for a sustainable future.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100/80">
              Explore the initiatives through which GreenFuture works with
              communities, schools, and local partners.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {programs.map((program) => (
                <ProgramCard
                  key={program._id}
                  icon={program.icon || "🌱"}
                  title={program.title}
                  description={program.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}