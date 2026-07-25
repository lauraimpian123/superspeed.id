"use client";

import { motion } from "framer-motion";

export default function RacingTeam() {
  const teamMembers = [
    {
      name: "Marcus \"Lightning\" Rodriguez",
      role: "Lead Driver",
      championships: 15,
      avatar: "👨‍🦱",
      quote: "Speed is not just about velocity, it's about precision.",
    },
    {
      name: "Sarah \"Phoenix\" Chen",
      role: "Co-Driver",
      championships: 12,
      avatar: "👩‍🦰",
      quote: "Every race is a new opportunity to break limits.",
    },
    {
      name: "Alex \"Turbo\" Smith",
      role: "Technical Director",
      championships: 8,
      avatar: "👨‍🔧",
      quote: "The perfect lap exists. We just have to find it.",
    },
  ];

  const achievements = [
    { year: "2025", title: "World Championship Winner" },
    { year: "2024", title: "Regional Championship (3x)" },
    { year: "2023", title: "Fastest Lap Record Holder" },
    { year: "2022", title: "Team of the Year" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              RACING TEAM
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Meet the champions who push the limits every single race. Excellence, speed, and
            precision define our legacy.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { label: "Championships", value: "35+" },
            { label: "Race Wins", value: "120+" },
            { label: "Podium Finishes", value: "250+" },
            { label: "World Records", value: "12" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-500/20 text-center"
            >
              <div className="text-4xl font-orbitron font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Champions
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105"
              >
                {/* Avatar */}
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 h-64 flex items-center justify-center text-9xl group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-2xl text-white mb-1">{member.name}</h3>
                  <p className="text-red-500 font-semibold mb-2">{member.role}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-500">🏆</span>
                    <span className="text-gray-300">
                      {member.championships} Championships
                    </span>
                  </div>
                  <p className="text-gray-400 italic">"{member.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-orbitron text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Championship Legacy
            </span>
          </h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all"
              >
                <div className="font-orbitron text-3xl font-bold text-red-500 min-w-[100px]">
                  {achievement.year}
                </div>
                <div className="h-12 w-1 bg-gradient-to-b from-red-500 to-orange-500"></div>
                <div className="text-xl text-white font-semibold">{achievement.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12 text-center"
        >
          <h2 className="font-orbitron text-4xl font-bold text-white mb-4">
            Ready to Join the Team?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented drivers, engineers, and support staff who share
            our passion for excellence.
          </p>
          <button className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
