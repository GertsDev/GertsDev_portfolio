"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components that might cause hydration issues
const Typewriter = dynamic(() => import("~/components/Typewriter"), {
  ssr: false,
  loading: () => <span>Frontend Developer</span>,
});

export default function HomePage() {
  const { theme } = useTheme();
  console.log("🚀 ~ HomePage ~ theme:", theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Return a simple loading state or nothing before client-side hydration
  if (!mounted) {
    return (
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 md: inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-blue-400"></span>
              Available for hire
            </div>
            <h1 className="mb-6 max-w-2xl text-center text-4xl font-extrabold tracking-tight md:text-left md:text-5xl xl:text-6xl">
              <span className="block">Hey there!</span>
              <span className="mt-2 block text-gradient-vibrant whitespace-nowrap">
                I&apos;m a Frontend Developer
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-center font-light text-gray-300 md:text-left md:text-lg lg:mb-10 lg:text-xl">
              I build sleek, responsive web interfaces that help businesses crush it. I turn complex
              challenges into clean, elegant digital solutions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 md:py-24">
      {/* Content container */}
      <motion.div
        key="main-content"
        variants={container}
        initial="hidden"
        animate="show"
        className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-12 md:grid-cols-2"
      >
        {/* Text Section */}
        <motion.div variants={item} className="flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 hidden md:inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
          >
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-blue-400"></span>
            Available for hire
          </motion.div>

          <h1 className="mb-6 mt-10 md:mt-0 max-w-2xl text-center text-4xl font-extrabold tracking-tight md:text-left md:text-5xl xl:text-6xl">
            <span className="block">
              Hey there! <span className="animate-waving-hand inline-block">👋</span>
            </span>
            <span className="mt-2 block text-gradient-vibrant whitespace-nowrap">
              I&apos;m a{" "}
              <Typewriter texts={["Frontend Developer", "UI/UX Innovator", "Tech Enthusiast"]} />
            </span>
          </h1>

          <motion.p
            variants={item}
            className="mb-8 max-w-2xl text-center font-light text-gray-300 md:text-left md:text-lg lg:mb-10 lg:text-xl"
          >
            I build sleek, responsive web interfaces that help businesses crush it. I turn complex
            challenges into clean, elegant digital solutions. If you need someone who gets things
            done and isn&apos;t afraid to dive into the nitty-gritty, let&apos;s chat.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Link
              href="/about"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
            >
              Hire Me
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FiArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-gray-700"
            >
              <FiGithub className="mr-2 h-5 w-5" />
              See my work
            </Link>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-800/70 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div variants={item} className="relative h-[25rem] w-full px-4 md:h-[40rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-purple-500/10 blur-xl"></div>

            {/* Image with glass effect frame */}
            <div className="glass-card-dark relative h-full w-full overflow-hidden rounded-2xl p-2">
              <Image
                src="/subject-2.png"
                alt="profile"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="-scale-x-100 object-contain p-3"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-10 rounded-xl bg-white/5 p-3 backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-sm font-medium text-white">Available</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-6 bottom-20 rounded-xl bg-white/5 p-3 backdrop-blur-md"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white">3+ years experience</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
