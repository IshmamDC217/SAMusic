import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Hero from "./landing";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samin Ahmed",
  description: "Samin Ahmed Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Contact />
        </main>
      </body>
    </html>
  );
}
