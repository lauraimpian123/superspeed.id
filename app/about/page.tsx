"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "🏁",
    title: "Kami Pakai Dulu",
    desc: "Produk masuk katalog setelah dipakai tim kami minimal satu musim. Cara ini membuat pilihan kami lebih sempit dibanding toko lain, tetapi kami bisa menjawab pertanyaan teknis apa pun tentang barang yang kami jual.",
  },
  {
    icon: "🤝",
    title: "Terus Terang soal Stok",
    desc: "Kalau barang kosong, kami bilang kosong, bukan menawarkan penggantinya seolah-olah setara. Perkiraan waktu indent yang kami sampaikan adalah perkiraan sebenarnya, termasuk ketika jawabannya mengecewakan.",
  },
  {
    icon: "⚡",
    title: "Teknis Sebelum Penjualan",
    desc: "Staf gerai kami dilatih untuk menolak penjualan yang salah. Kalau motor Anda tidak butuh suspensi seharga dua puluh delapan juta, mereka akan mengatakannya, meskipun barangnya ada di rak.",
  },
  {
    icon: "🇮🇩",
    title: "Berbasis di Lombok",
    desc: "Kantor dan gudang utama kami di Mataram, bukan di Jakarta. Konsekuensinya, pengiriman ke Jawa butuh sehari lebih lama, dan itu sudah kami perhitungkan dalam estimasi yang Anda terima.",
  },
];

const milestones = [
  { year: "2021", title: "Tim Balap Dibentuk", desc: "SuperSpeed Racing Team mulai berkompetisi di kejuaraan Superbike nasional. Dua rider, satu mekanik, satu truk pinjaman." },
  { year: "2022", title: "Awal Mula Usaha Toko", desc: "Tim lain di paddock Mandalika mulai menitip pesanan part lewat jalur impor kami. Belum ada toko, belum ada gudang, hanya catatan di buku." },
  { year: "2023", title: "Gerai Pertama di Mataram", desc: "Gerai fisik pertama dibuka dengan 60 produk. Sebagian besar adalah part yang sudah dipakai tim sendiri." },
  { year: "2024", title: "Toko Online Beroperasi", desc: "superspeed.id mulai melayani pesanan dari luar Lombok. Pengiriman menjangkau seluruh Indonesia." },
  { year: "2025", title: "Gerai Kedua di Jakarta", desc: "Gerai Kebon Jeruk dibuka untuk memangkas waktu kirim ke Jawa. Kapasitas stoknya lebih kecil daripada Mataram." },
  { year: "2026", title: "437 Produk, 12 Brand", desc: "Katalog mencapai 437 produk aktif. Tim balap tetap berjalan di tiga kelas dan tetap menjadi tempat kami menguji barang." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image src="/images/racing-team.png" alt="Tim SuperSpeed.id" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Riwayat Singkat</span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                TENTANG <span className="text-gradient-orange">KAMI</span>
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
                <strong className="text-white">SuperSpeed.id</strong> hari ini adalah toko part racing
                dengan 437 produk, dua gerai fisik, dan pengiriman ke seluruh Indonesia. Tetapi
                kami tidak memulainya sebagai toko.
              </p>
              <p>
                Pada 2021 kami hanya tim balap kecil di Lombok. Dua rider, satu mekanik, dan
                satu truk pinjaman untuk mengangkut motor ke Mandalika. Anggaran kami terbatas,
                jadi kami belajar dengan cara yang tidak menyenangkan: membeli part murah,
                melihatnya rusak di tengah sesi, lalu membeli lagi.
              </p>
              <p>
                Pengalaman itu meninggalkan satu pelajaran yang sekarang jadi dasar cara kami
                berdagang. <span className="text-[#F5A623]">Harga part yang paling mahal adalah
                harga part yang harus dibeli dua kali.</span> Sejak itu kami mencatat betul
                merek mana yang bertahan satu musim penuh dan merek mana yang tidak.
              </p>
              <p>
                Catatan itulah yang pada 2022 membuat tim lain di paddock mulai menitip
                pesanan lewat kami. Permintaannya terus bertambah sampai kami membuka gerai
                sendiri di Mataram pada 2023, lalu toko online setahun berikutnya, dan gerai
                Jakarta pada 2025.
              </p>
              <p>
                Tim balap kami masih berjalan sampai sekarang di tiga kelas nasional. Fungsinya
                sudah berubah. Sekarang tim itu adalah tempat kami menguji barang sebelum
                menawarkannya kepada Anda, dan tidak semua barang lolos pengujian tersebut.
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
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Visi</span>
              <h2 className="font-orbitron text-3xl font-black mt-4 mb-6">
                VISI <span className="text-gradient-orange">KAMI</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Menjadi toko part racing yang jawabannya dipercaya, bukan yang katalognya
                paling panjang. Kami ingin pembeli datang kembali karena saran kami terbukti
                benar di jalan, bukan karena harga kami paling murah pada satu transaksi.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#1A1A1A] carbon-texture rounded-lg p-10 glow-border"
            >
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Misi</span>
              <h2 className="font-orbitron text-3xl font-black mt-4 mb-6">
                MISI <span className="text-gradient-orange">KAMI</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Menguji setiap produk di lintasan sebelum memasukkannya ke katalog",
                  "Menyebut harga, waktu kirim, dan status stok apa adanya sejak awal",
                  "Menolak penjualan yang tidak sesuai kebutuhan pembeli",
                  "Menjaga tim balap tetap berjalan sebagai sarana pengujian, bukan sarana promosi",
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
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Pegangan Kami</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              EMPAT <span className="text-gradient-orange">PRINSIP</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              Keempatnya punya konsekuensi yang merugikan kami sendiri, dan itu memang
              disengaja.
            </p>
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
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Urutan Kejadian</span>
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
              ADA YANG INGIN <span className="text-gradient-orange">DITANYAKAN?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Pertanyaan teknis soal kecocokan part biasanya kami balas pada hari yang sama
              selama jam kerja. Untuk urusan kemitraan dan lamaran kerja, balasan bisa
              memakan waktu sampai satu minggu karena ditangani orang yang sama.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="/speed-shop" className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Lihat Katalog
              </Link>
              <Link href="/careers" className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Lowongan Kerja
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
