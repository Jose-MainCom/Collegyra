import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collegyra | Build together, grow together",
  description:
    "Find collaborators, build real projects, and grow your skills with Collegyra.",
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
