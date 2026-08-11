"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/hero-fnf.png"
            alt="Gerai dan lintasan SuperSpeed.id"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
        </motion.div>

        {/* Speed Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="speed-line absolute w-full"
              style={{
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <motion.div initial="hidden" animate="visible" className="space-y-6">
                <motion.div variants={fadeUp} custom={0}>
                  <span className="inline-block px-4 py-1.5 bg-[#F5A623]/10 border border-[#F5A623]/30 rounded text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                    Toko Part Racing, Online dan Offline
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={1} className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white">SUPER</span>
                  <span className="text-gradient-orange">SPEED</span>
                  <br />
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">PART RACING</span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                  437 produk dalam tujuh kategori, mulai dari kampas rem harian sampai
                  suspensi spesifikasi balap. Pesan online dan kami kirim ke seluruh
                  Indonesia, atau datang langsung ke gerai kami di Mataram dan Jakarta Barat.
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-2">
                  <Link href="/speed-shop" className="btn-racing px-8 py-4 rounded text-sm uppercase tracking-wider">
                    Lihat Katalog
                  </Link>
                  <Link href="#contact" className="btn-outline-racing px-8 py-4 rounded text-sm uppercase tracking-wider">
                    Alamat Gerai
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20" />
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="relative z-30 -mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 bg-[#1A1A1A] carbon-texture rounded-lg border border-[#F5A623]/10 overflow-hidden"
          >
            {[
              { value: "437", label: "Produk Aktif" },
              { value: "12", label: "Brand Resmi" },
              { value: "2", label: "Gerai Fisik" },
              { value: "6.842", label: "Pesanan Terkirim" },
            ].map((stat, i) => (
              <div key={i} className={`p-8 text-center ${i < 3 ? "border-r border-white/5" : ""} hover:bg-[#F5A623]/5 transition-colors duration-300`}>
                <div className="font-orbitron text-3xl md:text-4xl font-black text-gradient-orange">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ DUAL WORLD: CARS + MOTOGP ═══════════════════ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Dua Kebutuhan yang Berbeda</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              HARIAN & <span className="text-gradient-orange">SIRKUIT</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              Part untuk pemakaian harian dan part untuk balapan punya tuntutan yang
              berlainan. Kami memisahkan keduanya di katalog supaya Anda tidak membeli
              barang yang salah.
            </p>
          </motion.div>

          {/* Cars Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-lg overflow-hidden glow-border"
            >
              <div className="relative h-80">
                <Image src="/images/hero-fnf.png" alt="Pemakaian harian di jalan raya" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Pemakaian Harian</span>
                <h3 className="font-orbitron text-2xl font-bold text-white mt-2">Jalan Raya dan Touring</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Kampas rem yang tahan macet, suspensi yang nyaman di jalan berlubang,
                  knalpot yang lolos uji emisi. Umur pakai lebih penting daripada angka tenaga.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-lg overflow-hidden glow-border"
            >
              <div className="relative h-80">
                <Image src="/images/motogp-action.png" alt="Pemakaian di sirkuit" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Sirkuit dan Track Day</span>
                <h3 className="font-orbitron text-2xl font-bold text-white mt-2">Spesifikasi Balap</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Part yang dirancang untuk satu tujuan saja, yaitu bertahan pada suhu dan
                  beban tinggi. Sebagian di antaranya tidak legal dipakai di jalan umum, dan
                  kami akan memberi tahu Anda yang mana.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Car Lineup Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-lg overflow-hidden glow-border"
          >
            <div className="relative h-72 md:h-96">
              <Image src="/images/fnf-lineup.png" alt="Konsultasi kecocokan part" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Sebelum Anda Membayar</span>
              <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mt-2">
                PASTIKAN DULU KECOCOKANNYA
              </h3>
              <p className="text-gray-400 mt-3 max-w-xl leading-relaxed">
                Keluhan paling sering yang kami terima bukan soal kualitas barang, melainkan
                soal part yang ternyata tidak cocok dengan motornya. Kirimkan tipe dan tahun
                motor Anda lewat WhatsApp sebelum memesan. Kami cek kecocokannya tanpa biaya,
                dan kalau memang tidak cocok, kami katakan apa adanya.
              </p>
              <Link href="/speed-shop" className="inline-block mt-6 btn-racing px-8 py-3 rounded text-sm uppercase tracking-wider">
                Lihat Katalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ MANDALIKA CIRCUIT ═══════════════════ */}
      <section className="py-24 bg-[#0A0A0A] tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden glow-border">
                <Image src="/images/mandalika-circuit.png" alt="Denah Sirkuit Mandalika" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Tempat Kami Menguji</span>
              <h2 className="font-orbitron text-4xl md:text-5xl font-black leading-tight">
                SIRKUIT
                <br />
                <span className="text-gradient-orange">MANDALIKA</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Gerai pertama kami berjarak sekitar satu jam berkendara dari Pertamina
                Mandalika International Circuit. Kedekatan ini bukan kebetulan. Sebagian
                besar part yang masuk katalog sudah lebih dulu dipakai tim kami di lintasan
                sepanjang 4,31 km ini, dan beberapa di antaranya tidak lolos.
              </p>
              <ul className="space-y-3">
                {[
                  "Panjang lintasan 4,31 km dengan 17 tikungan",
                  "Bersertifikat FIM Grade A",
                  "Menjadi tuan rumah MotoGP Indonesia sejak 2022",
                  "Tim kami berlatih dan menguji part di sini sepanjang tahun",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#F5A623] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-6 pt-4">
                {[
                  { value: "4,31 km", label: "Panjang Lintasan" },
                  { value: "17", label: "Tikungan" },
                  { value: "FIM A", label: "Sertifikasi" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-orbitron text-2xl font-black text-gradient-orange">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MOTOGP SHOWCASE ═══════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-lg overflow-hidden glow-border"
          >
            <div className="relative h-72 md:h-[500px]">
              <Image src="/images/motogp-straight.png" alt="Pengujian part di lintasan" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Alasan Kami Layak Dipercaya</span>
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mt-3">
                DIPAKAI DULU,
                <br />
                <span className="text-gradient-orange">BARU DIJUAL</span>
              </h2>
              <p className="text-gray-300 mt-4 max-w-xl leading-relaxed">
                SuperSpeed berdiri sebagai tim balap pada 2021, dua tahun sebelum gerai
                pertama buka. Urutan itu penting. Kami mulai menjual part karena sudah
                terlebih dahulu tahu part mana yang bertahan satu musim penuh dan part mana
                yang habis dalam tiga kali sesi.
              </p>
              <Link href="/racing-team" className="inline-block mt-6 btn-racing px-8 py-3 rounded text-sm uppercase tracking-wider">
                Lihat Tim Balap Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED SECTIONS ═══════════════════ */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Jelajahi</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              TIGA HALAMAN <span className="text-gradient-orange">UTAMA</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Katalog Part",
                desc: "437 produk yang dikelompokkan ke dalam tujuh kategori, dari sistem pengereman sampai perlengkapan berkendara. Harga tercantum apa adanya, belum termasuk pemasangan.",
                image: "/images/speed-shop-banner.png",
                link: "/speed-shop",
                cta: "Buka Katalog",
              },
              {
                title: "Tim Balap",
                desc: "Empat rider di tiga kelas kejuaraan nasional, plus kru pendukung di belakangnya. Halaman ini berisi hasil balapan musim berjalan, termasuk yang tidak naik podium.",
                image: "/images/racing-team.png",
                link: "/racing-team",
                cta: "Lihat Tim",
              },
              {
                title: "Artikel",
                desc: "Ulasan part, panduan pemasangan, dan catatan dari lintasan. Ditulis untuk pembaca yang sudah tahu bedanya kampas sinter dan kampas organik.",
                image: "/images/blog-motorsport.png",
                link: "/blog",
                cta: "Baca Artikel",
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Link href={item.link} className="group block">
                  <div className="relative overflow-hidden rounded-lg glow-border bg-[#1A1A1A]">
                    <div className="relative h-64 overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                    </div>
                    <div className="p-8 -mt-8 relative">
                      <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-[#F5A623] transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                      <span className="text-[#F5A623] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                        {item.cta}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PRODUCT ═══════════════════ */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden glow-border">
                <Image src="/images/helmet-product.png" alt="Helm Arai RX-7V Evo" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#F5A623]/20 rounded-lg" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#F5A623]/10 rounded-lg" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Produk Pilihan Bulan Ini</span>
              <h2 className="font-orbitron text-4xl md:text-5xl font-black leading-tight">
                ARAI<br /><span className="text-gradient-orange">RX-7V EVO</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Helm yang dipakai Rangga dan Yudha sepanjang musim 2026 di kelas Superbike.
                Bobotnya tidak seringan beberapa pesaing di kelas harga yang sama, tetapi
                bentuk batok kepalanya cocok untuk kebanyakan pengguna Asia. Itu alasan
                utama kami menyimpannya di rak.
              </p>
              <ul className="space-y-3">
                {[
                  "Sertifikasi Snell M2020",
                  "Batok PB-SNC2 dengan lapisan serat khusus",
                  "Visor VAS-V ProShade, bidang pandang lebih lebar ke samping",
                  "Ukuran S sampai XL. Ukuran XXL harus indent sekitar tiga minggu.",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#F5A623] mt-0.5">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/speed-shop" className="inline-block btn-racing px-8 py-4 rounded text-sm uppercase tracking-wider">
                Rp 15.800.000 di Katalog
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-32 overflow-hidden" id="contact">
        <div className="absolute inset-0">
          <Image src="/images/drift-night.png" alt="Gerai SuperSpeed pada malam hari" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black">
              PESAN ONLINE<br /><span className="text-gradient-orange">ATAU DATANG LANGSUNG</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Pengiriman berangkat setiap hari kerja sebelum pukul 15.00 dan gratis untuk
              pembelian di atas Rp 5.000.000. Kalau Anda ingin memegang barangnya dulu,
              dua gerai kami buka Senin sampai Sabtu.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left pt-2">
              {[
                {
                  city: "Gerai Mataram",
                  area: "Mataram, Lombok, Nusa Tenggara Barat",
                  hours: "Senin sampai Sabtu, 09.00 sampai 18.00 WITA",
                  note: "Melayani pemasangan di tempat dengan perjanjian.",
                },
                {
                  city: "Gerai Jakarta",
                  area: "Kebon Jeruk, Jakarta Barat",
                  hours: "Senin sampai Sabtu, 09.00 sampai 18.00 WIB",
                  note: "Stok lebih terbatas dibanding Mataram. Tanyakan dulu sebelum datang.",
                },
              ].map((outlet) => (
                <div key={outlet.city} className="bg-[#1A1A1A]/80 carbon-texture rounded-lg p-6 glow-border">
                  <h3 className="font-orbitron text-lg font-bold text-white">{outlet.city}</h3>
                  <p className="text-gray-400 text-sm mt-2">{outlet.area}</p>
                  <p className="text-gray-400 text-sm">{outlet.hours}</p>
                  <p className="text-gray-500 text-xs mt-3 leading-relaxed">{outlet.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/speed-shop" className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">Lihat Katalog</Link>
              <Link href="/about" className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">Tentang Kami</Link>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              WhatsApp +62 812-0000-0000 atau surel halo@superspeed.id
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
