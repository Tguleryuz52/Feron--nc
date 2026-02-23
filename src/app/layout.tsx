import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feron | Premium Lifestyle Clothing",
  description:
    "Explore Feron's premium lifestyle clothing catalog, featuring high-end casual wear for the modern individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
