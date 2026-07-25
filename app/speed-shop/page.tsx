"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", name: "All Products" },
  { id: "helmets", name: "Helmets" },
  { id: "suits", name: "Racing Suits" },
  { id: "gloves", name: "Gloves & Shoes" },
  { id: "parts", name: "Performance Parts" },
  { id: "accessories", name: "Accessories" },
];

const products = [
  {
    id: 1,
    name: "Nexus Pro Carbon Helmet",
    category: "helmets",
    price: 28000000,
    badge: "Best Seller",
    specs: "FIA 8859-2015 | 1,250g | Carbon Fiber",
  },
  {
    id: 2,
    name: "Blaze X1 Racing Suit",
    category: "suits",
    price: 25000000,
    badge: "New Arrival",
    specs: "FIA 8856-2018 | 3-Layer Nomex | Custom Fit",
  },
  {
    id: 3,
    name: "Grip Master Pro Gloves",
    category: "gloves",
    price: 3500000,
    specs: "FIA 8856-2018 | Pre-curved | Silicone Grip",
  },
  {
    id: 4,
    name: "Velocity RS Racing Shoes",
    category: "gloves",
    price: 5800000,
    specs: "FIA Approved | Ultra-thin Sole | Suede",
  },
  {
    id: 5,
    name: "Turbo Boost Kit Stage 3",
    category: "parts",
    price: 45000000,
    badge: "Pro Grade",
    specs: "450+ HP Gain | Ball Bearing | Titanium",
  },
  {
    id: 6,
    name: "Carbon Fiber Aero Kit",
    category: "parts",
    price: 35000000,
    specs: "Full Downforce Package | Pre-preg Carbon",
  },
  {
    id: 7,
    name: "Race Harness 6-Point",
    category: "accessories",
    price: 4200000,
    badge: "Safety Essential",
    specs: "FIA 8853-2016 | HANS Compatible",
  },
  {
    id: 8,
    name: "Digital Dash Display Pro",
    category: "accessories",
    price: 12000000,
    specs: "7\" IPS | CAN Bus | Data Logging | GPS",
  },
  {
    id: 9,
    name: "Storm Visor Clear AR",
    category: "helmets",
    price: 2800000,
    specs: "Anti-fog | Anti-scratch | UV Protection",
  },
];

function formatPrice(price: number) {
  return "Rp " + price.toLocaleString("id-ID");
}

export default function SpeedShop() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/speed-shop-banner.png"
          alt="Speed Shop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/30 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-[#F5A623] text-xs font-bold uppercase tracking-[0.3em]">
                Professional Racing Equipment
              </span>
              <h1 className="font-orbitron text-5xl md:text-7xl font-black">
                SPEED <span className="text-gradient-orange">SHOP</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl">
                Championship-grade gear trusted by professional racers worldwide. 
                Every product tested, every detail engineered for victory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter + Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                active === cat.id
                  ? "bg-gradient-to-r from-[#F5A623] to-[#D4891A] text-black shadow-lg shadow-[#F5A623]/30"
                  : "bg-[#1A1A1A] text-gray-400 border border-white/5 hover:border-[#F5A623]/30 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-[#1A1A1A] carbon-texture rounded-lg overflow-hidden glow-border"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#F5A623] text-black text-[10px] font-bold uppercase tracking-wider rounded">
                    {product.badge}
                  </div>
                )}

                {/* Product Image Area */}
                <div className="relative h-56 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                    {product.category === "helmets"
                      ? "🪖"
                      : product.category === "suits"
                      ? "🏎️"
                      : product.category === "gloves"
                      ? "🧤"
                      : product.category === "parts"
                      ? "⚙️"
                      : "🔧"}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-[#F5A623] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 tracking-wide">
                      {product.specs}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-orbitron text-xl font-bold text-gradient-orange">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <button className="w-full py-3 bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#F5A623] hover:text-black transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-[#1A1A1A] carbon-texture rounded-lg glow-border text-center"
        >
          <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
            NEED SOMETHING <span className="text-gradient-orange">CUSTOM?</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our team can source any racing equipment and build custom solutions 
            for your specific needs. Bulk orders and team packages available.
          </p>
          <button className="btn-racing px-10 py-4 rounded text-sm uppercase tracking-wider">
            Contact Sales Team
          </button>
        </motion.div>
      </section>
    </div>
  );
}
