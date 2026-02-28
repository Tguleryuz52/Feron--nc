"use client";

import Link from "next/link";

const CUSTOMER_CARE = [
  { href: "/account", label: "Account" },
  { href: "/our-store", label: "Our Store" },
  { href: "/faq", label: "FAQ" },
];

const NAVIGATE = [
  { href: "/shop", label: "Shop" },
  { href: "/brand", label: "Brand" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const OTHER = [
  { href: "/privacy", label: "Privacy" },
  { href: "/404", label: "404" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white font-sans">

      {/* ═══════════════════════════════════════════
          TOP ROW — Newsletter (left) + Link Columns (right)
      ═══════════════════════════════════════════ */}
      <div
        className="flex justify-between items-start border-t border-zinc-900"
        style={{ padding: "48px 48px 56px 48px" }}
      >

        {/* ── Newsletter (Left Side) ── */}
        <div className="flex flex-col gap-6">
          <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-white">
            Subscribe to our newsletter
          </span>
          <div className="flex items-end gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-white/10 pb-2 text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors duration-500 w-[240px]"
            />
            <button className="bg-white text-black text-[15px] font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-white/85 transition-all duration-300 cursor-pointer select-none">
              JOIN
            </button>
          </div>
        </div>

        {/* ── Link Columns (Right Side) ── */}
        <div className="flex gap-24">

          {/* Customer Care */}
          <div className="flex flex-col">
            <h3 className="text-[10px] font-normal uppercase tracking-[0.45em] text-zinc-500 mb-6">
              (Customer Care)
            </h3>
            <div className="flex flex-col gap-3">
              {CUSTOMER_CARE.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-white hover:opacity-50 transition-opacity duration-500 relative group w-fit"
                  style={{ lineHeight: "1.5" }}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/60 transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-400 mb-7">
              (Navigate)
            </h3>
            <div className="flex flex-col gap-3">
              {NAVIGATE.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-white hover:opacity-50 transition-opacity duration-500 relative group w-fit"
                  style={{ lineHeight: "1.5" }}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/60 transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-400 mb-7">
              (Other)
            </h3>
            <div className="flex flex-col gap-3">
              {OTHER.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-white hover:opacity-50 transition-opacity duration-500 relative group w-fit"
                  style={{ lineHeight: "1.5" }}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/60 transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM — Giant Logo + Credits
      ═══════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ padding: "16px 48px 32px 48px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/footer-logo.svg"
          alt="Feron"
          className="select-none"
          draggable={false}
          style={{
            width: "clamp(200px, 28vw, 550px)",
            height: "auto",
          }}
        />

        {/* Credits — bottom right */}
        <div className="absolute bottom-10 right-12 flex items-center gap-6">
          <span className="text-[10px] font-normal uppercase tracking-[0.15em] text-zinc-600">
            By Feron Supply
          </span>
          <span className="text-[10px] font-normal uppercase tracking-[0.15em] text-zinc-600">
            ©2025
          </span>
        </div>
      </div>

    </footer>
  );
}
