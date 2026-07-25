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
            alt="SuperSpeed Racing"
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
                    Indonesia's #1 Racing Team
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} custom={1} className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white">SUPER</span>
                  <span className="text-gradient-orange">SPEED</span>
                  <br />
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">RACING TEAM</span>
                </motion.h1>

                <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                  From street racing to MotoGP circuits. Championship-winning performance, professional racing gear, and the spirit of speed — all under one roof.
                </motion.p>

                <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 pt-2">
                  <Link href="/speed-shop" className="btn-racing px-8 py-4 rounded text-sm uppercase tracking-wider">
                    Explore Speed Shop
                  </Link>
                  <Link href="/racing-team" className="btn-outline-racing px-8 py-4 rounded text-sm uppercase tracking-wider">
                    Meet The Team
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
              { value: "150+", label: "Race Wins", icon: "🏆" },
              { value: "35", label: "Championships", icon: "🥇" },
              { value: "500+", label: "Products", icon: "🛒" },
              { value: "24/7", label: "Support", icon: "📞" },
            ].map((stat, i) => (
              <div key={i} className={`p-8 text-center ${i < 3 ? "border-r border-white/5" : ""} hover:bg-[#F5A623]/5 transition-colors duration-300`}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-orbitron text-3xl md:text-4xl font-black text-gradient-orange">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ DUAL WORLD: CARS + MOTOGP ═══════════════════ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Two Worlds, One Passion</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              STREET & <span className="text-gradient-orange">CIRCUIT</span>
            </h2>
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
                <Image src="/images/hero-fnf.png" alt="Street Racing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Street Division</span>
                <h3 className="font-orbitron text-2xl font-bold text-white mt-2">JDM & Street Racing</h3>
                <p className="text-gray-400 text-sm mt-2">Modified imports, turbo builds, drift machines. The underground racing culture runs in our blood.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-lg overflow-hidden glow-border"
            >
              <div className="relative h-80">
                <Image src="/images/motogp-action.png" alt="MotoGP Racing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Circuit Division</span>
                <h3 className="font-orbitron text-2xl font-bold text-white mt-2">MotoGP & Track Racing</h3>
                <p className="text-gray-400 text-sm mt-2">Professional circuit racing at the highest level. Knee down, full lean, 350km/h. Pure adrenaline.</p>
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
              <Image src="/images/fnf-lineup.png" alt="Car Lineup" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">The Fleet</span>
              <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mt-2">BUILT FOR THE STREETS</h3>
              <p className="text-gray-400 mt-2 max-w-lg">Custom-built machines. From turbo Skylines to boosted Supras. Every car tells a story of speed, passion, and engineering excellence.</p>
              <Link href="/speed-shop" className="inline-block mt-6 btn-racing px-8 py-3 rounded text-sm uppercase tracking-wider">
                View All Builds
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
                <Image src="/images/mandalika-circuit.png" alt="Mandalika Circuit Layout" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Our Home Circuit</span>
              <h2 className="font-orbitron text-4xl md:text-5xl font-black leading-tight">
                MANDALIKA
                <br />
                <span className="text-gradient-orange">CIRCUIT</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                The Pertamina Mandalika International Street Circuit in Lombok, Indonesia. 
                A 4.3km world-class circuit featuring 17 turns, set against the stunning 
                backdrop of Kuta Mandalika's coastline.
              </p>
              <ul className="space-y-3">
                {[
                  "4.3 km track length — 17 challenging turns",
                  "MotoGP & WSBK host circuit since 2022",
                  "Stunning coastal setting in Lombok, Indonesia",
                  "FIA Grade 1 & FIM Grade A certified",
                  "Home of Indonesian motorsport excellence",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#F5A623] mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-6 pt-4">
                {[
                  { value: "4.3km", label: "Track Length" },
                  { value: "17", label: "Turns" },
                  { value: "2022", label: "MotoGP Debut" },
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
              <Image src="/images/motogp-straight.png" alt="MotoGP Racing" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">MotoGP Class</span>
              <h2 className="font-orbitron text-4xl md:text-6xl font-black text-white mt-3">
                350 KM/H OF
                <br />
                <span className="text-gradient-orange">PURE ADRENALINE</span>
              </h2>
              <p className="text-gray-300 mt-4 max-w-xl">
                Two-wheel warriors battling side by side at impossible speeds. 
                This is MotoGP. This is where legends are made.
              </p>
              <Link href="/racing-team" className="inline-block mt-6 btn-racing px-8 py-3 rounded text-sm uppercase tracking-wider">
                Our Racing Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED SECTIONS ═══════════════════ */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Explore</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              BUILT FOR <span className="text-gradient-orange">CHAMPIONS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Speed Shop",
                desc: "Premium racing gear — helmets, suits, gloves, performance parts. Championship-grade equipment for street and track.",
                image: "/images/speed-shop-banner.png",
                link: "/speed-shop",
                cta: "Browse Shop",
              },
              {
                title: "Racing Team",
                desc: "Meet our championship squad. Street racers, MotoGP riders, world-class engineers united by the pursuit of speed.",
                image: "/images/racing-team.png",
                link: "/racing-team",
                cta: "Meet The Team",
              },
              {
                title: "Motorsport Blog",
                desc: "Race recaps, tech analysis, behind-the-scenes stories from MotoGP paddock to underground street racing scenes.",
                image: "/images/blog-motorsport.png",
                link: "/blog",
                cta: "Read Articles",
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
                <Image src="/images/helmet-product.png" alt="Featured Helmet" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#F5A623]/20 rounded-lg" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#F5A623]/10 rounded-lg" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Featured Product</span>
              <h2 className="font-orbitron text-4xl md:text-5xl font-black leading-tight">
                NEXUS PRO<br /><span className="text-gradient-orange">CARBON HELMET</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Engineered for the ultimate in protection and aerodynamics. Full carbon fiber shell, advanced ventilation system, and FIA 8859-2015 certified. The choice of champions.
              </p>
              <ul className="space-y-3">
                {[
                  "Full carbon fiber construction — 1,250g ultralight",
                  "Advanced anti-fog visor with tear-off system",
                  "FIA 8859-2015 & Snell SA2020 certified",
                  "Integrated hydration & communication system",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#F5A623] mt-0.5">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/speed-shop" className="inline-block btn-racing px-8 py-4 rounded text-sm uppercase tracking-wider">
                Shop Now — Rp 28.000.000
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative py-32 overflow-hidden" id="contact">
        <div className="absolute inset-0">
          <Image src="/images/drift-night.png" alt="Night Racing" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="font-orbitron text-4xl md:text-6xl font-black">
              READY TO<br /><span className="text-gradient-orange">RACE WITH US?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Whether you're a street racer, MotoGP enthusiast, or looking for championship-grade equipment — we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/speed-shop" className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">Visit Speed Shop</Link>
              <Link href="/racing-team" className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">Join Racing Team</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
