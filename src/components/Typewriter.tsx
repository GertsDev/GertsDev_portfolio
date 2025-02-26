// components/Typewriter.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const Typewriter = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [mounted, setMounted] = useState(false);
  const randomRef = useRef<() => number>(() => 0);

  // Only run on client-side
  useEffect(() => {
    setMounted(true);
    // Set up the random function only on client side
    randomRef.current = () => Math.random();

    // Initialize with empty text to start the typing animation
    if (texts && texts.length > 0) {
      setCurrentText("");
    }
  }, [texts]);

  useEffect(() => {
    if (!mounted || !texts || texts.length === 0) return;

    let timeout: NodeJS.Timeout;
    const safeIndex = currentTextIndex % texts.length;
    const currentFullText = texts[safeIndex] || "";

    // Variable speed for more natural typing - only use random on client side
    const speed = isDeleting
      ? deletingSpeed
      : currentText.length === currentFullText.length
        ? delayBetweenTexts
        : typingSpeed + (mounted ? randomRef.current() * 50 : 0);

    if (isDeleting) {
      // Deleting text
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsBlinking(true);
        timeout = setTimeout(() => setIsBlinking(false), 500);
      } else {
        // Delete one character
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed);
      }
    } else {
      // Typing text
      if (currentText.length === currentFullText.length) {
        // Finished typing, wait before deleting
        setIsBlinking(true);
        timeout = setTimeout(() => {
          setIsBlinking(false);
          setIsDeleting(true);
        }, speed);
      } else {
        // Type one character
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    mounted,
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    isBlinking,
  ]);

  // For server-side rendering, return a static placeholder
  if (typeof window === "undefined" || !mounted) {
    return <span>{texts[0] || ""}</span>;
  }

  return (
    <span className="inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          {currentText}
          <motion.span
            className="ml-0.5 inline-block h-full w-0.5 bg-current"
            animate={{ opacity: isBlinking ? [1, 0, 1] : 1 }}
            transition={{ duration: 0.8, repeat: isBlinking ? Infinity : 0 }}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default Typewriter;
