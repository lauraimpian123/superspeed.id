import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuperSpeed Racing Team | Professional Motorsport & Speed Shop",
  description: "Indonesia's premier racing team and speed shop. Championship-winning performance, professional racing gear, and the latest motorsport insights.",
  keywords: "superspeed, racing team, speed shop, motorsport, racing gear, Indonesia racing",
  openGraph: {
    title: "SuperSpeed Racing Team",
    description: "Indonesia's premier racing team and speed shop",
    type: "website",
    locale: "id_ID",
    siteName: "SuperSpeed Racing Team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-inter antialiased bg-[#0A0A0A] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
