"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Particles component
const Particles = dynamic(() => import("~/components/ui/particles").then((mod) => mod.Particles), {
  ssr: false,
});

export default function ParticlesBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted ? theme === "dark" : true; // Default to true during SSR for dark theme stars

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      className="absolute inset-0 -z-10"
      quantity={100}
      color={isDark ? "#60a5fa" : "#3b82f6"}
      speed={0.2}
      staticity={50}
      ease={50}
    />
  );
}
