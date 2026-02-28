"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShopHeader from "@/components/ShopHeader";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ParallaxImage from "@/components/ParallaxImage";

/* ─── EASING ─── */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ─── ANIMATION ─── */
const slideUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  },
});

/* ─── JOURNAL DATA ─── */
interface Article {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const FEATURED: Article[] = [
  {
    id: "1",
    title: "Crafting Performance Wear",
    date: "04.01.2025",
    image: "/brand/brand.png",
    slug: "crafting-performance-wear",
  },
  {
    id: "2",
    title: "Timeless Comfort: The Feron Way",
    date: "05.04.2025",
    image: "/brand/brand-2.png",
    slug: "timeless-comfort",
  },
  {
    id: "3",
    title: "The Value of Quality: Investing in Timeless Fashion",
    date: "06.12.2025",
    image: "/brand/brand-3.png",
    slug: "the-value-of-quality",
  },
];

const ARTICLES: Article[] = [
  {
    id: "4",
    title: "Sustainable Style: Feron's Commitment to Sustainability",
    date: "03.04.2025",
    image: "/brand/brand-4.png",
    slug: "sustainable-style",
  },
  {
    id: "5",
    title: "Fashion in Motion",
    date: "03.12.2025",
    image: "/brand/brand-5.png",
    slug: "fashion-in-motion",
  },
  {
    id: "6",
    title: "Style that Keeps Up with Your Active Life",
    date: "04.22.2025",
    image: "/brand/brand-6.png",
    slug: "style-that-keeps-up",
  },
];

/* ─── ARROW ICON ─── */
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-4 h-4 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

/* ─── ARTICLE CARD — Premium Hover ─── */
function ArticleCard({
  article,
  index,
  large = false,
}: {
  article: Article;
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Link href={`/journal/${article.slug}`} className="group block">
        {/* Image — Overflow hidden container + soft hover zoom */}
        <motion.div variants={slideUp(index * 0.08)}>
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <ParallaxImage
                src={article.image}
                alt={article.title}
                className="w-full h-full"
                intensity={8}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Footer — Title+Date left, Arrow right */}
        <motion.div
          variants={slideUp(0.15 + index * 0.08)}
          className="flex justify-between items-start mt-4"
        >
          {/* Left: Title + Date */}
          <div className="min-w-0 pr-4">
            <h3
              className="relative inline text-black font-bold"
              style={{
                fontSize: "16px",
                lineHeight: "1.35",
                letterSpacing: "-0.02em",
              }}
            >
              {article.title}
              {/* Animated underline — scales from left on hover */}
              <span
                className="absolute left-0 -bottom-[3px] h-[2px] bg-black origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] scale-x-0 group-hover:scale-x-100"
                style={{ width: "100%" }}
              />
            </h3>
            <p
              className="text-zinc-500 mt-2"
              style={{ fontSize: "12px", fontWeight: 500 }}
            >
              {article.date}
            </p>
          </div>

          {/* Right: Arrow → shifts right on hover */}
          <span className="text-black mt-0.5 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-3">
            <ArrowIcon />
          </span>
        </motion.div>
      </Link>
    </motion.article>
  );
}

/* ─── PAGE ─── */
export default function JournalPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <ShopHeader />

      {/* ═══════════════════════════════════════════════
          HERO — "Journal" (Sans-Serif, font-black, NO italic)
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 64px 0 64px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="font-black tracking-tighter leading-none text-black"
          style={{
            fontSize: "clamp(6rem, 10vw, 10rem)",
          }}
        >
          Journal
        </motion.h1>
      </section>

      {/* ═══════════════════════════════════════════════
          (Featured) + 4-col Asymmetric Grid (2+1+1)
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "48px 64px 0 64px" }}>
        {/* (Featured) label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="text-black"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            marginBottom: "24px",
          }}
        >
          (Featured)
        </motion.p>

        {/* 4-col grid: first card spans 2, others span 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* LARGE CARD — col-span-2 */}
          <div className="md:col-span-2">
            <ArticleCard article={FEATURED[0]} index={0} large />
          </div>

          {/* SMALL CARD 2 */}
          <div className="md:col-span-1">
            <ArticleCard article={FEATURED[1]} index={1} />
          </div>

          {/* SMALL CARD 3 */}
          <div className="md:col-span-1">
            <ArticleCard article={FEATURED[2]} index={2} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          ALL ARTICLES — Equal 3-column grid
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "80px 64px 100px 64px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ARTICLES.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          NEWSLETTER + FOOTER
      ═══════════════════════════════════════════════ */}
      <Footer />
    </main>
  );
}
