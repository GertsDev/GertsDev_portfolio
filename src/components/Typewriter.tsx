// components/Typewriter.tsx
"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    let timeout: NodeJS.Timeout;
    const currentText = texts[textIndex] ?? "";

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    texts,
    textIndex,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return <span className="text-blue-500">{displayText}</span>;
};

export default Typewriter;
