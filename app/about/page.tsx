"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "🏁",
    title: "Race-First Mentality",
    desc: "Semua yang kami lakukan dimulai dari sirkuit. Setiap part yang kami jual, setiap keputusan yang kami ambil, didasari pengalaman nyata di lintasan balap.",
  },
  {
    icon: "🤝",
    title: "Trust & Transparency",
    desc: "Kami hanya menjual part original dengan garansi resmi. Tidak ada barang KW, tidak ada kompromi. Kepercayaan pelanggan adalah segalanya.",
  },
  {
    icon: "⚡",
    title: "Innovation",
    desc: "Selalu mengadopsi teknologi terbaru dari dunia motorsport. Dari material carbon fiber hingga ECU tuning — kami membawa yang terbaik ke Indonesia.",
  },
  {
    icon: "🇮🇩",
    title: "Indonesian Pride",
    desc: "Bangga menjadi tim balap dan toko part racing dari Indonesia. Misi kami: membuktikan bahwa Indonesia bisa bersaing di level internasional.",
  },
];

const milestones = [
  { year: "2021", title: "Tim Didirikan", desc: "SuperSpeed Racing Team resmi didirikan di Lombok, NTB. Debut di kejuaraan Superbike nasional dengan 2 rider." },
  { year: "2022", title: "MotoGP Mandalika", desc: "Berpartisipasi sebagai wildcard di support race MotoGP Indonesia. Pengalaman yang mengubah visi tim selamanya." },
  { year: "2023", title: "Ekspansi Asia", desc: "Double podium perdana di Asia Road Racing Championship (ARRC). SuperSpeed mulai dikenal di kancah regional." },
  { year: "2024", title: "3 Kelas Balap", desc: "Ekspansi ke Superbike, Supersport 600, dan Supersport 300. Program development rider junior dimulai." },
  { year: "2025", title: "Juara Nasional + Speed Shop", desc: "Gelar juara ke-5 Superbike nasional. Speed Shop resmi dibuka — dari racing team menjadi toko part racing." },
  { year: "2026", title: "Dominasi Total", desc: "3 wins dalam 3 round. Mengejar gelar juara keenam. Speed Shop berkembang dengan 12 brand partner kelas dunia." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/racing-team.png" alt="About SuperSpeed" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Our Story</span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                ABOUT <span className="text-gradient-orange">US</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                <strong className="text-white">SuperSpeed</strong> lahir dari passion murni terhadap kecepatan. 
                Didirikan tahun 2021 di Lombok, Nusa Tenggara Barat — tepat di samping Sirkuit Mandalika — 
                kami memulai perjalanan sebagai racing team kecil dengan 2 rider dan 1 mekanik.
              </p>
              <p>
                Pengalaman bertahun-tahun di paddock mengajarkan kami satu hal: <span className="text-[#F5A623]">kualitas part 
                menentukan perbedaan antara podium dan DNF</span>. Kami tahu persis mana part yang berkualitas 
                dan mana yang hanya marketing. Pengetahuan ini yang kami bagikan kepada komunitas rider Indonesia.
              </p>
              <p>
                Tahun 2025, SuperSpeed berkembang dari racing team menjadi toko part otomotif racing. 
                Bukan sekadar toko biasa — kami adalah rider yang menjual part untuk rider. Setiap produk 
                yang ada di katalog kami adalah produk yang sama dengan yang kami pasang di motor balap kami.
              </p>
              <p>
                Hari ini, SuperSpeed Racing Team berkompetisi di 3 kelas balap nasional, bermitra dengan 
                12 brand kelas dunia, dan melayani ribuan rider di seluruh Indonesia. Tapi misi kami tetap 
                sama: <span className="text-[#F5A623]">membawa performa racing kelas dunia ke setiap rider Indonesia</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#1A1A1A] carbon-texture rounded-lg p-10 glow-border"
            >
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Vision</span>
              <h2 className="font-orbitron text-3xl font-black mt-4 mb-6">
                VISI <span className="text-gradient-orange">KAMI</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Menjadi racing team dan penyedia part otomotif racing nomor satu di Indonesia, 
                yang diakui di level Asia dan dunia. Membuktikan bahwa talenta dan teknologi 
                Indonesia mampu bersaing di panggung internasional.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#1A1A1A] carbon-texture rounded-lg p-10 glow-border"
            >
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Mission</span>
              <h2 className="font-orbitron text-3xl font-black mt-4 mb-6">
                MISI <span className="text-gradient-orange">KAMI</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Menyediakan part racing original kelas dunia dengan harga terjangkau",
                  "Mengembangkan talenta rider muda Indonesia melalui program development",
                  "Membangun komunitas motorsport yang solid dan saling mendukung",
                  "Membawa nama Indonesia ke podium kejuaraan internasional",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#F5A623] mt-1 font-bold">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">What Drives Us</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              NILAI <span className="text-gradient-orange">KAMI</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg p-8 glow-border group text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#F5A623] transition-colors">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 tech-grid">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Our Journey</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              PERJALANAN <span className="text-gradient-orange">KAMI</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5A623]/50 via-[#F5A623]/20 to-transparent" />
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-[#F5A623] rounded-full -translate-x-1.5 shadow-lg shadow-[#F5A623]/50 z-10" />
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border">
                    <span className="font-orbitron text-2xl font-black text-gradient-orange">{m.year}</span>
                    <h3 className="font-bold text-white mt-2">{m.title}</h3>
                    <p className="text-gray-400 text-sm mt-2">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black">
              JADI BAGIAN DARI <span className="text-gradient-orange">SUPERSPEED</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Apakah Anda rider yang mencari part terbaik, brand yang ingin bermitra, 
              atau talenta yang ingin berkarir di dunia motorsport — kami terbuka untuk Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/speed-shop" className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Kunjungi Speed Shop
              </Link>
              <Link href="/careers" className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Lihat Karir
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
