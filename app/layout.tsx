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
      <body>{children}</body>
    </html>
  );
}