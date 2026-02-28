"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { toast } from "sonner";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useCartStore } from "@/store/cartStore";

/* ─── PRODUCT TYPE ─── */
type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: { slug: string };
  slug: string;
  is_featured: boolean;
};

const categories = ["All", "Tops", "Bottoms", "New", "Summer 2026"];

/* ─── ANIMATION ─── */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.06,
      ease: EASE,
    },
  }),
};

/* ─── PARALLAX PRODUCT IMAGE ─── */
function ParallaxProductImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        style={{
          y,
          scale: 1.12,
        }}
      />
    </div>
  );
}

/* ─── PRODUCT CARD COMPONENT ─── */
function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || "",
      size: "M",
    });
    toast.success(`${product.name} sepete eklendi!`);
  };

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Card — tall, generous padding, parallax inside */}
      <div className="relative aspect-[3/4.2] overflow-hidden bg-[#EEEEEE]">
        {/* NEW badge */}
        {product.is_featured && (
          <span
            className="absolute top-5 left-5 z-10 bg-white text-black uppercase font-bold select-none"
            style={{ fontSize: "10px", letterSpacing: "0.06em", padding: "5px 12px" }}
          >
            NEW
          </span>
        )}

        {/* Product Image — with parallax scroll effect */}
        {product.images?.[0] && (
          <div className="absolute inset-0 p-14">
            <ParallaxProductImage
              src={product.images[0]}
              alt={product.name}
            />
          </div>
        )}

        {/* ── Quick Add — compact premium bar, slides from right ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-5 right-5 z-20"
            >
              <button
                onClick={handleQuickAdd}
                className="flex items-center gap-5
                           bg-[#1a1a1a] text-white cursor-pointer
                           hover:bg-[#2a2a2a] active:bg-[#111]
                           transition-colors duration-200 select-none"
                style={{
                  padding: "10px 16px",
                }}
              >
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Quick Add
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info — Name + Price, same line, thin & minimal */}
      <div
        className="flex items-baseline justify-between"
        style={{ marginTop: "18px", padding: "0 2px" }}
      >
        <span
          className="uppercase text-black"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          {product.name}
        </span>
        <span
          className="text-black"
          style={{
            fontSize: "11px",
            fontWeight: 400,
          }}
        >
          ${product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
}

/* ─── MAIN SECTION ─── */
export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const supabase = createClient();
      const { data } = await supabase
        .from("products")
        .select(`
          id, name, price, images, is_featured,
          category:categories(slug)
        `);
      
      if (data) {
        setProducts(data as unknown as Product[]);
      }
      setLoading(false);
    }
    getProducts();
  }, []);

  const filtered =
    activeCategory === "All"
      ? products
      : activeCategory === "New"
      ? products.filter((p) => p.is_featured)
      : products.filter((p) => p.category?.slug === activeCategory.toLowerCase());

  return (
    <section className="bg-white text-black min-h-screen">

      {/* ═══════════════════════════════════════════════════
          HERO ZONE — Shop title + Description + Filters
      ═══════════════════════════════════════════════════ */}
      <div style={{ padding: "120px 64px 0 64px" }}>

        {/* Row 1: Title + Description — top-aligned */}
        <div className="flex items-start justify-between">

          {/* LEFT — Devasa "Shop" başlığı */}
          <h1
            style={{
              fontFamily: "'Satoshi', 'Inter', 'Helvetica Neue', sans-serif",
              fontSize: "clamp(52px, 5.5vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              color: "#000000",
            }}
          >
            Shop
          </h1>

          {/* RIGHT — Description */}
          <p
            className="text-zinc-500"
            style={{
              maxWidth: "400px",
              marginTop: "12px",
              fontSize: "15px",
              lineHeight: "1.7",
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            Explore Feron&apos;s premium lifestyle clothing catalog,
            featuring high-end casual wear for the modern individual.
          </p>
        </div>

        {/* Row 2: Category Filters — right-aligned */}
        <div
          className="flex justify-end items-center gap-7"
          style={{ paddingTop: "100px", paddingBottom: "40px" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="transition-all duration-300 cursor-pointer"
              style={{
                fontSize: "14px",
                fontWeight: activeCategory === cat ? 700 : 400,
                letterSpacing: "-0.01em",
                color: activeCategory === cat ? "#000000" : "#BBBBBB",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          PRODUCT GRID — 3 cols, minimal gap, premium spacing
      ═══════════════════════════════════════════════════ */}
      {loading ? (
        <div
          className="grid grid-cols-3 gap-x-[3px] gap-y-14"
          style={{ padding: "0 48px 100px 48px" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[3/4.2] bg-[#EEEEEE]" />
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="h-2.5 w-24 bg-zinc-200 rounded" />
                <div className="h-2.5 w-12 bg-zinc-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="grid grid-cols-3 gap-x-[3px] gap-y-14"
          style={{ padding: "0 48px 100px 48px" }}
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
