"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components that might cause hydration issues
const Typewriter = dynamic(() => import("~/components/Typewriter"), {
  ssr: false,
  loading: () => <span className="text-blue-400">Frontend Developer</span>,
});

export default function HomePage() {
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
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-blue-400"></span>
              Available for hire
            </div>
            <h1 className="mb-6 max-w-2xl text-center text-4xl font-extrabold tracking-tight md:text-left md:text-5xl xl:text-6xl">
              <span className="block">Hey there!</span>
              <span className="mt-2 block text-gradient-vibrant whitespace-nowrap">
                I&apos;m a <span className="text-blue-400">Frontend Developer</span>
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
      {/* Mobile Avatar (visible only on mobile) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-3 mt-8 block md:hidden"
      >
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur"></div>
        <Image
          src="/about-avatar.png"
          alt="Kirill Gertsik"
          width={150}
          height={150}
          className="relative rounded-full border-2 border-white/20 object-cover"
        />
      </motion.div>

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
            <span className="mt-2 block text-gradient-vibrant">
              I&apos;m a{" "}
              <Typewriter
                texts={["Frontend Developer", "UI/UX Innovator", "Tech Enthusiast"]}
                className="md:text-inherit text-blue-400"
                cursorClassName="md:bg-current bg-blue-400"
              />
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
          <motion.div variants={item} className="mt-10 hidden md:flex md:flex-wrap md:gap-2">
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
        <motion.div
          variants={item}
          className="relative w-full px-4 flex items-center justify-center"
        >
          {/* Desktop Image (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] md:aspect-[2/3] max-h-[90vh] hidden md:block"
          >
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-purple-500/20 blur-xl"></div>

            {/* Image with glass effect frame - IMPROVED */}
            <motion.div
              className="glass-card-dark mt-5 relative h-[40rem] w-[28rem] mx-auto overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md shadow-xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))",
                boxShadow:
                  "0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)",
              }}
              animate={{
                y: [0, -8, 0],
                rotateZ: [0, 0.5, 0, -0.5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-40 rounded-2xl"></div>

              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 mix-blend-overlay"></div>

              {/* Status indicator in top-right corner */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md border border-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-white">Available</span>
              </div>

              {/* Experience badge in bottom-left */}
              <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md border border-white/10">
                <span className="text-sm font-medium text-white">3+ years experience</span>
              </div>

              {/* Improved image positioning */}
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src="/coolDude.png"
                  alt="profile"
                  width={400}
                  height={600}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="-scale-x-100 object-contain object-center translate-y-16"
                  style={{ maxHeight: "100%" }}
                />
              </div>

              {/* Improved gradient fade to blend bottom */}
              <div className="absolute bottom-0 h-32 rounded-b-2xl w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
