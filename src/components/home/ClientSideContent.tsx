"use client";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// Dynamically import Typewriter with improved loading strategy and reduced bundle size
const Typewriter = dynamic(() => import("components/ui/Typewriter"), {
  ssr: false,
  loading: () => <span className="text-blue-400">Frontend Developer</span>,
});

export default function ClientSideContent() {
  // Use a ref to track if the component is mounted
  const isMounted = useRef(false);

  // Set mounted on client-side only
  useEffect(() => {
    isMounted.current = true;

    // Clean up function
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Simplified animation variants with fewer properties
  const glowTextContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const glowTextItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <h1 className="mb-6 mt-10 md:mt-0 max-w-2xl text-center text-4xl font-extrabold tracking-tight md:text-left md:text-5xl xl:text-6xl">
      <span className="block">
        Hey there! <span className="animate-waving-hand inline-block">👋</span>
      </span>
      <motion.span
        className="mt-2 block relative glow-text-container"
        variants={glowTextContainer}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={glowTextItem} className="relative inline-block glow-text">
          I&apos;m
        </motion.span>{" "}
        <motion.span variants={glowTextItem} className="relative inline-block glow-text">
          a
        </motion.span>{" "}
        <span className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg blur-md opacity-70 animate-pulse-slow"></div>
          <div className="relative">
            <Typewriter
              texts={["Frontend Developer", "UI/UX Innovator", "Tech Enthusiast"]}
              className="relative inline-block text-blue-400 md:text-inherit glow-text"
              cursorClassName="bg-blue-400 md:bg-white/80"
              transitionConfig={{
                entering: {
                  opacity: [0, 1],
                  transition: { duration: 0.5, ease: "easeOut" },
                },
                exiting: {
                  opacity: [1, 0],
                  transition: { duration: 0.5, ease: "easeIn" },
                },
              }}
            />
          </div>
        </span>
      </motion.span>
    </h1>
  );
}
