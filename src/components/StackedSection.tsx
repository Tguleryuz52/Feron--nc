"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackedSectionProps {
  children: ReactNode;
  className?: string;
  /** If true, section will scale down & fade as the next section scrolls over it */
  isSticky?: boolean;
}

export default function StackedSection({
  children,
  className = "",
  isSticky = true,
}: StackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale from 1 → 0.95 (never below 0.95) and opacity from 1 → 0.4
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.4]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 20]);

  if (!isSticky) {
    return (
      <div ref={ref} className={`relative bg-black ${className}`} style={{ zIndex: 2 }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative bg-black ${className}`} style={{ zIndex: 1 }}>
      <motion.div
        className="sticky top-0 origin-center overflow-hidden bg-black"
        style={{
          scale,
          opacity,
          borderRadius,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
