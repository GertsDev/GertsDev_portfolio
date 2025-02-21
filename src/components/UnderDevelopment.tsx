"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function TypewriterText({ texts }: { texts: string[] }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    const typeNextCharacter = () => {
      const currentText = texts[currentTextIndex];

      if (currentCharIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentCharIndex) + "█");
        currentCharIndex++;
        timeout = setTimeout(typeNextCharacter, 100);
      } else {
        // Pause at the end of the text
        timeout = setTimeout(() => {
          currentCharIndex = 0;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          typeNextCharacter();
        }, 1000);
      }
    };

    typeNextCharacter();

    return () => clearTimeout(timeout);
  }, [texts]);

  return (
    <motion.span
      className="block min-h-[1.5em]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
    </motion.span>
  );
}

export default function UnderDevelopment() {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  useEffect(() => {
    setCodeLines(
      Array.from({ length: 100 }, () =>
        Math.random().toString(36).substring(2, 7),
      ),
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: [0, 1, 0],
      y: [0, 280],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A192F] to-[#112240] p-8">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {codeLines.map((code, i) => (
          <motion.div
            key={i}
            className="font-mono text-sm text-emerald-500"
            variants={itemVariants}
          >
            {code}
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-6xl font-bold text-transparent">
              Building Something Amazing
            </h1>
            <p className="mb-8 text-xl text-gray-400">
              My portfolio is currently under construction
            </p>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-xl bg-gray-900/80 p-4 backdrop-blur-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 pb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-emerald-500">
              <TypewriterText
                texts={[
                  "npm install portfolio@latest",
                  "initializing components...",
                  "brewing coffee ☕",
                  "crafting pixel-perfect designs...",
                  "ETA: Coming soon™",
                ]}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
