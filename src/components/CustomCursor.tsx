"use client";

import { useEffect, useRef, useCallback } from "react";

const RING_SIZE = 24;
const DOT_SIZE = 3;

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    pos.current.x = lerp(pos.current.x, target.current.x, 0.05);
    pos.current.y = lerp(pos.current.y, target.current.y, 0.05);

    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX - RING_SIZE / 2;
      target.current.y = e.clientY - RING_SIZE / 2;
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <div
      ref={ringRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: RING_SIZE,
        height: RING_SIZE,
        borderRadius: "50%",
        border: "1px solid rgba(245, 245, 247, 0.5)",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform",
      }}
    >
      {/* Center dot */}
      <div
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: "50%",
          backgroundColor: "rgba(245, 245, 247, 0.7)",
        }}
      />
    </div>
  );
}
