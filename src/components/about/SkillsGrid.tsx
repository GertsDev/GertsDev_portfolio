"use client";

import type { Skill } from "components/about/pageData";
import { motion } from "motion/react";
import type { FC } from "react";

type SkillsGridProps = {
  skills: Skill[];
};

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

const SkillsGrid: FC<SkillsGridProps> = ({ skills }) => (
  <section className="mb-7 md:mb-12 mt-7">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center text-3xl font-bold text-white"
    >
      Technical Arsenal
    </motion.h2>

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {skills.map((skill, index) => (
        <motion.div key={skill.name} variants={item} className="glass-card rounded-xl p-5">
          <div className="mb-3 flex justify-between">
            <span className="font-medium text-white">{skill.name}</span>
            <span className="text-neutral-300">{skill.level}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-700/50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: skill.level }}
              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default SkillsGrid;
