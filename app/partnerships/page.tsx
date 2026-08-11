"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const currentPartners = [
  { name: "Honda", type: "Pabrikan", desc: "Part orisinal Honda Racing untuk model sport dan balap." },
  { name: "Yamaha", type: "Pabrikan", desc: "Part orisinal Yamaha Racing dan aksesori performa." },
  { name: "Kawasaki", type: "Pabrikan", desc: "Part performa Kawasaki, termasuk komponen balap ZX-10RR." },
  { name: "Suzuki", type: "Pabrikan", desc: "Part balap Suzuki dan komponen performa seri GSX-R." },
  { name: "Ducati", type: "Mitra Premium", desc: "Katalog Ducati Performance dan part balap Panigale." },
  { name: "BMW Motorrad", type: "Mitra Premium", desc: "Lini part HP dan komponen balap S1000RR." },
  { name: "KTM", type: "Mitra PowerParts", desc: "KTM PowerParts dan aksesori balap seri RC." },
  { name: "Aprilia", type: "Mitra Balap", desc: "Part Aprilia Racing dan komponen performa RSV4." },
  { name: "Brembo", type: "Mitra Pengereman", desc: "Sistem pengereman Brembo Racing, caliper, dan master rem." },
  { name: "Husqvarna", type: "Mitra", desc: "Perlengkapan berkendara dan aksesori performa Husqvarna." },
  { name: "MV Agusta", type: "Mitra Premium", desc: "Part orisinal dan aksesori edisi terbatas MV Agusta." },
  { name: "Triumph", type: "Mitra", desc: "Aksesori orisinal dan part performa Triumph." },
];

const partnershipTypes = [
  {
    title: "Distribusi Produk",
    icon: "🏷️",
    desc: "Kami menjadi penyalur produk Anda di Indonesia, dengan penempatan di katalog online dan di kedua gerai fisik.",
    benefits: [
      "Penempatan di katalog online dan rak gerai",
      "Pengujian produk oleh tim balap kami sebelum dipasarkan",
      "Laporan penjualan per kuartal",
      "Kami minta hak retur untuk barang cacat produksi",
    ],
  },
  {
    title: "Sponsor Tim Balap",
    icon: "🏎️",
    desc: "Menempelkan merek Anda pada motor dan perlengkapan tim sepanjang musim kejuaraan nasional.",
    benefits: [
      "Logo pada bodi motor dan wearpack rider",
      "Penyebutan pada unggahan media sosial tim",
      "Akses ke area paddock pada hari balapan",
      "Musim berjalan dari Maret sampai November",
    ],
  },
  {
    title: "Pengembangan Teknis",
    icon: "🔧",
    desc: "Kami menguji produk Anda di Mandalika dan menyerahkan datanya, termasuk ketika hasilnya buruk.",
    benefits: [
      "Pengujian di kondisi aspal panas Mandalika",
      "Data telemetri mentah, bukan hanya ringkasan",
      "Catatan keluhan dari rider dan mekanik",
      "Laporan diserahkan apa adanya tanpa penyaringan",
    ],
  },
  {
    title: "Acara dan Komunitas",
    icon: "🎪",
    desc: "Kerja sama penyelenggaraan track day dan kelas teknis untuk komunitas pengendara di Lombok dan Jakarta.",
    benefits: [
      "Penyelenggaraan track day bersama",
      "Kelas teknis perawatan dan setelan",
      "Peluncuran produk di gerai",
      "Skala acara kami umumnya di bawah 200 peserta",
    ],
  },
];

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image src="/images/fnf-lineup.png" alt="Kemitraan SuperSpeed.id" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Untuk Merek dan Distributor</span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                KEMIT<span className="text-gradient-orange">RAAN</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mt-3">
                Empat bentuk kerja sama yang kami buka, lengkap dengan apa yang Anda dapat
                dan apa yang kami minta sebagai imbalannya.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Yang Sudah Berjalan</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              DUA BELAS <span className="text-gradient-orange">MITRA</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              Dua belas merek ini terikat perjanjian distribusi resmi dengan kami. Katalog
              kami memuat lebih banyak merek daripada daftar ini, sebab sebagian kami impor
              sendiri tanpa keagenan. Kami tidak mencantumkan merek yang hubungannya baru
              sebatas pembicaraan awal.
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
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Pilihan yang Tersedia</span>
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
                <h4 className="text-xs uppercase tracking-wider text-[#F5A623] font-bold mb-3">Yang Anda dapat:</h4>
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
              { value: "6.842", label: "Pesanan Terkirim" },
              { value: "12", label: "Mitra Aktif" },
              { value: "437", label: "Produk di Katalog" },
              { value: "2", label: "Gerai Fisik" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-[#1A1A1A] carbon-texture rounded-lg glow-border">
                <div className="font-orbitron text-3xl md:text-4xl font-black text-gradient-orange">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-3">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          <p className="text-xs text-gray-500 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            Angka pesanan dihitung sejak gerai pertama buka pada 2023 sampai kuartal
            berjalan. Kami tidak mencantumkan angka jangkauan media sosial karena metrik itu
            terlalu mudah dibesarkan dan tidak menggambarkan daya beli.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black">
              MARI <span className="text-gradient-orange">BERMITRA</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Kirimkan profil perusahaan dan daftar produk Anda melalui surel. Kami membaca
              semuanya, tetapi balasan bisa memakan waktu sampai satu minggu karena urusan
              kemitraan ditangani langsung oleh Team Principal. Untuk produk yang belum
              pernah kami uji, kami biasanya minta sampel lebih dulu sebelum membahas angka.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Kirim Profil Perusahaan
              </button>
              <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Unduh Berkas Kemitraan
              </button>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              Surel partnerships@superspeed.id atau WhatsApp +62 812-0000-0000
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
