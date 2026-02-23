"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ClockWidget from "./ClockWidget";
import MusicWidget from "./MusicWidget";

const SPLASH_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/shop/categories/new", label: "New Arrivals" },
  { href: "/brand", label: "Brand" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <Image
            src="/brand/logo-light.svg"
            alt="Feron"
            width={60}
            height={60}
            className="w-12 h-12"
          />
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3"
        >
          {SPLASH_LINKS.map((link) => (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-white text-[20px] font-normal tracking-wide hover:opacity-70 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 pb-6">
        {/* Left: Music Widget */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <MusicWidget />
        </motion.div>

        {/* Center: Clock */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6"
        >
          <ClockWidget />
        </motion.div>

        {/* Right: spacer */}
        <div className="w-[280px]" />
      </div>
    </section>
  );
}
