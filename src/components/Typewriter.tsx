// components/Typewriter.tsx
"use client";
import { useState, useEffect, useCallback, memo } from "react";
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

// Memoize the component to prevent unnecessary re-renders
const Typewriter = memo(function Typewriter({
  texts,
  className = "",
  cursorClassName = "",
  transitionConfig = {
    entering: { opacity: [0, 1], transition: { duration: 0.8 } }, // Increased duration for smoother entry
    exiting: { opacity: [1, 0], transition: { duration: 0.8 } }, // Increased duration for smoother exit
  },
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [key, setKey] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Memoize the cursor blinking function to prevent unnecessary re-renders
  const blinkCursor = useCallback(() => {
    setCursorVisible((prev) => !prev);
  }, []);

  // Handle cursor blinking with optimized interval
  useEffect(() => {
    const blinkInterval = setInterval(blinkCursor, 530);
    return () => clearInterval(blinkInterval);
  }, [blinkCursor]);

  // Optimize the typing effect with useCallback
  const handleTypingEffect = useCallback(() => {
    const currentText = texts[currentTextIndex] || "";

    if (isTyping && displayText !== currentText) {
      // Show cursor while typing
      setCursorVisible(true);
      setDisplayText(currentText.substring(0, displayText.length + 1));
      return;
    }

    if (isTyping && displayText === currentText) {
      setIsDeleting(true);
      setIsTyping(false);
      return;
    }

    if (isDeleting && displayText !== "") {
      // Show cursor while deleting
      setCursorVisible(true);
      setDisplayText(displayText.substring(0, displayText.length - 1));
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIsTyping(true);
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      setKey((prev) => prev + 1);
    }
  }, [currentTextIndex, displayText, isDeleting, isTyping, texts]);

  // Optimize typing effect with different timeouts for typing and deleting
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && displayText !== texts[currentTextIndex]) {
      timeout = setTimeout(handleTypingEffect, 150); // Slower typing speed for a more organic feel
    } else if (isTyping && displayText === texts[currentTextIndex]) {
      timeout = setTimeout(handleTypingEffect, 2500); // Longer pause after typing
    } else if (isDeleting) {
      timeout = setTimeout(handleTypingEffect, 75); // Slightly slower deleting speed
    }

    return () => clearTimeout(timeout);
  }, [currentTextIndex, displayText, isDeleting, isTyping, texts, handleTypingEffect]);

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
});

// Add display name for better debugging
Typewriter.displayName = "Typewriter";

export default Typewriter;
