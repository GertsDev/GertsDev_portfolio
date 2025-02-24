"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TypewriterText({ texts }: { texts: string[] }) {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState(texts[0] ?? "");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || texts.length === 0) return;

    let timeout: NodeJS.Timeout;
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    const typeNextCharacter = () => {
      const currentText = texts[currentTextIndex];
      if (!currentText) return;

      if (currentCharIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentCharIndex) + "█");
        currentCharIndex++;
        timeout = setTimeout(typeNextCharacter, 100);
      } else {
        timeout = setTimeout(() => {
          currentCharIndex = 0;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          typeNextCharacter();
        }, 1000);
      }
    };

    typeNextCharacter();

    return () => clearTimeout(timeout);
  }, [mounted, texts]);

  // Return empty string during SSR to prevent hydration mismatch
  if (!mounted) return <span className="block min-h-[1.5em]">{texts[0]}</span>;

  return (
    <motion.span className="block min-h-[1.5em]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {displayText}
    </motion.span>
  );
}

export default function UnderDevelopment() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="relative w-full max-w-4xl rounded-4xl bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1A365D] p-8">
        {/* Animated background */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-4xl">
          <div className="absolute h-[500px] w-[500px] -translate-x-1/2 translate-y-[-50%] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-[-30%] rounded-full bg-purple-500/20 blur-[100px]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Heading */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
                Coming Soon
              </h1>
              <p className="mb-8 text-lg font-light tracking-wide text-gray-300 md:text-xl">
                Crafting a digital experience worth waiting for
              </p>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
              className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/40 p-4 backdrop-blur-xl md:p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80 transition-colors hover:bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 transition-colors hover:bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80 transition-colors hover:bg-green-400"></div>
                <div className="ml-4 text-sm text-gray-400">portfolio.dev</div>
              </div>

              {/* Terminal Content */}
              <div className="h-10 font-mono text-lg text-emerald-400">
                <TypewriterText
                  texts={[
                    "npm install @portfolio/next-gen",
                    "loading creative modules...",
                    "brewing artisanal coffee ☕",
                    "optimizing user experiences...",
                    "ETA: Any moment now ✨",
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
