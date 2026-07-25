"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const riders = [
  {
    name: "Andi Farid Izdihar",
    nickname: "Gerry",
    role: "Lead Rider — Superbike",
    number: "07",
    bike: "Ducati Panigale V4 R",
    titles: 5,
    wins: 23,
    bio: "Rider utama SuperSpeed Racing dengan 5 gelar juara nasional. Spesialis cornering cepat dan agresif di braking zone. Konsisten podium di setiap round Superbike Mandalika.",
  },
  {
    name: "Reza Danica Ahrens",
    nickname: "Danica",
    role: "Rider — Supersport 600",
    number: "23",
    bike: "Yamaha YZF-R6",
    titles: 3,
    wins: 15,
    bio: "Talenta muda Indonesia yang menorehkan prestasi cemerlang di kelas Supersport 600. Pemegang fastest lap record di Sirkuit Mandalika untuk kelas 600cc.",
  },
  {
    name: "Ahmad Yudhistira",
    nickname: "Yudist",
    role: "Rider — Superbike",
    number: "88",
    bike: "Kawasaki ZX-10RR",
    titles: 4,
    wins: 18,
    bio: "Veteran Superbike Indonesia dengan pengalaman lebih dari 10 tahun di level nasional dan Asia. Dikenal dengan racecraft yang cerdas dan konsistensi luar biasa.",
  },
  {
    name: "Dwi Aditya",
    nickname: "DwiAdit",
    role: "Junior Rider — Supersport 300",
    number: "41",
    bike: "Kawasaki Ninja 400",
    titles: 1,
    wins: 8,
    bio: "Rising star SuperSpeed Racing dari program development. Juara Supersport 300 tahun lalu dan kini bersiap naik kelas ke Supersport 600 musim depan.",
  },
];

const crew = [
  { name: "Bambang Susanto", role: "Team Principal", desc: "15 tahun pengalaman di manajemen tim balap nasional dan Asia." },
  { name: "Hideki Tanaka", role: "Chief Engineer", desc: "Mantan engineer WSBK Jepang. Ahli setup suspensi dan elektronik." },
  { name: "Agus Setiawan", role: "Head Mechanic", desc: "Tangan emas yang menjaga semua motor dalam performa puncak." },
  { name: "Sari Dewi", role: "Data Analyst", desc: "Spesialis telemetry dan analisis data untuk strategi balapan." },
];

const results2026 = [
  { round: "Round 1", circuit: "Mandalika", rider: "Gerry #07", pos: "1st", cls: "Superbike" },
  { round: "Round 1", circuit: "Mandalika", rider: "Yudist #88", pos: "3rd", cls: "Superbike" },
  { round: "Round 2", circuit: "Mandalika", rider: "Gerry #07", pos: "2nd", cls: "Superbike" },
  { round: "Round 2", circuit: "Mandalika", rider: "Danica #23", pos: "1st", cls: "SS600" },
  { round: "Round 3", circuit: "Mandalika", rider: "Gerry #07", pos: "1st", cls: "Superbike" },
  { round: "Round 3", circuit: "Mandalika", rider: "DwiAdit #41", pos: "2nd", cls: "SS300" },
];

const timeline = [
  { year: "2026", event: "Musim terkuat — 3 wins dalam 3 round, mengejar gelar juara Superbike" },
  { year: "2025", event: "Juara Nasional Superbike — Gelar ke-5 untuk Gerry Izdihar" },
  { year: "2024", event: "Ekspansi ke 3 kelas: Superbike, Supersport 600, Supersport 300" },
  { year: "2023", event: "Double podium perdana di ARRC (Asia Road Racing Championship)" },
  { year: "2022", event: "MotoGP Indonesia di Mandalika — SuperSpeed jadi wildcard support race" },
  { year: "2021", event: "Tim didirikan — Debut di kejuaraan Superbike nasional" },
];

