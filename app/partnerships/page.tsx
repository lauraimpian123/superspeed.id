"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const currentPartners = [
  { name: "Honda", type: "Manufacturer Partner", desc: "Part original Honda Racing untuk semua model sport dan racing." },
  { name: "Yamaha", type: "Manufacturer Partner", desc: "Yamaha Racing genuine parts dan aksesoris performa tinggi." },
  { name: "Kawasaki", type: "Manufacturer Partner", desc: "Kawasaki performance parts termasuk ZX-10RR racing components." },
  { name: "Suzuki", type: "Manufacturer Partner", desc: "Suzuki Racing parts dan GSX-R series performance components." },
  { name: "Ducati", type: "Premium Partner", desc: "Ducati Performance catalogue dan Panigale racing parts." },
  { name: "BMW Motorrad", type: "Premium Partner", desc: "BMW Motorrad HP parts dan S1000RR racing components." },
  { name: "KTM", type: "PowerParts Partner", desc: "KTM PowerParts dan RC series racing accessories." },
  { name: "Aprilia", type: "Racing Partner", desc: "Aprilia Racing parts dan RSV4 performance components." },
  { name: "Brembo", type: "Braking Partner", desc: "Brembo Racing brake systems, calipers, dan master cylinders." },
  { name: "Husqvarna", type: "Partner", desc: "Husqvarna functional clothing dan performance accessories." },
  { name: "MV Agusta", type: "Premium Partner", desc: "MV Agusta genuine parts dan limited edition accessories." },
  { name: "Triumph", type: "Partner", desc: "Triumph genuine accessories dan performance parts." },
];

const partnershipTypes = [
  {
    title: "Brand Partnership",
    icon: "🏷️",
    desc: "Menjadi official dealer atau distributor produk Anda di Indonesia. Akses ke jaringan rider dan bengkel racing kami.",
    benefits: [
      "Showcase produk di website dan showroom",
      "Eksposur di event balap nasional",
      "Database 5,000+ rider aktif di Indonesia",
      "Testing produk oleh tim balap profesional",
    ],
  },
  {
    title: "Sponsorship",
    icon: "🏎️",
    desc: "Sponsori SuperSpeed Racing Team dan dapatkan eksposur langsung di sirkuit, media, dan komunitas motorsport.",
    benefits: [
      "Logo di motor balap & riding gear",
      "Eksposur TV dan media sosial",
      "Akses VIP ke semua event balap",
      "Content & marketing collaboration",
    ],
  },
  {
    title: "Technical Partnership",
    icon: "🔧",
    desc: "Kolaborasi pengembangan produk dan teknologi. Tim engineer kami siap menjadi testing ground untuk inovasi Anda.",
    benefits: [
      "Real-world testing di Sirkuit Mandalika",
      "Feedback dari mekanik dan rider profesional",
      "Data telemetry dan performa",
      "Co-development program",
    ],
  },
  {
    title: "Event & Community",
    icon: "🎪",
    desc: "Partner untuk event motorsport, track day, dan community gathering. Jangkau ribuan enthusiast secara langsung.",
    benefits: [
      "Co-hosting track day events",
      "Community meetup sponsorship",
      "Riding clinic & workshop",
      "Product launch events",
    ],
  },
];

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image src="/images/fnf-lineup.png" alt="Partnerships" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Grow Together</span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                PARTNER<span className="text-gradient-orange">SHIPS</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mt-3">
                Bergabunglah dengan ekosistem motorsport terbesar di Indonesia. 
                Mari tumbuh bersama SuperSpeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Trusted By The Best</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              PARTNER <span className="text-gradient-orange">KAMI</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Kami bangga bermitra dengan brand-brand otomotif roda dua terbaik di dunia
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-[#F5A623] transition-colors">
                    {partner.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#F5A623]/60 font-bold bg-[#F5A623]/10 px-2 py-1 rounded">
                    {partner.type}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Partnership Options</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              JENIS <span className="text-gradient-orange">KEMITRAAN</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg p-8 glow-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{type.icon}</span>
                  <h3 className="font-orbitron text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{type.desc}</p>
                <h4 className="text-xs uppercase tracking-wider text-[#F5A623] font-bold mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-[#F5A623] mt-0.5">▸</span>{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "5,000+", label: "Rider Network" },
              { value: "12", label: "Brand Partners" },
              { value: "50+", label: "Event per Tahun" },
              { value: "100K+", label: "Social Reach" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-[#1A1A1A] carbon-texture rounded-lg glow-border">
                <div className="font-orbitron text-3xl md:text-4xl font-black text-gradient-orange">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-3">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black">
              MARI <span className="text-gradient-orange">BERMITRA</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tertarik menjadi partner SuperSpeed? Hubungi tim business development kami 
              untuk mendiskusikan peluang kemitraan yang saling menguntungkan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Hubungi Kami
              </button>
              <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Download Proposal
              </button>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              Email: partnerships@superspeed.id | WhatsApp: +62 XXX XXXX XXXX
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
