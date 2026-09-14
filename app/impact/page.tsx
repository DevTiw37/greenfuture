import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactStat from "@/components/ImpactStat";
import { client } from "@/sanity/lib/client";
import { impactStatsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Discover the environmental and community impact created through GreenFuture's programs and initiatives.",
};

type ImpactStat = {
  _id: string;
  value: string;
  label: string;
  order: number;
};

export default async function ImpactPage() {
  const impactStats = await client.fetch<ImpactStat[]>(impactStatsQuery);
  return (
    <>
      <Navbar />

      <main  id="main-content">
        {/* Page Header */}
        <section className="bg-green-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              Our Impact
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Measuring progress. Creating lasting change.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100/80">
              Our work is driven by measurable community action and a commitment
              to creating meaningful environmental impact.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-y-14 md:grid-cols-4">
              {impactStats.map((stat) => (
                <ImpactStat
                  key={stat._id}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Story */}
        <section className="bg-green-50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
              Why It Matters
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-green-950">
              Change starts at the community level.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                Environmental challenges can feel overwhelming when viewed
                globally. But meaningful progress often begins with local
                communities taking practical steps together.
              </p>

              <p>
                Every tree planted, student educated, volunteer engaged, and
                community project supported contributes to a larger movement
                toward sustainability.
              </p>

              <p>
                Our impact is not only measured by numbers. It is also measured
                by the people who gain the knowledge, confidence, and resources
                to continue creating positive change.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
