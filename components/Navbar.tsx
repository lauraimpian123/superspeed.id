"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Speed Shop", href: "/speed-shop" },
  { name: "Racing Team", href: "/racing-team" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#F5A623]/10 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative group flex items-center">
            <Image
              src="/logo-superspeed.png"
              alt="SuperSpeed Racing Team"
              width={220}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="absolute -inset-2 bg-[#F5A623]/0 group-hover:bg-[#F5A623]/5 rounded-lg transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-4 px-7 py-2.5 text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#F5A623] to-[#D4891A] text-black rounded hover:shadow-lg hover:shadow-[#F5A623]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#F5A623] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#F5A623] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#F5A623] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-[#F5A623]/10"
          >
            <nav className="px-6 py-8 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-semibold uppercase tracking-wider text-gray-300 hover:text-[#F5A623] transition-colors border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3 bg-gradient-to-r from-[#F5A623] to-[#D4891A] text-black font-bold uppercase tracking-wider rounded"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
