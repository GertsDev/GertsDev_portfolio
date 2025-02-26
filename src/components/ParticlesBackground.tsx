"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Particles component
const Particles = dynamic(() => import("~/components/ui/particles").then((mod) => mod.Particles), {
  ssr: false,
});

export default function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      className="absolute inset-0 -z-10"
      quantity={100}
      color="#60a5fa" // Always use the dark theme color
      speed={0.2}
      staticity={50}
      ease={50}
    />
  );
}
