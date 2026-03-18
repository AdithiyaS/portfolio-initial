import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Adithiya Srinivasan — Software Engineer",
  description:
    "Full-stack software engineer specializing in backend systems, cloud infrastructure, and embedded development.",
  openGraph: {
    title: "Adithiya Srinivasan — Software Engineer",
    description: "Backend · Cloud · Embedded Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
