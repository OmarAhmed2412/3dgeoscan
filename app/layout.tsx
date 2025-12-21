import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3DGEOSCAN - professional 3d geospatial scanning",
  description: "professional 3d geospatial scanning solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth">
      <body className={`${inter.className} overflow-y-scroll`}>
        <Navbar />
        <main className="h-screen w-full">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}