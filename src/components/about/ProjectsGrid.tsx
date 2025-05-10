import type { Project } from "components/about/pageData";
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

type ProjectsGridProps = {
  projects: Project[];
};

const ProjectsGrid: FC<ProjectsGridProps> = ({ projects }) => (
  <section className="mb-2 md:mb-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 text-center text-3xl font-bold text-white"
    >
      Featured Work
    </motion.h2>

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={item}
          whileHover={{ y: -10 }}
          className="glass-card group relative overflow-hidden rounded-xl"
        >
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProjectsGrid;
