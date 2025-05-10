import { motion } from "motion/react";
import type { FC } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const QuickStats: FC = () => (
  <motion.section
    variants={container}
    initial="hidden"
    animate="show"
    className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:mb-32"
  >
    <motion.div variants={item} className="glass-card rounded-2xl p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 mx-auto">
        <svg
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <title>Frontend Experience</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">3+ Years</h3>
      <p className="text-gray-400">Frontend Experience</p>
    </motion.div>

    <motion.div variants={item} className="glass-card rounded-2xl p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 mx-auto">
        <svg
          className="h-8 w-8 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <title>Completed Projects</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">50+ Projects</h3>
      <p className="text-gray-400">Completed</p>
    </motion.div>

    <motion.div
      variants={item}
      className="glass-card rounded-2xl p-6 text-center sm:col-span-2 md:col-span-1"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 mx-auto">
        <svg
          className="h-8 w-8 text-cyan-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <title>AI Enthusiast</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">AI Enthusiast</h3>
      <p className="text-gray-400">AI Implementations in real world projects</p>
    </motion.div>
  </motion.section>
);

export default QuickStats;
