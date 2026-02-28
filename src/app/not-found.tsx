"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

/* ─── ANIMATION HELPERS ─── */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function NotFound() {
  return (
    <main className="bg-white">

      {/* ═══════════════════════════════════════════════════
          404 HERO — Cloud video + vignette + centered text
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

        {/* ── Cloud Video Background ── */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(1.05) contrast(0.95)" }}
        >
          <source src="/plug/404cloud.mp4" type="video/mp4" />
        </video>

        {/* ── Soft white wash — keeps text readable ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(255, 255, 255, 0.15)" }}
        />

        {/* ── Blue/Cyan Vignette — inner glow around edges ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 120px 40px rgba(160, 200, 240, 0.45), inset 0 0 300px 80px rgba(130, 180, 230, 0.2)",
          }}
        />

        {/* ── Subtle Grain Overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* ── Centered 404 Content ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="uppercase text-black"
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              marginBottom: "24px",
            }}
          >
            Oops! Page doesn&apos;t exist.
          </motion.p>

          {/* 404 + Page Not Found */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            style={{
              fontFamily: "'Satoshi', 'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#000",
            }}
          >
            <span style={{ opacity: 0.2, fontWeight: 700 }}>404</span>
            {"  "}
            <span style={{ fontWeight: 700 }}>Page Not Found.</span>
          </motion.h1>

          {/* Return Home Link */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            style={{ marginTop: "32px" }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-black transition-opacity duration-300 hover:opacity-60"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Return Home
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                style={{ fontSize: "16px" }}
              >
                →
              </span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <Footer />

    </main>
  );
}
