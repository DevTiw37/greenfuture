import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";

export default function ServicesPage() {
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

              <ProgramCard
                icon="🌳"
                title="Community Tree Planting"
                description="Bring neighbors together to restore green spaces, plant trees, and create healthier local environments."
              />

              <ProgramCard
                icon="🎓"
                title="School Sustainability Workshops"
                description="Interactive workshops that help students understand sustainability and turn knowledge into action."
              />

              <ProgramCard
                icon="💚"
                title="Community Micro-Grants"
                description="Small grants that help communities turn environmental ideas into practical local projects."
              />

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}