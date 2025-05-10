"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

// Dynamically import the Particles component with reduced priority
const Particles = dynamic(() => import("components/ui/particles").then((mod) => mod.Particles), {
  ssr: false,
  loading: () => null, // Don't show anything while loading
});

export default function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Use IntersectionObserver to only render particles when visible
  useEffect(() => {
    setMounted(true);

    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    // Use intersection observer to detect if component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    // Observe the document body since this is a background element
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Reduce particle quantity on mobile devices
  const getParticleQuantity = useCallback(() => {
    if (typeof window === "undefined") return 50;
    return window.innerWidth < 768 ? 50 : 100;
  }, []);

  if (!mounted) return null;

  return isVisible ? (
    <Particles
      className="absolute inset-0 -z-10"
      quantity={getParticleQuantity()}
      color="#60a5fa"
      speed={0.15} // Reduced speed for better performance
      staticity={70} // Increased staticity for less movement
      ease={30} // Reduced ease for better performance
    />
  ) : null;
}
