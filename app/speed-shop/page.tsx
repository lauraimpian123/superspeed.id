"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SpeedShop() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "helmets", name: "Helmets" },
    { id: "suits", name: "Racing Suits" },
    { id: "gloves", name: "Gloves" },
    { id: "shoes", name: "Shoes" },
    { id: "parts", name: "Performance Parts" },
  ];

  const products = [
    {
      id: 1,
      name: "Pro Racing Helmet X1",
      category: "helmets",
      price: "Rp 15.500.000",
      image: "🪖",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Fire-Resistant Suit Pro",
      category: "suits",
      price: "Rp 25.000.000",
      image: "👔",
      badge: "New",
    },
    {
      id: 3,
      name: "Grip Master Gloves",
      category: "gloves",
      price: "Rp 3.500.000",
      image: "🧤",
    },
    {
      id: 4,
      name: "Speed Racer Shoes V2",
      category: "shoes",
      price: "Rp 5.800.000",
      image: "👟",
    },
    {
      id: 5,
      name: "Turbo Boost Kit",
      category: "parts",
      price: "Rp 45.000.000",
      image: "⚙️",
      badge: "Hot",
    },
    {
      id: 6,
      name: "Carbon Fiber Helmet Elite",
      category: "helmets",
      price: "Rp 28.000.000",
      image: "🪖",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
              SPEED SHOP
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Premium racing gear for champions. Every product tested at championship level.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:scale-105"
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">{product.name}</h3>
                <p className="text-2xl font-orbitron font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-red-500/30">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-12"
        >
          <h2 className="font-orbitron text-3xl font-bold mb-4 text-white">
            Can't Find What You Need?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact our team for custom orders and bulk purchases
          </p>
          <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105">
            Contact Sales Team
          </button>
        </motion.div>
      </div>
    </div>
  );
}
