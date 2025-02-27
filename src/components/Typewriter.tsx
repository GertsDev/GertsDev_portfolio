// components/Typewriter.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, TargetAndTransition } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  className?: string;
  cursorClassName?: string;
  transitionConfig?: {
    entering: TargetAndTransition;
    exiting: TargetAndTransition;
  };
}

export default function Typewriter({
  texts,
  className = "",
  cursorClassName = "",
  transitionConfig = {
    entering: { opacity: [0, 1], transition: { duration: 0.5 } },
    exiting: { opacity: [1, 0], transition: { duration: 0.5 } },
  },
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [key, setKey] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Handle cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const currentText = texts[currentTextIndex] || "";

    if (isTyping && displayText !== currentText) {
      // Show cursor while typing
      setCursorVisible(true);

      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (isTyping && displayText === currentText) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText !== "") {
      // Show cursor while deleting
      setCursorVisible(true);

      const timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIsTyping(true);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      setKey((prev) => prev + 1);
    }
  }, [currentTextIndex, displayText, isDeleting, isTyping, texts]);

  return (
    <span className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={transitionConfig.exiting}
          animate={transitionConfig.entering}
          exit={transitionConfig.exiting}
          className="inline-block"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className={`ml-0.5 inline-block h-5 w-[2px] ${cursorClassName}`}
      ></motion.span>
    </span>
  );
}
