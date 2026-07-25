"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Honda", country: "Japan", tagline: "The Power of Dreams" },
  { name: "Yamaha", country: "Japan", tagline: "Revs Your Heart" },
  { name: "Kawasaki", country: "Japan", tagline: "Let the Good Times Roll" },
  { name: "Suzuki", country: "Japan", tagline: "Way of Life" },
  { name: "Ducati", country: "Italy", tagline: "Racing DNA" },
  { name: "BMW Motorrad", country: "Germany", tagline: "Make Life a Ride" },
  { name: "KTM", country: "Austria", tagline: "Ready to Race" },
  { name: "Aprilia", country: "Italy", tagline: "Be a Racer" },
  { name: "Husqvarna", country: "Sweden", tagline: "Pioneering Since 1903" },
  { name: "MV Agusta", country: "Italy", tagline: "Motorcycle Art" },
  { name: "Triumph", country: "UK", tagline: "For the Ride" },
  { name: "Brembo", country: "Italy", tagline: "Braking Excellence" },
];

const advantages = [
  {
    icon: "🏆",
    title: "Official Distributor",
    desc: "Partner resmi brand-brand racing kelas dunia. Semua part dijamin 100% original dengan garansi resmi.",
  },
  {
    icon: "🔧",
    title: "Expert Technical Support",
    desc: "Tim mekanik berpengalaman siap membantu konsultasi dan pemasangan. Dari setup street hingga full race spec.",
  },
  {
    icon: "🚚",
    title: "Pengiriman Seluruh Indonesia",
    desc: "Free shipping untuk pembelian di atas Rp 5 juta. Same-day delivery untuk area Jabodetabek dan Lombok.",
  },
  {
    icon: "💰",
    title: "Harga Kompetitif",
    desc: "Direct import tanpa perantara. Harga terbaik untuk kualitas racing-grade. Tersedia cicilan 0% hingga 12 bulan.",
  },
  {
    icon: "🛡️",
    title: "Garansi & After Sales",
    desc: "Garansi resmi untuk setiap produk. Return policy 14 hari. Customer service 24/7 via WhatsApp.",
  },
  {
    icon: "🏁",
    title: "Race-Proven Products",
    desc: "Setiap part yang kami jual sudah teruji di sirkuit. Dipakai oleh SuperSpeed Racing Team di kejuaraan Superbike nasional.",
  },
];

const categories = [
  { id: "all", name: "Semua Part" },
  { id: "engine", name: "Engine & Performance" },
  { id: "brake", name: "Brake System" },
  { id: "suspension", name: "Suspension" },
  { id: "exhaust", name: "Exhaust System" },
  { id: "body", name: "Body & Fairing" },
  { id: "safety", name: "Safety Gear" },
  { id: "electronics", name: "Electronics" },
];

const products = [
  {
    id: 1,
    name: "Brembo GP4-RX Brake Caliper",
    brand: "Brembo",
    category: "brake",
    price: 18500000,
    badge: "Best Seller",
    specs: "Radial Mount | 4-Piston | CNC Billet | MotoGP Tech",
  },
  {
    id: 2,
    name: "Akrapovič Evolution Line Full System",
    brand: "Akrapovič",
    category: "exhaust",
    price: 32000000,
    badge: "Race Grade",
    specs: "Titanium | Slip-On + Header | Euro5 | -4.2kg",
  },
  {
    id: 3,
    name: "Öhlins TTX GP Rear Shock",
    brand: "Öhlins",
    category: "suspension",
    price: 28000000,
    specs: "Through-Rod | 46mm Piston | Pressurized | Adjustable",
  },
  {
    id: 4,
    name: "Arai RX-7V Evo Racing Helmet",
    brand: "Arai",
    category: "safety",
    price: 15800000,
    badge: "New Arrival",
    specs: "Snell M2020 | PB-SNC2 Shell | VAS-V ProShade",
  },
  {
    id: 5,
    name: "ECU Woolich Racing Tuning Kit",
    brand: "Woolich",
    category: "electronics",
    price: 12000000,
    specs: "Full Map Edit | Quickshifter | Launch Control | Data Log",
  },
  {
    id: 6,
    name: "Marchesini M10RS Forged Wheels",
    brand: "Marchesini",
    category: "body",
    price: 45000000,
    badge: "Pro Grade",
    specs: "Forged Magnesium | -2.8kg vs Stock | WSBK Spec",
  },
  {
    id: 7,
    name: "Yoshimura Alpha T Race System",
    brand: "Yoshimura",
    category: "exhaust",
    price: 22000000,
    specs: "Stainless/Carbon | Works Finish | +8HP Gain",
  },
  {
    id: 8,
    name: "Piston Kit JE Pro Series",
    brand: "JE Pistons",
    category: "engine",
    price: 8500000,
    specs: "Forged | High Compression | Ceramic Coated | Race Spec",
  },
  {
    id: 9,
    name: "Dainese Mugello R D-Air Suit",
    brand: "Dainese",
    category: "safety",
    price: 38000000,
    badge: "MotoGP Tech",
    specs: "D-Air Airbag | Kangaroo Leather | CE Level 2 | Custom Fit",
  },
];

