"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";

/* ─── SHOP DROPDOWN CATEGORIES ─── */
const SHOP_CATEGORIES = ["All", "Tops", "Bottoms", "New", "Summer 2026"];

/* ─── EASING ─── */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function ShopHeader() {
  const [shopDropdown, setShopDropdown] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);
  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

  /* Zustand cart store */
  const items = useCartStore((s) => s.items);
  const isCartOpen = useCartStore((s) => s.isOpen);
  const openCart = useCartStore((s) => s.openCart);
  const closeCart = useCartStore((s) => s.closeCart);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQty = useCartStore((s) => s.updateQty);
  const clearCart = useCartStore((s) => s.clearCart);

  /* Hydration guard */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const displayCount = mounted ? items.reduce((sum, i) => sum + i.qty, 0) : 0;
  const displaySubtotal = mounted ? items.reduce((sum, i) => sum + i.price * i.qty, 0) : 0;

  /* Close cart on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeCart]);

  const handleShopEnter = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setShopDropdown(true);
  };

  const handleShopLeave = () => {
    dropdownTimer.current = setTimeout(() => setShopDropdown(false), 200);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full bg-white"
        onMouseLeave={handleShopLeave}
      >
        {/* Main bar */}
        <div
          className="relative flex items-center justify-between border-b border-zinc-100"
          style={{ height: "80px", padding: "0 64px 0 70px" }}
        >
          {/* LEFT: Nav Links */}
          <nav className="flex items-center gap-8">
            <div ref={shopRef} onMouseEnter={handleShopEnter}>
              <Link
                href="/shop"
                className="relative text-black group"
                style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                Shop
                <span
                  className="absolute left-0 -bottom-1 h-px bg-black transition-all duration-500"
                  style={{ width: shopDropdown ? "100%" : undefined }}
                />
                {!shopDropdown && (
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
                )}
              </Link>
            </div>
            {["Brand", "Journal", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-black hover:opacity-70 transition-opacity duration-300 group"
                style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CENTER: Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/hero-yazılogo.svg"
              alt="Feron"
              style={{ height: "28px", width: "auto", filter: "brightness(0)" }}
              draggable={false}
            />
          </Link>

          {/* RIGHT: Utilities */}
          <div className="flex items-center gap-6">
            <button className="relative text-black hover:opacity-50 transition-opacity duration-300 cursor-pointer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <Link
              href="/account"
              className="relative text-black hover:opacity-70 transition-opacity duration-300 group"
              style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              Account
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
            </Link>
            <span className="select-none" style={{ fontSize: "14px" }}>🇹🇷</span>
            <button
              onClick={openCart}
              className="relative text-black hover:opacity-70 transition-opacity duration-300 cursor-pointer group"
              style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.02em" }}
            >
              CART ({displayCount})
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-500 group-hover:w-full" />
            </button>
          </div>
        </div>

        {/* SHOP MEGA DROPDOWN */}
        <AnimatePresence>
          {shopDropdown && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden w-full bg-white border-b border-zinc-100"
              onMouseEnter={handleShopEnter}
              onMouseLeave={handleShopLeave}
            >
              <div style={{ padding: "24px 70px 32px 70px" }}>
                <div className="flex flex-col gap-0">
                  {SHOP_CATEGORIES.filter(c => c !== "All").map((cat, i) => (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                    >
                      <Link
                        href={`/shop?category=${cat.toLowerCase()}`}
                        className="block text-black hover:opacity-50 transition-opacity duration-300"
                        style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: "2.8" }}
                        onClick={() => setShopDropdown(false)}
                      >
                        {cat}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════════════════════════════════════
          CART DRAWER — Premium Design
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {isCartOpen && mounted && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px]"
              onClick={closeCart}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="fixed top-0 right-0 z-[70] h-full bg-white flex flex-col"
              style={{ width: "min(480px, 92vw)", boxShadow: "-12px 0 60px rgba(0,0,0,0.08)" }}
            >
              {/* ── Header ── */}
              <div
                className="flex items-center justify-between border-b border-zinc-100"
                style={{ padding: "28px 32px" }}
              >
                <span
                  className="uppercase text-black"
                  style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em" }}
                >
                  {displayCount} {displayCount === 1 ? "Item" : "Items"} in Cart
                </span>
                <button
                  onClick={closeCart}
                  className="text-black hover:opacity-40 transition-opacity duration-300 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ── Cart Items ── */}
              <div className="flex-1 overflow-y-auto" style={{ padding: "28px 32px" }}>
                {items.length === 0 ? (
                  /* Empty State */
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-20 h-20 text-zinc-200 mb-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <p className="text-zinc-400" style={{ fontSize: "15px", fontWeight: 500 }}>
                      Your cart is empty
                    </p>
                    <Link
                      href="/shop"
                      onClick={closeCart}
                      className="mt-5 text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
                      style={{ fontSize: "13px", fontWeight: 600 }}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  /* Items List */
                  <div className="flex flex-col gap-0">
                    {items.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, delay: idx * 0.05, ease: EASE }}
                        className="flex gap-5 py-6 border-b border-zinc-100 last:border-0"
                      >
                        {/* Thumbnail */}
                        <Link
                          href={`/shop/${item.productId}`}
                          onClick={closeCart}
                          className="w-[110px] h-[140px] bg-[#F4F4F5] shrink-0 overflow-hidden rounded-sm"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-3"
                          />
                        </Link>

                        {/* Details + Controls */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          {/* Top: Name + Size + Price */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p
                                className="text-black uppercase truncate"
                                style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.03em" }}
                              >
                                {item.name}
                              </p>
                              <p className="text-zinc-400 mt-1" style={{ fontSize: "12px" }}>
                                Size: {item.size}
                              </p>
                            </div>
                            <span
                              className="text-black shrink-0"
                              style={{ fontSize: "13px", fontWeight: 600 }}
                            >
                              ${(item.price * item.qty).toFixed(2)}
                            </span>
                          </div>

                          {/* Bottom: Qty controls + Remove */}
                          <div className="flex items-center justify-between mt-3">
                            <div
                              className="inline-flex items-center border border-zinc-200 rounded-sm overflow-hidden"
                              style={{ height: "36px" }}
                            >
                              <button
                                onClick={() => updateQty(item.id, item.qty - 1)}
                                className="flex items-center justify-center w-9 h-full text-zinc-400 hover:text-black hover:bg-zinc-50 transition-all cursor-pointer"
                                style={{ fontSize: "16px", fontWeight: 300 }}
                              >
                                −
                              </button>
                              <span
                                className="flex items-center justify-center w-8 h-full text-black border-x border-zinc-200"
                                style={{ fontSize: "13px", fontWeight: 600 }}
                              >
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQty(item.id, item.qty + 1)}
                                className="flex items-center justify-center w-9 h-full text-zinc-400 hover:text-black hover:bg-zinc-50 transition-all cursor-pointer"
                                style={{ fontSize: "16px", fontWeight: 300 }}
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-zinc-300 hover:text-black transition-colors duration-300 cursor-pointer"
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Footer — Subtotal + Buttons + Payment Icons ── */}
              {items.length > 0 && (
                <div
                  className="border-t border-zinc-100"
                  style={{ padding: "24px 32px 32px 32px" }}
                >
                  {/* Subtotal */}
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <span className="text-black" style={{ fontSize: "15px", fontWeight: 500 }}>
                      Subtotal
                    </span>
                    <span className="text-black" style={{ fontSize: "16px", fontWeight: 800 }}>
                      ${displaySubtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* CHECK OUT — Premium full button */}
                  <button
                    className="w-full bg-black text-white text-center uppercase font-bold rounded-full hover:bg-zinc-800 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    style={{
                      padding: "18px 0",
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Check Out
                  </button>

                  {/* CLEAR CART — Outlined */}
                  <button
                    onClick={clearCart}
                    className="w-full border border-zinc-200 text-black text-center uppercase font-bold rounded-full hover:border-black hover:bg-zinc-50 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                    style={{
                      padding: "18px 0",
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      marginTop: "10px",
                    }}
                  >
                    Clear Cart
                  </button>

                  {/* Payment Icons */}
                  <div
                    className="flex items-center justify-center gap-4 mt-5"
                    style={{ opacity: 0.35 }}
                  >
                    {/* Visa */}
                    <svg viewBox="0 0 48 32" className="h-5" fill="none">
                      <rect width="48" height="32" rx="4" fill="#1A1F71" />
                      <path d="M19.5 21h-2.8l1.8-11h2.8l-1.8 11zm11.6-10.7c-.6-.2-1.4-.4-2.5-.4-2.8 0-4.7 1.5-4.7 3.6 0 1.6 1.4 2.5 2.5 3 1.1.5 1.5.9 1.5 1.4 0 .7-.9 1.1-1.7 1.1-1.1 0-1.7-.2-2.7-.6l-.4-.2-.4 2.5c.7.3 1.9.6 3.2.6 3 0 4.9-1.5 4.9-3.7 0-1.2-.7-2.2-2.3-3-.9-.5-1.5-.8-1.5-1.3 0-.4.5-.9 1.5-.9.9 0 1.5.2 2 .4l.2.1.4-2.4zM36 21l2.2-6 .6 3.1.4 1.8h-2.4l-.8 1.1zm3.5-11h-2.2c-.7 0-1.2.2-1.5.9L31 21h3l.6-1.6h3.6l.3 1.6h2.6L38.5 10zm-25.8 0L11 17.5l-.3-1.5C10 14.3 8.4 12.5 6.6 11.6l2.5 9.4h3l4.5-11h-2.9z" fill="white" />
                    </svg>
                    {/* Mastercard */}
                    <svg viewBox="0 0 48 32" className="h-5" fill="none">
                      <rect width="48" height="32" rx="4" fill="#252525" />
                      <circle cx="19" cy="16" r="8" fill="#EB001B" />
                      <circle cx="29" cy="16" r="8" fill="#F79E1B" />
                      <path d="M24 10.3a8 8 0 0 1 0 11.4 8 8 0 0 1 0-11.4z" fill="#FF5F00" />
                    </svg>
                    {/* Apple Pay */}
                    <svg viewBox="0 0 48 32" className="h-5" fill="none">
                      <rect width="48" height="32" rx="4" fill="#000" />
                      <text x="24" y="19" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui">Pay</text>
                    </svg>
                  </div>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