export default function RacingTeam() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] overflow-hidden">
        <Image src="/images/racing-team.png" alt="SuperSpeed Racing Team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                Superbike Indonesia
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black">
                SUPERSPEED <span className="text-gradient-orange">RACING</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl">
                Tim balap Superbike Indonesia yang berkompetisi di Sirkuit Mandalika, Lombok. 
                Didirikan 2021 — juara bertahan kelas Superbike nasional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Gelar Juara", value: "13" },
              { label: "Race Wins", value: "64" },
              { label: "Podium Finishes", value: "120+" },
              { label: "Fastest Laps", value: "28" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-[#1A1A1A] carbon-texture rounded-lg glow-border">
                <div className="font-orbitron text-4xl md:text-5xl font-black text-gradient-orange">{stat.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-3">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mandalika Home Circuit */}
      <section className="py-24 tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden glow-border">
                <Image src="/images/mandalika-circuit.png" alt="Sirkuit Mandalika" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Home Circuit</span>
              <h2 className="font-orbitron text-3xl md:text-4xl font-black leading-tight">
                SIRKUIT <span className="text-gradient-orange">MANDALIKA</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Pertamina Mandalika International Street Circuit di Lombok, NTB — rumah bagi 
                SuperSpeed Racing Team. Sirkuit sepanjang 4.3km dengan 17 tikungan yang 
                menantang, berlatar pantai dan bukit tropis Kuta Mandalika.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "4.3km", label: "Panjang Trek" },
                  { value: "17", label: "Tikungan" },
                  { value: "FIM A", label: "Grade" },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-[#1A1A1A] carbon-texture rounded-lg p-4 glow-border">
                    <div className="font-orbitron text-xl font-black text-gradient-orange">{s.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  "Host MotoGP Indonesia & WSBK sejak 2022",
                  "SuperSpeed bermarkas di pit lane Mandalika",
                  "Testing & development sepanjang tahun",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#F5A623] mt-0.5">▸</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Riders */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Our Riders</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              PARA <span className="text-gradient-orange">RIDER</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {riders.map((rider, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border"
              >
                <div className="p-8">
                  <div className="flex gap-6">
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#F5A623] to-[#D4891A] rounded-lg flex items-center justify-center">
                      <span className="font-orbitron text-2xl font-black text-black">{rider.number}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="font-bold text-xl text-white group-hover:text-[#F5A623] transition-colors">
                          {rider.name}
                        </h3>
                        <span className="text-[#F5A623]/60 text-sm italic">"{rider.nickname}"</span>
                      </div>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#F5A623] font-semibold mt-1">{rider.role}</p>
                      <p className="text-xs text-gray-500 mt-1">🏍️ {rider.bike}</p>

                      <div className="flex gap-6 mt-4">
                        <div>
                          <div className="font-orbitron text-lg font-bold text-white">{rider.titles}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">Titles</div>
                        </div>
                        <div>
                          <div className="font-orbitron text-lg font-bold text-white">{rider.wins}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-500">Wins</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400 mt-4 leading-relaxed">{rider.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#F5A623] to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Crew */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Behind The Scenes</span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black mt-4">
              SUPPORT <span className="text-gradient-orange">CREW</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crew.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#F5A623]/20 to-[#D4891A]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="font-orbitron text-lg font-bold text-[#F5A623]">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bold text-white">{person.name}</h3>
                <p className="text-xs uppercase tracking-wider text-[#F5A623] font-semibold mt-1">{person.role}</p>
                <p className="text-sm text-gray-400 mt-3">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Season Results */}
      <section className="py-24 tech-grid">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Current Season</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              HASIL <span className="text-gradient-orange">2026</span>
            </h2>
          </motion.div>

          <div className="overflow-hidden rounded-lg border border-[#F5A623]/10">
            <div className="grid grid-cols-5 bg-[#F5A623]/10 text-xs uppercase tracking-wider font-bold text-[#F5A623] p-4">
              <span>Round</span>
              <span>Sirkuit</span>
              <span>Rider</span>
              <span>Kelas</span>
              <span className="text-right">Posisi</span>
            </div>
            {results2026.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid grid-cols-5 p-4 text-sm ${i % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#151515]"} hover:bg-[#F5A623]/5 transition-colors`}
              >
                <span className="text-gray-400">{result.round}</span>
                <span className="text-gray-300">{result.circuit}</span>
                <span className="text-white font-semibold">{result.rider}</span>
                <span className="text-gray-400">{result.cls}</span>
                <span className={`text-right font-orbitron font-bold ${
                  result.pos === "1st" ? "text-[#F5A623]" : result.pos === "2nd" ? "text-gray-300" : "text-amber-700"
                }`}>
                  {result.pos}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Our Journey</span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-4">
              SEJARAH <span className="text-gradient-orange">TIM</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5A623]/50 via-[#F5A623]/20 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-[#F5A623] rounded-full -translate-x-1.5 shadow-lg shadow-[#F5A623]/50 z-10" />
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border">
                    <span className="font-orbitron text-2xl font-black text-gradient-orange">{item.year}</span>
                    <p className="text-gray-300 mt-2">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MotoGP Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group relative rounded-lg overflow-hidden glow-border"
          >
            <div className="relative h-72 md:h-[450px]">
              <Image src="/images/mandalika-race.png" alt="Race at Mandalika" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">Mandalika 2026</span>
              <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mt-3">
                RACE DAY AT<br /><span className="text-gradient-orange">MANDALIKA</span>
              </h2>
              <p className="text-gray-300 mt-4 max-w-lg">
                Setiap race day di Mandalika adalah perayaan kecepatan, strategi, dan semangat 
                kompetisi. SuperSpeed Racing selalu hadir di garis start.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-orbitron text-4xl md:text-5xl font-black">
              GABUNG <span className="text-gradient-orange">TIM KAMI</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami mencari rider berbakat, mekanik berpengalaman, dan staf pendukung yang 
              memiliki passion terhadap motorsport. Bergabunglah dengan keluarga SuperSpeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Apply Sebagai Rider
              </button>
              <button className="btn-outline-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
                Gabung Support Crew
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
