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
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 pt-12 pb-16 max-w-[1800px] mx-auto gap-12">
        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[12px] font-medium uppercase tracking-wider">
            Subscribe to our newsletter
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-b border-white/30 pb-2 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors w-[200px]"
            />
            <button className="bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium uppercase tracking-wider px-5 py-2 transition-colors">
              Join
            </button>
          </div>
        </div>

        {/* Link Columns */}
        <div className="flex gap-16 md:gap-24">
          {/* Customer Care */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-normal uppercase tracking-wider text-white/50">
              (Customer Care)
            </h4>
            {CUSTOMER_CARE.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-normal text-white hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-normal uppercase tracking-wider text-white/50">
              (Navigate)
            </h4>
            {NAVIGATE.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-normal text-white hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Other */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-normal uppercase tracking-wider text-white/50">
              (Other)
            </h4>
            {OTHER.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-normal text-white hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Giant Logo + Credits */}
      <div className="relative px-6 pb-8 max-w-[1800px] mx-auto">
        {/* Giant "feron." text */}
        <div className="select-none">
          <span
            className="text-white font-serif font-bold leading-none block"
            style={{ fontSize: "clamp(100px, 15vw, 280px)" }}
          >
            feron.
          </span>
        </div>

        {/* Credits */}
        <div className="flex justify-end items-center gap-4 mt-4">
          <span className="text-[11px] font-normal uppercase tracking-wider text-white/50">
            By Feron Supply
          </span>
          <span className="text-[11px] font-normal uppercase tracking-wider text-white/50">
            ©2025
          </span>
        </div>
      </div>
    </footer>
  );
}