function formatPrice(price: number) {
  return "Rp " + price.toLocaleString("id-ID");
}

export default function SpeedShop() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-[450px] overflow-hidden">
        <Image src="/images/speed-shop-banner.png" alt="Speed Shop" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                Toko Part Racing #1 Indonesia
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black">
                SPEED <span className="text-gradient-orange">SHOP</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl">
                Dari paddock ke jalan raya. Part racing kelas dunia, langsung dari 
                brand-brand terbaik. Dipakai tim kami, tersedia untuk Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ KENAPA SUPERSPEED ═══════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Why Choose Us</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              KENAPA <span className="text-gradient-orange">SUPERSPEED?</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Berawal dari racing team, kami paham betul kebutuhan rider dan mekanik. 
              Setiap part yang kami jual sudah teruji di sirkuit Mandalika.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg p-8 glow-border group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{adv.icon}</div>
                <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#F5A623] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BRAND PARTNERS ═══════════════════ */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Official Partners</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              BRAND <span className="text-gradient-orange">KELAS DUNIA</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Kami bekerja sama dengan brand otomotif roda dua terbaik di dunia. 
              Semua produk 100% original dengan garansi resmi.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border text-center hover:bg-[#F5A623]/5 transition-all duration-300"
              >
                <div className="font-orbitron text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors leading-tight">
                  {brand.name}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-2">
                  {brand.country}
                </div>
                <div className="text-[10px] text-[#F5A623]/60 mt-1 italic">
                  {brand.tagline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FROM TRACK TO STREET ═══════════════════ */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden glow-border">
                <Image src="/images/racing-team.png" alt="Race Proven" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Our Story</span>
              <h2 className="font-orbitron text-3xl md:text-4xl font-black leading-tight">
                DARI SIRKUIT
                <br />
                <span className="text-gradient-orange">KE TOKO ANDA</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                SuperSpeed bermula sebagai racing team yang berkompetisi di kelas Superbike 
                di Sirkuit Mandalika. Pengalaman bertahun-tahun di paddock membuat kami paham 
                betul part mana yang berkualitas dan mana yang hanya marketing.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Kini kami hadir sebagai toko part otomotif racing terpercaya di Indonesia. 
                Setiap part yang kami jual adalah part yang sama dengan yang kami pakai di motor 
                balap kami. Race-tested, rider-approved.
              </p>
              <ul className="space-y-3">
                {[
                  "Part yang sama dipakai SuperSpeed Racing Team di WSBK Indonesia",
                  "Direct import dari manufacturer — tanpa perantara",
                  "Konsultasi teknis gratis dari mekanik berpengalaman",
                  "Workshop pemasangan di Lombok & Jakarta",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#F5A623] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/racing-team" className="inline-block btn-outline-racing px-8 py-3 rounded text-sm uppercase tracking-wider">
                Lihat Tim Balap Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRODUCT CATALOG ═══════════════════ */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Product Catalog</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              PART <span className="text-gradient-orange">RACING</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Koleksi part racing terlengkap dari brand-brand ternama dunia
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  active === cat.id
                    ? "bg-gradient-to-r from-[#F5A623] to-[#D4891A] text-black shadow-lg shadow-[#F5A623]/30"
                    : "bg-[#1A1A1A] text-gray-400 border border-white/5 hover:border-[#F5A623]/30 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border"
                >
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#F5A623] text-black text-[10px] font-bold uppercase tracking-wider rounded">
                      {product.badge}
                    </div>
                  )}

                  <div className="relative h-48 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-center">
                      <div className="text-5xl mb-2">
                        {product.category === "brake" ? "🔴" :
                         product.category === "exhaust" ? "💨" :
                         product.category === "suspension" ? "🔩" :
                         product.category === "safety" ? "🛡️" :
                         product.category === "electronics" ? "⚡" :
                         product.category === "body" ? "🏎️" :
                         product.category === "engine" ? "⚙️" : "🔧"}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-[#F5A623]/60 font-bold">{product.brand}</div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-white text-lg group-hover:text-[#F5A623] transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1.5 tracking-wide">{product.specs}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-orbitron text-xl font-bold text-gradient-orange">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <button className="w-full py-3 bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#F5A623] hover:text-black transition-all duration-300">
                      Hubungi Kami
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-orbitron text-3xl md:text-4xl font-black">
              BUTUH PART <span className="text-gradient-orange">SPESIFIK?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tidak menemukan part yang Anda cari? Tim kami bisa sourcing part racing apapun 
              dari seluruh dunia. Custom order, bulk purchase, dan paket tim tersedia.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                WhatsApp Kami
              </button>
              <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Download Katalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
