import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agri Biotech",
  description: "Your all in one solution for Everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" md:px-10  overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
