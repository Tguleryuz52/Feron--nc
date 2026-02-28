"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShopHeader from "@/components/ShopHeader";
import Footer from "@/components/Footer";
import { toast } from "sonner";

/* ─── EASING ─── */
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ─── ANIMATION VARIANTS ─── */
const slideUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  },
});

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay, ease: EASE },
  },
});

/* ─── INPUT COMPONENT ─── */
function FormInput({
  label,
  placeholder,
  type = "text",
  delay,
  name,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  delay: number;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <motion.div variants={slideUp(delay)}>
      <label
        htmlFor={name}
        className="block uppercase text-black"
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          marginBottom: "12px",
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent text-black placeholder:text-zinc-400 border-b border-zinc-200 focus:border-black outline-none transition-colors duration-500 pb-3"
        style={{
          fontSize: "14px",
          fontWeight: 400,
        }}
      />
    </motion.div>
  );
}

/* ─── PAGE ─── */
export default function ContactPage() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  /* Image parallax — slides down as you scroll */
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", message: "" }); // Formu temizle
      } else {
        toast.error(result.error || "Bir hata oluştu.");
      }
    } catch (error) {
      toast.error("Ağa bağlanırken bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-black min-h-screen">
      <ShopHeader />

      {/* ═══════════════════════════════════════════════
          CONTACT SECTION — 50/50 Split
      ═══════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">

        {/* ── LEFT: Form ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col justify-between"
          style={{ padding: "80px 64px 64px 64px" }}
        >
          {/* Top section: Heading + Form */}
          <div>
            {/* "Contact" heading */}
            <motion.h1
              variants={slideUp(0)}
              className="font-black tracking-tighter leading-none text-black"
              style={{
                fontSize: "clamp(4rem, 7vw, 7rem)",
                marginBottom: "56px",
              }}
            >
              Contact
            </motion.h1>

            {/* Form */}
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormInput
                  label="Name"
                  name="name"
                  placeholder="Your Name"
                  delay={0.1}
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormInput
                  label="Email"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  delay={0.15}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <motion.div variants={slideUp(0.2)}>
                <label
                  htmlFor="message"
                  className="block uppercase text-black"
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-black placeholder:text-zinc-400 border-b border-zinc-200 focus:border-black outline-none transition-colors duration-500 pb-3 resize-y"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                />
              </motion.div>

              {/* Submit button */}
              <motion.div variants={slideUp(0.25)}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white uppercase font-bold rounded-sm hover:bg-zinc-800 active:scale-[0.97] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    padding: "14px 32px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </motion.div>
            </form>
          </div>

          {/* Bottom section: Location + Phone */}
          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-8"
            style={{ marginTop: "64px" }}
          >
            {/* Location */}
            <div>
              <p
                className="uppercase text-zinc-400"
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                (Location)
              </p>
              <p
                className="text-black"
                style={{ fontSize: "14px", fontWeight: 500, lineHeight: "1.6" }}
              >
                Ataköy Yerleşkesi E5 Karayolu üzeri
                <br />
                Bakırköy 34158 İstanbul
              </p>
            </div>

            {/* Phone */}
            <div>
              <p
                className="uppercase text-zinc-400"
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                (Phone)
              </p>
              <p
                className="text-black"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                +90 541 353 49 52
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Image with top-to-bottom clip reveal ── */}
        <motion.div
          ref={imageRef}
          className="w-full lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-0"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1.3, ease: EASE }}
        >
          <motion.img
            src="/brand/brand-5.png"
            alt="Feron Store"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ y: imageY }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER — No Newsletter
      ═══════════════════════════════════════════════ */}
      <Footer />
    </main>
  );
}
