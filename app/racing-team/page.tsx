"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Marcus Rodriguez",
    nickname: "Lightning",
    role: "Lead Driver",
    number: "07",
    titles: 15,
    wins: 47,
    bio: "Three-time national champion with 15 titles across multiple racing categories. Known for aggressive overtaking and exceptional wet-weather performance.",
  },
  {
    name: "Sarah Chen",
    nickname: "Phoenix",
    role: "Co-Driver",
    number: "23",
    titles: 12,
    wins: 38,
    bio: "Rising star turned champion. Holds the record for youngest female driver to win a national title. Expert in endurance racing and strategic positioning.",
  },
  {
    name: "Alex Smith",
    nickname: "Turbo",
    role: "Technical Director",
    number: "—",
    titles: 8,
    wins: 0,
    bio: "Former Formula engineer turned technical mastermind. Responsible for developing our championship-winning aerodynamic packages and suspension setups.",
  },
  {
    name: "Reza Pratama",
    nickname: "Razor",
    role: "Junior Driver",
    number: "88",
    titles: 3,
    wins: 12,
    bio: "Indonesia's most promising young talent. Winner of the national karting championship at age 16. Currently in his breakthrough season in touring cars.",
  },
];

const timeline = [
  { year: "2026", event: "Season Underway — 4 wins in 6 races" },
  { year: "2025", event: "World Championship — Double Title Winner" },
  { year: "2024", event: "Regional Championship — 3x Category Winner" },
  { year: "2023", event: "All-Time Fastest Lap Record — Sentul Circuit" },
  { year: "2022", event: "Team of the Year — National Motorsport Awards" },
  { year: "2020", event: "Team Founded — First Season Entry" },
];

export default function RacingTeam() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] overflow-hidden">
        <Image
          src="/images/racing-team.png"
          alt="Racing Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                The Champions
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black">
                RACING <span className="text-gradient-orange">TEAM</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl">
                Built on passion. Driven by excellence. Every member of our team 
                shares one goal — the top step of the podium.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Championships", value: "35+", accent: true },
              { label: "Race Wins", value: "120+" },
              { label: "Podium Finishes", value: "250+" },
              { label: "Lap Records", value: "12" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 bg-[#1A1A1A] carbon-texture rounded-lg glow-border"
              >
                <div className="font-orbitron text-4xl md:text-5xl font-black text-gradient-orange">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
              Meet The Squad
            </span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              OUR <span className="text-gradient-orange">CHAMPIONS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border"
              >
                <div className="p-8 flex gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#F5A623] to-[#D4891A] rounded-lg flex items-center justify-center">
                    <span className="font-orbitron text-2xl font-black text-black">
                      {member.number}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-bold text-xl text-white group-hover:text-[#F5A623] transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-[#F5A623]/60 text-sm italic">
                        "{member.nickname}"
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#F5A623] font-semibold mt-1">
                      {member.role}
                    </p>

                    {/* Stats Row */}
                    <div className="flex gap-6 mt-4">
                      <div>
                        <div className="font-orbitron text-lg font-bold text-white">{member.titles}</div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500">Titles</div>
                      </div>
                      {member.wins > 0 && (
                        <div>
                          <div className="font-orbitron text-lg font-bold text-white">{member.wins}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">Wins</div>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-[#F5A623] to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 tech-grid">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
              Our Journey
            </span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              CHAMPIONSHIP <span className="text-gradient-orange">LEGACY</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5A623]/50 via-[#F5A623]/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-[#F5A623] rounded-full -translate-x-1.5 shadow-lg shadow-[#F5A623]/50 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border">
                    <span className="font-orbitron text-2xl font-black text-gradient-orange">
                      {item.year}
                    </span>
                    <p className="text-gray-300 mt-2">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-black">
              READY TO <span className="text-gradient-orange">JOIN?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're looking for talented drivers, engineers, mechanics, and support staff 
              who share our passion for excellence and our hunger for victory.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Apply as Driver
              </button>
              <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Join Support Crew
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
