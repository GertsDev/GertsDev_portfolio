"use client";

import { Particles } from "components/ui/particles";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: Project[] = [
    {
      id: "project-1",
      title: "Burgerjoint in space",
      description:
        "BurgerVerse is a modern web application that allows users to create and customize their perfect space burger while exploring a unique cosmic dining experience.",
      image: "/projects_images/burgerverse.jpg",
      tags: ["FullStack", "React", "Redux", "Node.js", "express.js", "mongodb", "auth"],
      github: "https://github.com/GertsDev/burgerverse-frontend",
      demo: "https://burgerverse.space",
      featured: true,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.tags.includes(filter));

  const uniqueTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen w-full mt-7 md:mt-0">
      {/* Particle background */}
      {mounted && (
        <Particles className="absolute inset-0 -z-10" quantity={100} color="#60a5fa" speed={0.2} />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-gradient-vibrant">My Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            A collection of my recent work, showcasing my skills in frontend, backend development
            and UI/UX design
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-800/70 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === "featured"
                ? "bg-blue-600 text-white"
                : "bg-gray-800/70 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Featured
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-12"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -10 }}
                className="glass-card group relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-xl"
              >
                {/* Make image clickable, go to demo or github */}
                {project.demo || project.github ? (
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} demo`}
                    tabIndex={0}
                    className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-t-2xl"
                  >
                    <div className="relative h-64 w-full overflow-hidden rounded-t-2xl sm:h-80 md:h-96">
                      <div className="absolute inset-0 bg-blue-500/10"></div>
                      <Image
                        src={project.image || "/project-placeholder.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {project.featured && (
                        <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                          Featured
                        </div>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="relative h-64 w-full overflow-hidden rounded-t-2xl sm:h-80 md:h-96">
                    <div className="absolute inset-0 bg-blue-500/10"></div>
                    <Image
                      src={project.image || "/project-placeholder.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                        Featured
                      </div>
                    )}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-lg text-gray-400">{project.description}</p>

                  <div className="mb-8 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                          aria-label="View on GitHub"
                          tabIndex={0}
                        >
                          <FiGithub className="h-6 w-6" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                          aria-label="View Live Demo"
                          tabIndex={0}
                        >
                          <FiExternalLink className="h-6 w-6" />
                        </motion.a>
                      )}
                    </div>

                    <motion.a
                      href={project.demo || project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-base font-medium text-blue-400 transition-colors hover:text-blue-300"
                      whileHover={{ x: 5 }}
                      aria-label="View Project Details"
                      tabIndex={0}
                    >
                      View Details
                      <FiArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={item}
              className="col-span-full flex flex-col items-center justify-center py-16 text-center"
            >
              <p className="mb-4 text-xl text-gray-400">
                No projects found with the selected filter.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card mt-20 rounded-xl p-8 text-center md:p-12"
        >
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Interested in working together?
          </h2>
          <p className="mb-8 text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
          >
            Get in Touch
            <FiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
