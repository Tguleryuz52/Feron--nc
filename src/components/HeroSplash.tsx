"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ClockWidget from "./ClockWidget";
import MusicWidget from "./MusicWidget";

const SPLASH_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/categories/new", label: "New Arrivals" },
  { href: "/brand", label: "Brand" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HeroSplash() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero/hero-image.png"
        alt="Feron Hero"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Subtle dark overlay - matte feel like Fossil */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Text Logo - Serif "feron™" matching Fossil's "fossil™" style */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="mb-8"
        >
          <span className="text-white font-serif text-[24px] italic tracking-[0.01em] font-normal">
            feron.<sup className="text-[9px] not-italic ml-0.5 align-super">™</sup>
          </span>
        </motion.div>

        {/* Navigation Links - matching Fossil's refined, light style */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-[10px]"
        >
          {SPLASH_LINKS.map((link) => (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-white text-[15px] font-light tracking-[0.08em] hover:opacity-60 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-5 pb-5">
        {/* Left: Music Widget */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" as const }}
        >
          <MusicWidget />
        </motion.div>

        {/* Center: Clock */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" as const }}
          className="absolute left-1/2 -translate-x-1/2 bottom-5"
        >
          <ClockWidget />
        </motion.div>

        {/* Right: spacer to keep layout balanced */}
        <div className="w-[260px]" />
      </div>
    </section>
  );
}
