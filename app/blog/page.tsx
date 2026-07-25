"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "WSBK Mandalika 2026: Jadwal, Tiket, dan Prediksi Pembalap Tercepat",
    excerpt: "World Superbike Championship kembali ke Sirkuit Mandalika Oktober 2026. Berikut jadwal lengkap, info tiket, dan prediksi siapa yang akan meraih pole position di sirkuit pesisir Lombok.",
    category: "WSBK",
    date: "25 Jul 2026",
    readTime: "8 menit",
    featured: true,
  },
  {
    id: 2,
    title: "Honda CBR250RR SP 2027: Spesifikasi, Harga, dan Fitur Baru",
    excerpt: "Honda resmi merilis CBR250RR SP terbaru dengan quickshifter, ride-by-wire throttle, dan livery baru. Ini yang perlu Anda ketahui sebelum indent.",
    category: "Motor Baru",
    date: "24 Jul 2026",
    readTime: "6 menit",
  },
  {
    id: 3,
    title: "Panduan Lengkap: Cara Memilih Oli Racing yang Tepat untuk Motor Anda",
    excerpt: "Beda motor, beda kebutuhan oli. Dari mineral hingga full synthetic racing grade — panduan lengkap memilih oli yang tepat berdasarkan jenis mesin dan gaya berkendara.",
    category: "Tips & Tutorial",
    date: "22 Jul 2026",
    readTime: "10 menit",
  },
  {
    id: 4,
    title: "Yamaha R15 V4 vs Honda CBR150R: Duel Sport Fairing 150cc Terbaru",
    excerpt: "Perbandingan menyeluruh dua motor sport 150cc terpopuler di Indonesia. Performa, handling, fitur, harga — mana yang lebih worth it untuk daily dan weekend track day?",
    category: "Komparasi",
    date: "20 Jul 2026",
    readTime: "12 menit",
  },
  {
    id: 5,
    title: "SuperSpeed Racing: Recap Round 3 Superbike Mandalika 2026",
    excerpt: "Gerry Izdihar meraih kemenangan ketiga berturut-turut di Round 3 Superbike Mandalika. Recap lengkap race, strategi ban, dan klasemen sementara musim 2026.",
    category: "Race Report",
    date: "18 Jul 2026",
    readTime: "7 menit",
  },
  {
    id: 6,
    title: "Kawasaki ZX-25R 2027: 4 Silinder 250cc Makin Ganas",
    excerpt: "Kawasaki upgrade ZX-25R dengan ECU baru, quickshifter bidirectional, dan tenaga naik 3 HP. Motor 250cc 4 silinder ini makin mendekati performa supersport.",
    category: "Motor Baru",
    date: "16 Jul 2026",
    readTime: "5 menit",
  },
  {
    id: 7,
    title: "5 Upgrade Pertama yang Wajib untuk Motor Sport Anda",
    excerpt: "Baru beli motor sport? Ini 5 upgrade pertama yang paling impactful: dari lever set hingga ECU tuning. Budget-friendly tapi langsung terasa bedanya.",
    category: "Tips & Tutorial",
    date: "14 Jul 2026",
    readTime: "8 menit",
  },
  {
    id: 8,
    title: "Ducati Panigale V4 S 2027 Meluncur di Indonesia: Harga Rp 1.2 Miliar",
    excerpt: "Ducati Indonesia resmi membawa Panigale V4 S terbaru dengan winglet aerodinamika baru dan Öhlins Smart EC 2.0. Monster 1,103cc ini siap menguasai sirkuit.",
    category: "Motor Baru",
    date: "12 Jul 2026",
    readTime: "6 menit",
  },
  {
    id: 9,
    title: "Regulasi Baru IMI 2026: Apa yang Berubah untuk Balap Nasional?",
    excerpt: "Ikatan Motor Indonesia (IMI) mengeluarkan regulasi baru untuk musim 2026. Dari batas berat minimum hingga aturan elektronik, ini yang perlu diketahui setiap tim balap.",
    category: "Regulasi",
    date: "10 Jul 2026",
    readTime: "9 menit",
  },
];

const categoryColors: Record<string, string> = {
  WSBK: "bg-red-500/20 text-red-400 border-red-500/30",
  "Motor Baru": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Tips & Tutorial": "bg-green-500/20 text-green-400 border-green-500/30",
  Komparasi: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Race Report": "bg-[#F5A623]/20 text-[#F5A623] border-[#F5A623]/30",
  Regulasi: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image src="/images/blog-motorsport.png" alt="Blog Otomotif" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                Update Otomotif Indonesia
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                RACING <span className="text-gradient-orange">BLOG</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mt-3">
                Berita terbaru, review motor, tips modifikasi, dan race report langsung dari 
                paddock SuperSpeed Racing Team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Tags */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-3 mb-12">
          {["Semua", "Motor Baru", "Tips & Tutorial", "Race Report", "WSBK", "Komparasi", "Regulasi"].map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] text-gray-400 border border-white/5 hover:border-[#F5A623]/30 hover:text-white transition-all"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featured && (
          <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-16">
            <Link href={`/blog/${featured.id}`} className="group block">
              <div className="relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                    <Image src="/images/mandalika-race.png" alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:hidden" />
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-[10px] font-bold uppercase tracking-wider rounded">
                        Artikel Utama
                      </span>
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[featured.category] || ""}`}>
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white group-hover:text-[#F5A623] transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-gray-400 mt-4 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
                      <span>{featured.date}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <span>{featured.readTime}</span>
                    </div>
                    <div className="mt-6">
                      <span className="text-[#F5A623] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                        Baca Selengkapnya
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="h-full bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border flex flex-col">
                  <div className="h-1 bg-gradient-to-r from-[#F5A623] to-transparent" />

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[post.category] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>

                    <h3 className="font-bold text-lg text-white group-hover:text-[#F5A623] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-[#F5A623] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                        Baca
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-[#1A1A1A] carbon-texture rounded-lg glow-border text-center"
        >
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold">
            UPDATE <span className="text-gradient-orange">OTOMOTIF</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Dapatkan update terbaru tentang motor baru, tips modifikasi, dan race report 
            langsung ke inbox Anda. Gratis, tanpa spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
            <input
              type="email"
              placeholder="email@anda.com"
              className="flex-1 px-5 py-3.5 bg-[#0A0A0A] border border-[#F5A623]/20 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623]/60 transition-colors"
            />
            <button className="btn-racing px-8 py-3.5 rounded text-xs uppercase tracking-wider whitespace-nowrap">
              Langganan
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
