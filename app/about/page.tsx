import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how GreenFuture brings people and communities together to create a healthier and more sustainable future.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-green-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              About GreenFuture
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
              Creating change through people, communities, and action.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-100/80">
              GreenFuture is a community-focused initiative working to create
              a healthier and more sustainable future through education,
              environmental action, and local partnerships.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-green-950">
              Our Story
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
              <p>
                We believe meaningful environmental change begins with
                communities. When people have the knowledge, resources, and
                opportunity to take action, small local efforts can create
                lasting results.
              </p>

              <p>
                GreenFuture brings volunteers, students, educators, and local
                communities together around practical sustainability
                initiatives.
              </p>

              <p>
                From planting trees to supporting community-led projects, our
                goal is to make sustainability accessible and actionable for
                everyone.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}