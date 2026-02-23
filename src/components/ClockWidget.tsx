"use client";

import { useEffect, useState } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const nyTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(nyTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white/60 text-[11px] font-light uppercase tracking-[0.2em]">
      <span className="text-white/40">New York:</span>{" "}
      <span className="font-normal tabular-nums tracking-[0.15em]">{time}</span>
    </div>
  );
}
