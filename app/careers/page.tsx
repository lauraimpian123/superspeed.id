"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const openPositions = [
  {
    title: "Mekanik Balap",
    department: "Tim Balap",
    location: "Lombok, NTB",
    type: "Penuh Waktu",
    urgent: true,
    requirements: [
      "Pengalaman minimal tiga tahun menangani motor sport atau motor balap",
      "Menguasai platform balap Ducati, Kawasaki, atau Yamaha",
      "Sanggup bekerja pada akhir pekan saat kejuaraan berlangsung",
      "Bersedia melakukan perjalanan dinas ke luar daerah",
    ],
  },
  {
    title: "Rider Program Pembinaan",
    department: "Tim Balap",
    location: "Lombok, NTB",
    type: "Kontrak",
    urgent: true,
    requirements: [
      "Usia 16 sampai 22 tahun dengan pengalaman balap minimal dua tahun",
      "Memiliki lisensi balap IMI yang masih berlaku",
      "Pernah naik podium di kejuaraan tingkat daerah atau nasional",
      "Bersedia mengikuti program pembinaan selama satu tahun penuh",
    ],
  },
  {
    title: "Staf Penjualan dan Produk",
    department: "Toko",
    location: "Lombok atau Jakarta",
    type: "Penuh Waktu",
    requirements: [
      "Menguasai seluk beluk part motor balap, termasuk soal kecocokan",
      "Pengalaman penjualan minimal dua tahun, diutamakan bidang otomotif",
      "Bersedia menolak penjualan yang tidak sesuai kebutuhan pembeli",
      "Mengenal merek seperti Brembo, Öhlins, dan Akrapovič",
    ],
  },
  {
    title: "Analis Telemetri",
    department: "Tim Balap",
    location: "Lombok, NTB",
    type: "Penuh Waktu",
    requirements: [
      "Latar belakang teknik atau teknologi informasi dengan kemampuan analisis data",
      "Pengalaman memakai sistem telemetri seperti MoTeC atau AiM",
      "Mampu membaca data suspensi, ECU, dan GPS lalu menerjemahkannya jadi saran setelan",
      "Bersedia berada di paddock sepanjang akhir pekan kejuaraan",
    ],
  },
  {
    title: "Pembuat Konten dan Media Sosial",
    department: "Pemasaran",
    location: "Lombok atau jarak jauh",
    type: "Penuh Waktu",
    requirements: [
      "Pengalaman membuat konten otomotif atau motorsport",
      "Menguasai fotografi dan videografi, terutama pengambilan gambar bergerak",
      "Terbiasa mengelola Instagram, YouTube, dan TikTok",
      "Bersedia meliput langsung di lokasi balapan",
    ],
  },
  {
    title: "Staf Gudang dan Pengiriman",
    department: "Toko",
    location: "Jakarta",
    type: "Penuh Waktu",
    requirements: [
      "Pengalaman di gudang atau logistik minimal satu tahun",
      "Teliti dalam pencatatan stok, sebab selisih satu unit akan tertelusur",
      "Terbiasa dengan sistem pengiriman JNE, J&T, dan sejenisnya",
      "Mampu mengangkat barang sampai 20 kg",
    ],
  },
];

const perks = [
  { icon: "🏍️", title: "Potongan Harga Part", desc: "Potongan untuk seluruh isi katalog, berlaku setelah masa percobaan tiga bulan." },
  { icon: "🏁", title: "Track Day", desc: "Ikut track day yang kami selenggarakan tanpa biaya pendaftaran. Motor dan perlengkapan pribadi." },
  { icon: "🎓", title: "Pelatihan Teknis", desc: "Pelatihan produk dari pemasok, umumnya dua sampai tiga kali setahun." },
  { icon: "🏥", title: "BPJS dan Asuransi", desc: "BPJS Kesehatan dan Ketenagakerjaan sejak hari pertama, ditambah asuransi kecelakaan kerja." },
  { icon: "✈️", title: "Perjalanan Dinas", desc: "Biaya perjalanan ke putaran kejuaraan ditanggung kantor. Berlaku untuk posisi yang memang perlu hadir." },
  { icon: "👕", title: "Seragam Kerja", desc: "Dua setel seragam per tahun. Perlengkapan berkendara pribadi tidak termasuk." },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image src="/images/hero-fnf.png" alt="Karier di SuperSpeed.id" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Enam Posisi Terbuka</span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                KARIER DI <span className="text-gradient-orange">SUPERSPEED</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mt-3">
                Sebagian besar posisi di sini menuntut kehadiran fisik di gerai atau di
                paddock, termasuk pada akhir pekan saat ada kejuaraan. Pertimbangkan hal itu
                sebelum melamar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Hak Karyawan</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              YANG <span className="text-gradient-orange">ANDA TERIMA</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              Kami tuliskan lengkap dengan syaratnya, supaya tidak ada yang terkejut setelah
              tanda tangan kontrak.
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
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Lowongan Aktif</span>
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
                            Segera
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
                      Lamar
                    </button>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Persyaratan:</h4>
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
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Kirimkan riwayat hidup Anda dan sebutkan posisi yang Anda incar. Berkas yang
              masuk kami simpan selama satu tahun dan kami buka kembali setiap kali ada
              kebutuhan baru. Kami tidak selalu sempat membalas lamaran yang belum ada
              lowongannya, dan kami minta maaf sejak sekarang untuk itu.
            </p>
            <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
              Kirim Lamaran Terbuka
            </button>
            <p className="text-sm text-gray-500 pt-4">
              Surel careers@superspeed.id
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
