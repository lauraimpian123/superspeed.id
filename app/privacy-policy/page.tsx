"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Dokumen Hukum</span>
            <h1 className="font-orbitron text-4xl md:text-6xl font-black mt-2">
              KEBIJAKAN <span className="text-gradient-orange">PRIVASI</span>
            </h1>
            <p className="text-gray-400 mt-4">Terakhir diperbarui: 25 Juli 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">1. Pendahuluan</h2>
              <p>
                SuperSpeed.id (&ldquo;kami&rdquo;) mengelola data pribadi pelanggan sebagaimana
                diuraikan pada dokumen ini. Kebijakan ini berlaku untuk pembelian melalui
                situs superspeed.id maupun transaksi di gerai kami di Mataram dan Jakarta Barat.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <p className="mb-4">Kami dapat mengumpulkan informasi berikut:</p>
              <ul className="space-y-3">
                {[
                  "Informasi identitas: nama, alamat email, nomor telepon",
                  "Informasi transaksi: riwayat pembelian, detail pembayaran",
                  "Informasi teknis: alamat IP, jenis browser, perangkat yang digunakan",
                  "Informasi penggunaan: halaman yang dikunjungi, durasi kunjungan",
                  "Informasi komunikasi: pesan yang Anda kirimkan kepada kami",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F5A623] mt-0.5">▸</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">3. Penggunaan Informasi</h2>
              <p className="mb-4">Informasi Anda digunakan untuk:</p>
              <ul className="space-y-3">
                {[
                  "Memproses dan mengirimkan pesanan Anda",
                  "Berkomunikasi mengenai produk, layanan, dan promosi",
                  "Meningkatkan pengalaman pengguna di website kami",
                  "Menganalisis tren penggunaan untuk pengembangan layanan",
                  "Memenuhi kewajiban hukum yang berlaku",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F5A623] mt-0.5">▸</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">4. Perlindungan Data</h2>
              <p>
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk 
                melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, 
                atau penghancuran. Ini termasuk enkripsi SSL, firewall, dan pembatasan akses internal.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">5. Berbagi Informasi</h2>
              <p className="mb-4">
                Kami tidak menjual informasi pribadi Anda kepada pihak ketiga. 
                Kami hanya membagikan informasi dengan:
              </p>
              <ul className="space-y-3">
                {[
                  "Penyedia layanan pengiriman untuk memproses pesanan Anda",
                  "Penyedia layanan pembayaran untuk memproses transaksi",
                  "Pihak berwenang jika diwajibkan oleh hukum",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F5A623] mt-0.5">▸</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">6. Cookies</h2>
              <p>
                Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. 
                Cookies membantu kami memahami bagaimana Anda menggunakan website dan memungkinkan 
                kami memberikan konten yang relevan. Anda dapat mengatur preferensi cookies melalui 
                pengaturan browser Anda.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">7. Hak Anda</h2>
              <p className="mb-4">Anda memiliki hak untuk:</p>
              <ul className="space-y-3">
                {[
                  "Mengakses informasi pribadi yang kami simpan tentang Anda",
                  "Meminta koreksi atas informasi yang tidak akurat",
                  "Meminta penghapusan informasi pribadi Anda",
                  "Menolak penggunaan informasi untuk tujuan pemasaran",
                  "Menarik persetujuan yang telah Anda berikan sebelumnya",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#F5A623] mt-0.5">▸</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">8. Retensi Data</h2>
              <p>
                Kami menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan 
                yang diuraikan dalam kebijakan ini, atau selama diwajibkan oleh hukum yang berlaku. 
                Data transaksi disimpan selama minimal 5 tahun sesuai regulasi perpajakan Indonesia.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">9. Perubahan Kebijakan</h2>
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan 
                signifikan akan diinformasikan melalui email atau pemberitahuan di website. 
                Kami mendorong Anda untuk meninjau halaman ini secara berkala.
              </p>
            </section>

            <section>
              <h2 className="font-orbitron text-xl font-bold text-white mb-4">10. Hubungi Kami</h2>
              <p className="mb-4">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan 
                hak Anda terkait data pribadi, silakan hubungi kami:
              </p>
              <div className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border space-y-2">
                <p><strong className="text-white">SuperSpeed.id</strong></p>
                <p>Email: privacy@superspeed.id</p>
                <p>WhatsApp: +62 812-0000-0000</p>
                <p>Alamat: Mataram, Lombok, Nusa Tenggara Barat, Indonesia</p>
              </div>
            </section>
          </div>

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <Link href="/" className="text-[#F5A623] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
