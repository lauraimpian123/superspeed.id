"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Science of Aerodynamics in Modern Racing",
    excerpt: "How cutting-edge CFD simulations and wind tunnel testing are redefining downforce, drag reduction, and the pursuit of the perfect lap time.",
    category: "Technology",
    date: "Jul 20, 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Top 10 Essential Safety Gear Every Racer Needs",
    excerpt: "From FIA-certified helmets to HANS devices, a comprehensive breakdown of the must-have equipment that could save your life on track.",
    category: "Safety",
    date: "Jul 18, 2026",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Behind the Scenes: Race Day with SuperSpeed",
    excerpt: "Follow our team through 18 hours of intense preparation, strategy calls, pit stops, and the emotional rollercoaster of a championship race.",
    category: "Team Life",
    date: "Jul 15, 2026",
    readTime: "10 min",
  },
  {
    id: 4,
    title: "Fuel Strategy vs. Speed: Finding the Balance",
    excerpt: "Expert analysis on optimizing your race strategy. When to push, when to conserve, and how fuel loads affect car behavior through a stint.",
    category: "Strategy",
    date: "Jul 12, 2026",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Evolution of Racing Helmets: Past to Future",
    excerpt: "From leather caps to carbon fiber shells with integrated AR displays — how helmet technology has evolved to protect modern racers.",
    category: "Technology",
    date: "Jul 10, 2026",
    readTime: "9 min",
  },
  {
    id: 6,
    title: "Mental Preparation: The Racer's Secret Weapon",
    excerpt: "How elite drivers train their minds to perform under 5G forces, split-second decisions, and the psychological pressure of wheel-to-wheel racing.",
    category: "Psychology",
    date: "Jul 8, 2026",
    readTime: "5 min",
  },
  {
    id: 7,
    title: "Indonesia's Rising Stars in International Motorsport",
    excerpt: "A spotlight on Indonesian drivers making waves in regional and international championships. The future of Southeast Asian racing is here.",
    category: "Features",
    date: "Jul 5, 2026",
    readTime: "8 min",
  },
  {
    id: 8,
    title: "Data-Driven Racing: How Telemetry Wins Championships",
    excerpt: "Inside the world of racing data analysis — how teams use thousands of data points per lap to find hundredths of a second.",
    category: "Technology",
    date: "Jul 3, 2026",
    readTime: "11 min",
  },
];

const categoryColors: Record<string, string> = {
  Technology: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Safety: "bg-green-500/20 text-green-400 border-green-500/30",
  "Team Life": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Strategy: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Psychology: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  Features: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/blog-motorsport.png"
          alt="Motorsport Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                Insights & Stories
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black mt-2">
                RACING <span className="text-gradient-orange">BLOG</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Link href={`/blog/${featured.id}`} className="group block">
              <div className="relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                    <Image
                      src="/images/car-closeup.png"
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-[10px] font-bold uppercase tracking-wider rounded">
                        Featured
                      </span>
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[featured.category]}`}>
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white group-hover:text-[#F5A623] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
                      <span>{featured.date}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <span>{featured.readTime} read</span>
                    </div>
                    <div className="mt-6">
                      <span className="text-[#F5A623] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                        Read Full Article
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
              transition={{ delay: 0.3 + i * 0.08 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="h-full bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border flex flex-col">
                  {/* Top Accent */}
                  <div className="h-1 bg-gradient-to-r from-[#F5A623] to-transparent" />

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category + Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[post.category] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg text-white group-hover:text-[#F5A623] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-400 mt-3 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-[#F5A623] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read
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
            NEVER MISS <span className="text-gradient-orange">AN UPDATE</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Get the latest racing insights, team updates, and exclusive behind-the-scenes 
            content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-[#0A0A0A] border border-[#F5A623]/20 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5A623]/60 transition-colors"
            />
            <button className="btn-racing px-8 py-3.5 rounded text-xs uppercase tracking-wider whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
