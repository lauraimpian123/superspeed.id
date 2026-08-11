import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artikel Otomotif: Ulasan Part, Panduan Pemasangan, dan Catatan Lintasan | SuperSpeed.id",
  description: "Ulasan part racing, panduan pemasangan, dan catatan pengujian dari lintasan Mandalika. Ditulis oleh tim yang memakai sendiri barang yang mereka jual.",
  openGraph: {
    title: "Artikel Otomotif | SuperSpeed.id",
    description: "Ulasan part, panduan pemasangan, dan catatan pengujian dari lintasan.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "https://superspeed.id/blog" },
};

const categoryColors: Record<string, string> = {
  "Motor Matic": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Superbike & Sport": "bg-red-500/20 text-red-400 border-red-500/30",
  "Motocross & Adventure": "bg-green-500/20 text-green-400 border-green-500/30",
  "Review Part Racing": "bg-[#F5A623]/20 text-[#F5A623] border-[#F5A623]/30",
  WSBK: "bg-red-500/20 text-red-400 border-red-500/30",
  "Motor Baru": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Tips & Tutorial": "bg-green-500/20 text-green-400 border-green-500/30",
  Komparasi: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Race Report": "bg-[#F5A623]/20 text-[#F5A623] border-[#F5A623]/30",
  Regulasi: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function Blog() {
  const dynamicArticles = getAllArticles();

  // Combine dynamic + static fallback articles
  const articles = dynamicArticles.length > 0 ? dynamicArticles : [];

  const featured = articles[0] || null;
  const rest = articles.slice(1);

  // Organization schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Artikel SuperSpeed.id",
    description: "Ulasan part racing, panduan pemasangan, dan catatan pengujian lintasan",
    url: "https://superspeed.id/blog",
    publisher: {
      "@type": "Organization",
      name: "SuperSpeed.id",
      url: "https://superspeed.id",
    },
    inLanguage: "id-ID",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="min-h-screen bg-[#0A0A0A] pt-24">
        {/* Hero */}
        <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
          <Image src="/images/blog-motorsport.png" alt="Blog Otomotif" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

          <div className="relative z-10 h-full flex items-end pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                Catatan dari Gerai dan Lintasan
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                ARTI<span className="text-gradient-orange">KEL</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl mt-3">
                Ulasan part, panduan pemasangan, dan hasil pengujian di Mandalika. Kami
                menuliskan juga produk yang mengecewakan, sebab itu justru yang paling
                sering ditanyakan.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["Semua", "Motor Matic", "Superbike & Sport", "Motocross & Adventure", "Review Part Racing"].map((cat) => (
              <span key={cat} className="px-5 py-2 rounded text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] text-gray-400 border border-white/5">
                {cat}
              </span>
            ))}
          </div>

          {/* No Articles Yet */}
          {articles.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-6">🏍️</div>
              <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
                BELUM <span className="text-gradient-orange">ADA ARTIKEL</span>
              </h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Artikel pertama sedang disusun. Silakan kembali beberapa hari lagi.
              </p>
            </div>
          )}

          {/* Featured Post */}
          {featured && (
            <article className="mb-16">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                      <Image
                        src={featured.featuredImage || "/images/blog-motorsport.png"}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A] hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:hidden" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-[10px] font-bold uppercase tracking-wider rounded">
                          Terbaru
                        </span>
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[featured.category] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                          {featured.category}
                        </span>
                      </div>
                      <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white group-hover:text-[#F5A623] transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-gray-400 mt-4 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
                        <time dateTime={featured.datePublished}>
                          {new Date(featured.datePublished).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                        </time>
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
            </article>
          )}

          {/* Blog Grid */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
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
                        <p className="text-sm text-gray-400 mt-3 leading-relaxed flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                          <time className="text-xs text-gray-500" dateTime={post.datePublished}>
                            {new Date(post.datePublished).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                          </time>
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
                </article>
              ))}
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-24 p-12 bg-[#1A1A1A] carbon-texture rounded-lg glow-border text-center">
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold">
              LANGGANAN <span className="text-gradient-orange">ARTIKEL</span>
            </h3>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Layanan langganan surel sedang kami siapkan. Sementara ini, artikel baru
              bisa Anda pantau langsung di halaman ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
              <input type="email" placeholder="email@anda.com"
                className="flex-1 px-5 py-3.5 bg-[#0A0A0A] border border-[#F5A623]/20 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623]/60 transition-colors"
              />
              <button className="btn-racing px-8 py-3.5 rounded text-xs uppercase tracking-wider whitespace-nowrap">
                Langganan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
