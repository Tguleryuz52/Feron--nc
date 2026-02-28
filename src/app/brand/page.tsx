"use client";

import { motion } from "framer-motion";
import ShopHeader from "@/components/ShopHeader";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ParallaxImage from "@/components/ParallaxImage";

/* ─── EASING ─── */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ─── REUSABLE ANIMATION VARIANTS ─── */
const slideUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  },
});

const clipReveal = (delay = 0) => ({
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1.3, delay, ease: EASE },
  },
});

export default function BrandPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <ShopHeader />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 · HERO — "Our Brand" + Asymmetric Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: "140px", paddingBottom: "0" }}>

        {/* "Our Brand" — sol üst köşeye yaslı, TAM GENİŞLİK DEĞİL */}
        <div style={{ padding: "0 64px", marginBottom: "48px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="font-black tracking-tighter text-black"
            style={{
              fontSize: "clamp(5rem, 8vw, 8rem)",
              lineHeight: 0.88,
              maxWidth: "700px",
            }}
          >
            Our Brand
          </motion.h1>
        </div>

        {/* Asymmetric Grid — %65 görsel sol / %35 metin sağ */}
        <div
          className="flex gap-0"
          style={{ padding: "0 64px" }}
        >
          {/* LEFT — Big Photo (w-2/3) with Parallax */}
          <motion.div
            className="w-2/3 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={clipReveal(0.2)}
            style={{ height: "75vh", minHeight: "480px" }}
          >
            <ParallaxImage
              src="/brand/brand.png"
              alt="Feron Brand Embossed"
              className="w-full h-full"
              intensity={10}
            />
          </motion.div>

          {/* RIGHT — Founder Text (w-1/3) */}
          <motion.div
            className="w-1/3 flex flex-col justify-end"
            style={{ paddingLeft: "48px", paddingBottom: "32px" }}
            initial="hidden"
            animate="visible"
          >
            {/* Label — MEET THE FOUNDER */}
            <motion.span
              variants={slideUp(0.5)}
              className="block uppercase font-medium text-zinc-500"
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                marginBottom: "28px",
              }}
            >
              (Meet The Founder)
            </motion.span>

            {/* Description text */}
            <motion.p
              variants={slideUp(0.6)}
              className="text-zinc-500"
              style={{
                fontSize: "18px",
                lineHeight: "2",
                letterSpacing: "-0.01em",
                maxWidth: "400px",
              }}
            >
              From the streets of İstanbul to the world stage, a passion
              for premium streetwear sparked a movement. What began as a
              vision—crafting unique garments that celebrate quality—
              evolved into Feron, a brand iconic for its refined style and
              uncompromising craftsmanship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 · THE "BASED" STATEMENT — Tam ortada, devasa padding
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="flex flex-col items-center justify-center text-center"
        style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* (Based) */}
          <motion.h2
            variants={slideUp(0)}
            className="font-black tracking-tighter text-black"
            style={{
              fontSize: "clamp(4rem, 8vw, 6rem)",
              lineHeight: 0.95,
              marginBottom: "8px",
            }}
          >
            (Based)
          </motion.h2>

          {/* Istanbul */}
          <motion.h2
            variants={slideUp(0.1)}
            className="font-black tracking-tighter text-black"
            style={{
              fontSize: "clamp(5rem, 10vw, 8rem)",
              lineHeight: 0.88,
            }}
          >
            Istanbul
          </motion.h2>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 · SUSTAINABLE STYLE — Heading + Texts + 2 Images
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="bg-[#F4F4F5]"
        style={{ padding: "140px 64px" }}
      >
        {/* Row 1: Heading left, body text right */}
        <div className="flex flex-col lg:flex-row gap-16 items-start" style={{ marginBottom: "80px" }}>
          {/* Heading — sol üst, max genişlik */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={slideUp(0)}
            viewport={{ once: true, margin: "-100px" }}
            className="font-black tracking-tight text-black lg:flex-[3]"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              maxWidth: "48rem",
            }}
          >
            Sustainable Style: We Source Only the Finest Organic Cotton and Wool.
          </motion.h2>

          {/* Body text — sağ sütun */}
          <motion.div
            className="lg:flex-[2] flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={slideUp(0.15)}
              className="text-zinc-500"
              style={{ fontSize: "16px", lineHeight: "1.8" }}
            >
              At Feron, we believe fashion and nature go hand-in-hand.
              That&apos;s why we source only organic cotton and premium
              materials, reducing our environmental footprint while
              delivering unmatched quality.
            </motion.p>
            <motion.p
              variants={slideUp(0.25)}
              className="text-zinc-500"
              style={{ fontSize: "16px", lineHeight: "1.8" }}
            >
              From seed to stitch, we&apos;re minimizing our ecological
              footprint with 100% organic materials. Every garment is woven
              with integrity, dyed with care, and finished to perfection.
            </motion.p>
          </motion.div>
        </div>

        {/* Row 2: Two images with parallax — büyük sol, küçük sağ */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Large Image */}
          <motion.div
            className="lg:flex-[3] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            variants={clipReveal(0)}
            viewport={{ once: true, margin: "-80px" }}
            style={{ height: "70vh", minHeight: "500px" }}
          >
            <ParallaxImage
              src="/brand/brand-5.png"
              alt="Feron — Sourced from Nature"
              className="w-full h-full"
              intensity={12}
            />
            <div
              className="absolute left-6 bottom-6 z-10 bg-white/90 backdrop-blur-sm text-black uppercase select-none"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                padding: "8px 16px",
              }}
            >
              (Sourced from Ireland)
            </div>
          </motion.div>

          {/* Smaller Detail Image */}
          <motion.div
            className="lg:flex-[2] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            variants={clipReveal(0.2)}
            viewport={{ once: true, margin: "-80px" }}
            style={{ height: "70vh", minHeight: "500px" }}
          >
            <ParallaxImage
              src="/brand/brand-3.png"
              alt="Feron Tags — Pima Cotton"
              className="w-full h-full"
              intensity={12}
            />
            <div
              className="absolute right-6 bottom-6 z-10 text-white uppercase drop-shadow-lg select-none"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              (Pima Cotton)
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 · FULL-BLEED PARALLAX — Trust Quality
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Parallax Background via ParallaxImage */}
        <ParallaxImage
          src="/brand/brand-4.png"
          alt="Feron Pattern Cape"
          className="absolute inset-0 w-full h-full z-0"
          intensity={8}
        />
        <div className="absolute inset-0 bg-black/25 z-[1]" />

        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 1.3, delay: 0.15, ease: EASE },
            }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center font-black tracking-tighter text-white"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 10rem)",
              lineHeight: 0.9,
              textShadow: "0 8px 50px rgba(0,0,0,0.4)",
            }}
          >
            Trust Quality,
            <br />
            Not Chance.
          </motion.h2>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </main>
  );
}
