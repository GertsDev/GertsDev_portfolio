"use client";

import { Particles } from "components/ui/particles";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "components/ui/tooltip";
import { cn } from "lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Modern 3D text effect with WebGL
function GlitchText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative perspective-[1000px]", className)}
      style={{ opacity: textOpacity, scale: textScale }}
    >
      <motion.h1
        className="mb-6 bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-500 bg-clip-text text-5xl font-bold text-transparent md:text-8xl"
        initial={{ rotateX: 15 }}
        animate={{
          rotateX: [15, -5, 15],
          textShadow: [
            "0 0 5px rgba(124, 58, 237, 0.5)",
            "0 0 15px rgba(14, 165, 233, 0.7)",
            "0 0 5px rgba(124, 58, 237, 0.5)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.h1>

      {/* Glitch effect overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-violet-500/20 via-transparent to-cyan-500/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 animate-[glitch_3s_ease-in-out_infinite] bg-gradient-to-bl from-transparent via-fuchsia-500/10 to-transparent mix-blend-overlay"></div>
      </div>
    </motion.div>
  );
}

// Advanced typewriter with AI-like response simulation
function AIResponseText({ texts }: { texts: string[] }) {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || texts.length === 0) return;

    let timeout: NodeJS.Timeout;
    let currentCharIndex = 0;

    const typeNextCharacter = () => {
      const currentText = texts[currentTextIndex];
      if (!currentText) return;

      if (currentCharIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentCharIndex));
        currentCharIndex++;

        // Variable typing speed for more natural effect
        const speed = Math.random() * 50 + 30;
        timeout = setTimeout(typeNextCharacter, speed);
      } else {
        // Pause at the end of text
        timeout = setTimeout(() => {
          // Show thinking animation before next text
          setIsThinking(true);

          timeout = setTimeout(() => {
            setIsThinking(false);
            currentCharIndex = 0;
            const nextIndex = (currentTextIndex + 1) % texts.length;
            setCurrentTextIndex(nextIndex);
            setDisplayText("");
            typeNextCharacter();
          }, 1500);
        }, 2000);
      }
    };

    typeNextCharacter();

    return () => clearTimeout(timeout);
  }, [mounted, texts, currentTextIndex]);

  // Return empty string during SSR to prevent hydration mismatch
  if (!mounted) return <span className="block min-h-[1.5em]">{texts[0]}</span>;

  return (
    <div className="font-mono text-lg">
      <div className="flex items-center gap-2">
        <span className="text-emerald-400">{displayText}</span>
        {isThinking ? (
          <motion.div className="flex gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-emerald-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-emerald-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-emerald-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>
        ) : (
          <motion.span
            className="inline-block h-5 w-2 bg-emerald-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            █
          </motion.span>
        )}
      </div>
    </div>
  );
}

// Interactive command suggestions
function CommandSuggestion({
  command,
  description,
  onClick,
}: {
  command: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.button
            className="group mt-2 flex w-full items-center rounded-lg border border-gray-700/30 bg-gray-800/40 px-3 py-2 text-left text-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-gray-800/60"
            whileHover={{ x: 5 }}
            onClick={onClick}
          >
            <span className="mr-2 font-mono text-cyan-400">$</span>
            <span className="font-mono text-gray-300 group-hover:text-white">{command}</span>
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="right" className="max-w-[200px] text-xs">
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function UnderDevelopment() {
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);

  const commands = [
    {
      command: "npm run experience --immersive",
      description: "Launch the immersive 3D portfolio experience with WebXR support",
      texts: [
        "Initializing WebXR environment...",
        "Loading spatial audio components...",
        "Preparing immersive showcase...",
        "Calibrating haptic feedback...",
        "Ready to explore in 3D space ✨",
      ],
    },
    {
      command: "npm run ai-assistant --interactive",
      description: "Start an interactive AI session to explore projects with natural language",
      texts: [
        "Initializing neural interface...",
        "Loading conversational model...",
        "Connecting to knowledge graph...",
        "Personalizing responses to visitor...",
        "AI assistant ready for conversation 🤖",
      ],
    },
    {
      command: "npm run showcase --realtime",
      description: "View live project metrics and real-time collaboration features",
      texts: [
        "Establishing secure connection...",
        "Syncing with distributed nodes...",
        "Fetching real-time analytics...",
        "Rendering interactive dashboards...",
        "Live showcase environment active 📊",
      ],
    },
  ];

  return (
    <div className="relative flex mt-7 md:mt-0 min-h-[100dvh] w-full items-center justify-center overflow-hidden p-4">
      {/* Particle background */}
      <Particles className="absolute inset-0 -z-10" quantity={100} color="#60a5fa" speed={0.2} />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute inset-0 -z-20 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>

      <div className="relative w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 rounded-3xl border border-gray-800/50 bg-black/30 p-8 shadow-2xl backdrop-blur-xl md:p-12"
        >
          {/* Glass reflections */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -inset-[100%] animate-[spin_25s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-[0.03]"></div>
            <div className="absolute -left-1/2 -top-1/2 h-[500px] w-[500px] animate-pulse rounded-full bg-violet-500/10 blur-[120px]" />
            <div className="absolute -bottom-1/2 -right-1/2 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-[120px]" />
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center "
            >
              {/* Heading with 3D effect */}
              <GlitchText text="Coming in 2025" />

              <motion.p
                className="mx-auto mb-12 max-w-2xl text-lg font-light tracking-wide text-gray-300 md:text-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Crafting a next-generation digital experience with AI-powered interactions,
                immersive 3D environments, and real-time collaboration
              </motion.p>

              {/* Futuristic Terminal Window */}
              <motion.div
                className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-700/30 bg-gray-900/60 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/* Terminal Header with modern UI */}
                <div className="flex items-center justify-between border-b border-gray-800/50 bg-gray-900/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80 transition-colors hover:bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80 transition-colors hover:bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80 transition-colors hover:bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-400">
                    portfolio.dev ~ neural-interface
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-sm bg-gray-800 p-0.5">
                      <div className="h-full w-full rounded-sm bg-gray-600"></div>
                    </div>
                    <div className="h-4 w-4 rounded-sm bg-gray-800 p-0.5">
                      <div className="h-full w-full rounded-sm bg-gray-600"></div>
                    </div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-cyan-400">$</span>
                    <span className="font-mono text-gray-300">
                      {selectedCommand ? selectedCommand : "npm run preview --help"}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    {!selectedCommand ? (
                      <motion.div
                        key="commands"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 pt-2"
                      >
                        <div className="text-sm text-gray-400">Select a preview option:</div>
                        {commands.map((cmd) => (
                          <CommandSuggestion
                            key={cmd.command}
                            command={cmd.command}
                            description={cmd.description}
                            onClick={() => setSelectedCommand(cmd.command)}
                          />
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="response"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-[100px] pt-2"
                      >
                        <AIResponseText
                          texts={commands.find((c) => c.command === selectedCommand)?.texts || []}
                        />

                        <motion.button
                          className="mt-6 rounded-lg border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs text-gray-300 hover:border-gray-600 hover:bg-gray-800 hover:text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCommand(null)}
                        >
                          Back to options
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Futuristic countdown or status indicator */}
              <motion.div
                className="mx-auto mt-12 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <div className="text-sm font-medium text-emerald-500">Development in progress</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UnderDevelopment;
