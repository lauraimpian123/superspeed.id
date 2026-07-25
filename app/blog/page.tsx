"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Science of Aerodynamics in Modern Racing",
      excerpt:
        "Discover how cutting-edge aerodynamic designs are shaping the future of motorsport performance.",
      category: "Technology",
      date: "July 20, 2026",
      readTime: "8 min read",
      image: "🏎️",
      featured: true,
    },
    {
      id: 2,
      title: "Top 10 Essential Safety Gear Every Racer Needs",
      excerpt:
        "From helmets to fire-resistant suits, we break down the must-have safety equipment for professional racing.",
      category: "Safety",
      date: "July 18, 2026",
      readTime: "6 min read",
      image: "🛡️",
    },
    {
      id: 3,
      title: "Behind the Scenes: A Day with SuperSpeed Racing Team",
      excerpt:
        "Follow our championship-winning team through an intense race day preparation and execution.",
      category: "Team Life",
      date: "July 15, 2026",
      readTime: "10 min read",
      image: "👥",
    },
    {
      id: 4,
      title: "Fuel Efficiency vs. Speed: Finding the Perfect Balance",
      excerpt:
        "Expert insights on optimizing your race strategy for both performance and endurance.",
      category: "Strategy",
      date: "July 12, 2026",
      readTime: "7 min read",
      image: "⛽",
    },
    {
      id: 5,
      title: "The Evolution of Racing Helmets: Past, Present, Future",
      excerpt:
        "A comprehensive look at how helmet technology has advanced to protect modern racers.",
      category: "Technology",
      date: "July 10, 2026",
      readTime: "9 min read",
      image: "🪖",
    },
    {
      id: 6,
      title: "Mental Preparation: The Racer's Secret Weapon",
      excerpt:
        "How top drivers train their minds to perform under extreme pressure and split-second decisions.",
      category: "Psychology",
      date: "July 8, 2026",
      readTime: "5 min read",
      image: "🧠",
    },
  ];

  const categories = ["All", "Technology", "Safety", "Team Life", "Strategy", "Psychology"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              RACING BLOG
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Expert insights, team updates, and the latest trends in motorsport
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:text-white transition-all duration-300 font-semibold"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 border-red-500/50 hover:border-red-500 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 h-64 md:h-auto flex items-center justify-center text-9xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                    <span className="text-red-500 font-semibold">{post.category}</span>
                  </div>
                  <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30 w-fit"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105"
              >
                {/* Image */}
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 h-48 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-red-500 text-sm font-semibold mb-2">{post.category}</div>
                  <h3 className="font-bold text-xl text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-red-500 hover:text-red-400 font-semibold transition-colors flex items-center gap-2 group-hover:gap-3"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="font-orbitron text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest racing insights, team news, and
            exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-black/50 border border-red-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
