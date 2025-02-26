"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Particles } from "~/components/ui/particles";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

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
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: Project[] = [
    {
      id: "project-1",
      title: "AI-Powered Chat Platform",
      description:
        "A real-time chat application with AI integration using React, Node.js, and OpenAI API for intelligent responses and content generation.",
      image: "/project-1.jpg",
      tags: ["React", "Node.js", "OpenAI", "Socket.io"],
      github: "https://github.com/GertsDev/ai-chat-platform",
      demo: "https://ai-chat.gerts.dev",
      featured: true,
    },
    {
      id: "project-2",
      title: "E-commerce Dashboard",
      description:
        "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization and inventory management.",
      image: "/project-2.jpg",
      tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/GertsDev/ecommerce-dashboard",
      demo: "https://dashboard.gerts.dev",
      featured: true,
    },
    {
      id: "project-3",
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and transitions.",
      image: "/project-3.jpg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/GertsDev/gerts.dev",
      demo: "https://gerts.dev",
      featured: false,
    },
    {
      id: "project-4",
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts using the OpenWeatherMap API.",
      image: "/project-4.jpg",
      tags: ["React", "API Integration", "CSS Modules"],
      github: "https://github.com/GertsDev/weather-app",
      demo: "https://weather.gerts.dev",
      featured: false,
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
    <div className="relative min-h-screen w-full">
      {/* Particle background */}
      {mounted && (
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          color={isDark ? "#60a5fa" : "#3b82f6"}
          speed={0.2}
        />
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
            A collection of my recent work, showcasing my skills in frontend development, UI/UX
            design, and full-stack applications.
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
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ y: -10 }}
                className="glass-card group relative overflow-hidden rounded-xl"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl sm:h-56 md:h-64">
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

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                        >
                          <FiGithub className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                        >
                          <FiExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>

                    <motion.a
                      href={project.demo || project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                      whileHover={{ x: 5 }}
                    >
                      View Details
                      <FiArrowRight className="ml-1 h-4 w-4" />
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
