import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GreenFuture | Building a Sustainable Future",
    template: "%s | GreenFuture",
  },
  description:
    "GreenFuture empowers communities to create positive environmental and social change through sustainability programs, education, and local action.",

  keywords: [
    "GreenFuture",
    "sustainability",
    "environment",
    "community action",
    "tree planting",
    "environmental education",
  ],

  openGraph: {
    title: "GreenFuture | Building a Sustainable Future",
    description:
      "Empowering communities to create positive environmental and social change through local action.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-green-700 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
