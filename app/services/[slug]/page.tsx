import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 60;

type Program = {
  title: string;
  description: string;
  icon?: string;
  slug?: {
    current: string;
  };
};

const programQuery = groq`
  *[_type == "program" && slug.current == $slug][0] {
    title,
    description,
    icon,
    slug
  }
`;

async function getProgram(slug: string) {
  return client.fetch<Program | null>(programQuery, { slug });
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const programs = await client.fetch<{ slug: { current: string } }[]>(
    groq`
      *[_type == "program" && defined(slug.current)] {
        slug
      }
    `
  );

  return programs.map((program) => ({
    slug: program.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgram(slug);

  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = await getProgram(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-green-950 py-24 text-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-5xl">{program.icon || "🌱"}</div>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
              {program.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-100/80">
              {program.description}
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-3xl font-bold text-green-950">
              About this program
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {program.description}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}