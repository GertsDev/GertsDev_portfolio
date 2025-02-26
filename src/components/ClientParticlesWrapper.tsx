"use client";

import dynamic from "next/dynamic";

// Dynamically import the ParticlesBackground component with ssr: false
const ParticlesBackground = dynamic(() => import("~/components/ParticlesBackground"), {
  ssr: false,
});

export default function ClientParticlesWrapper() {
  return <ParticlesBackground />;
}
