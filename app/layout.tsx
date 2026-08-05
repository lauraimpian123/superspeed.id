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
  metadataBase: new URL("https://superspeed.id"),
  title: "SuperSpeed.id | Toko Part Racing Online dan Gerai di Lombok & Jakarta",
  description:
    "Toko part racing dengan 437 produk dari 12 brand resmi. Belanja online dengan pengiriman ke seluruh Indonesia, atau datang langsung ke gerai kami di Mataram dan Jakarta Barat.",
  keywords:
    "part racing, toko part motor, sparepart racing Indonesia, Brembo, Akrapovic, Ohlins, part motor Lombok, part motor Jakarta",
  openGraph: {
    title: "SuperSpeed.id | Toko Part Racing Online dan Offline",
    description:
      "437 produk dari 12 brand resmi. Dikelola oleh tim yang membalap di Mandalika sejak 2021.",
    type: "website",
    locale: "id_ID",
    siteName: "SuperSpeed.id",
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
