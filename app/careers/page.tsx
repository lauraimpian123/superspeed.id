"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const openPositions = [
  {
    title: "Race Mechanic",
    department: "Racing Team",
    location: "Lombok, NTB",
    type: "Full-time",
    urgent: true,
    requirements: [
      "Pengalaman minimal 3 tahun sebagai mekanik motor sport/racing",
      "Familiar dengan Ducati, Kawasaki, atau Yamaha racing platform",
      "Mampu bekerja di bawah tekanan saat race day",
      "Bersedia travel untuk kejuaraan di luar daerah",
    ],
  },
  {
    title: "Junior Development Rider",
    department: "Racing Team",
    location: "Lombok, NTB",
    type: "Contract",
    urgent: true,
    requirements: [
      "Usia 16-22 tahun dengan pengalaman balap minimal 2 tahun",
      "Memiliki lisensi balap IMI yang masih aktif",
      "Track record podium di kejuaraan regional/nasional",
      "Komitmen penuh untuk program development 1 tahun",
    ],
  },
  {
    title: "Sales & Product Specialist",
    department: "Speed Shop",
    location: "Lombok / Jakarta",
    type: "Full-time",
    requirements: [
      "Pengetahuan mendalam tentang part motor racing",
      "Pengalaman sales minimal 2 tahun (otomotif diutamakan)",
      "Komunikasi yang baik dan customer-oriented",
      "Familiar dengan brand-brand racing (Brembo, Öhlins, Akrapovič, dll)",
    ],
  },
  {
    title: "Data Engineer / Telemetry Analyst",
    department: "Racing Team",
    location: "Lombok, NTB",
    type: "Full-time",
    requirements: [
      "Background IT/engineering dengan kemampuan analisis data",
      "Pengalaman dengan telemetry systems (MoTeC, AiM, dll)",
      "Mampu menginterpretasi data suspensi, ECU, dan GPS",
      "Passion terhadap motorsport",
    ],
  },
  {
    title: "Content Creator & Social Media",
    department: "Marketing",
    location: "Remote / Lombok",
    type: "Full-time",
    requirements: [
      "Pengalaman membuat konten otomotif/motorsport",
      "Skill fotografi dan videografi (terutama action shots)",
      "Familiar dengan Instagram, YouTube, dan TikTok",
      "Mampu hadir di event balap untuk coverage",
    ],
  },
  {
    title: "Warehouse & Logistics Staff",
    department: "Speed Shop",
    location: "Jakarta",
    type: "Full-time",
    requirements: [
      "Pengalaman di gudang/logistik minimal 1 tahun",
      "Teliti dalam pengelolaan inventory",
      "Familiar dengan sistem pengiriman JNE, J&T, dll",
      "Mampu mengangkat barang hingga 20kg",
    ],
  },
];

const perks = [
  { icon: "🏍️", title: "Akses Part Racing", desc: "Diskon eksklusif untuk semua produk di Speed Shop" },
  { icon: "🏁", title: "Track Day Gratis", desc: "Akses gratis ke semua event track day SuperSpeed" },
  { icon: "🎓", title: "Training & Development", desc: "Program pelatihan berkala dari expert internasional" },
  { icon: "🏥", title: "BPJS & Asuransi", desc: "BPJS Kesehatan, Ketenagakerjaan, dan asuransi tambahan" },
  { icon: "✈️", title: "Travel ke Event", desc: "Perjalanan ke event balap nasional dan internasional" },
  { icon: "👕", title: "Team Merchandise", desc: "Full set riding gear dan apparel SuperSpeed Racing" },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image src="/images/hero-fnf.png" alt="Careers" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Join The Team</span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                KARIR DI <span className="text-gradient-orange">SUPERSPEED</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mt-3">
                Jadikan passion Anda terhadap kecepatan menjadi karir. 
                Kami mencari orang-orang terbaik untuk bergabung dengan keluarga SuperSpeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Why SuperSpeed</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              KENAPA GABUNG <span className="text-gradient-orange">KAMI?</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Di SuperSpeed, Anda bukan sekadar karyawan — Anda adalah bagian dari tim yang 
              mengejar kemenangan. Setiap hari adalah race day.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border group text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{perk.icon}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-[#F5A623] transition-colors">{perk.title}</h3>
                <p className="text-sm text-gray-400">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 tech-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Open Positions</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              POSISI <span className="text-gradient-orange">TERSEDIA</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((pos, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-xl text-white">{pos.title}</h3>
                        {pos.urgent && (
                          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider rounded border border-red-500/30">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-xs text-[#F5A623] font-semibold">{pos.department}</span>
                        <span className="text-xs text-gray-500">📍 {pos.location}</span>
                        <span className="text-xs text-gray-500">⏰ {pos.type}</span>
                      </div>
                    </div>
                    <button className="btn-racing px-6 py-2.5 rounded text-xs uppercase tracking-wider">
                      Apply
                    </button>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {pos.requirements.map((req, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="text-[#F5A623] mt-0.5">▸</span>{req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#F5A623] to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-orbitron text-3xl md:text-4xl font-black">
              TIDAK ADA POSISI <span className="text-gradient-orange">YANG COCOK?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kirimkan CV dan portfolio Anda. Kami selalu tertarik dengan orang-orang berbakat 
              yang memiliki passion terhadap motorsport.
            </p>
            <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
              Kirim Open Application
            </button>
            <p className="text-sm text-gray-500 pt-4">
              Email: careers@superspeed.id
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
