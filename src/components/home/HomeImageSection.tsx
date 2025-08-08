import Image from "next/image";
import React from "react";

const HomeImageSection: React.FC = () => (
  <div className="relative w-full px-4 flex items-center justify-center">
    {/* Mobile Avatar (visible only on mobile) */}
    <div className="relative mb-3 mt-8 block md:hidden">
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-zinc-400 to-zinc-200 opacity-75 blur"></div>
      <Image
        src="/about-avatar.png"
        alt="Kirill Gertsik"
        width={150}
        height={150}
        className="relative rounded-full border-2 border-white/20 object-cover"
        priority
        fetchPriority="high"
        quality={85}
      />
    </div>

    {/* Desktop Image (hidden on mobile) */}
    <div className="relative w-full aspect-[3/4] md:aspect-[2/3] max-h-[90vh] hidden md:block">
      {/* Decorative elements */}
      <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-zinc-500/20 blur-xl"></div>
      <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-zinc-300/20 blur-xl"></div>

      {/* Image with glass effect frame - OPTIMIZED with CSS animations */}
      <div
        className="glass-card-dark animate-float mt-5 relative h-[40rem] w-[28rem] mx-auto overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md shadow-xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(212, 212, 216, 0.06), rgba(161, 161, 170, 0.06))",
          boxShadow: "0 0 40px rgba(212, 212, 216, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Simplified glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-400/20 via-zinc-600/30 to-zinc-400/20 rounded-lg blur-xl opacity-30 animate-pulse-slow"></div>

        {/* Status indicator in top-right corner */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md border border-white/10">
          <div
            className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"
            aria-label="Online status"
          ></div>
          <span className="text-sm font-medium text-white">Available</span>
        </div>

        {/* Experience badge in bottom-left */}
        <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md border border-white/10">
          <span className="text-sm font-medium text-white">3+ years experience</span>
        </div>

        {/* Improved image positioning with optimized loading */}
        <div className="relative h-full w-full flex items-center justify-center">
          <Image
            src="/coolDude.png"
            alt="profile"
            width={400}
            height={600}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 0px, (max-width: 1200px) 50vw, 33vw"
            className="-scale-x-100 object-contain object-center translate-y-16"
            style={{ maxHeight: "100%" }}
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QVQCwwAAAABJRU5ErkJggg=="
          />
        </div>

        {/* Improved gradient fade to blend bottom */}
        <div className="absolute bottom-0 h-32 rounded-b-2xl w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
    </div>
  </div>
);

export default HomeImageSection;
