"use client";

import HeroSection, { SocialLink } from "components/about/HeroSection";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const ParticlesBackground = dynamic(
  () => import("components/ui/particles").then((mod) => mod.Particles),
  {
    loading: () => null,
    ssr: false,
  }
);

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const skills = [
    { name: "React", level: "95%", color: "from-blue-500 to-cyan-400" },
    { name: "Next.js", level: "90%", color: "from-gray-800 to-gray-600" },
    { name: "TypeScript", level: "85%", color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: "80%", color: "from-green-600 to-green-400" },
    { name: "GraphQL", level: "85%", color: "from-pink-600 to-pink-400" },
    { name: "Tailwind", level: "90%", color: "from-cyan-600 to-cyan-400" },
    { name: "Redux", level: "80%", color: "from-purple-600 to-purple-400" },
    { name: "AWS", level: "75%", color: "from-yellow-600 to-yellow-400" },
  ];

  const projects = [
    {
      title: "AI-Powered Chat Platform",
      description:
        "Built a real-time chat platform with AI integration using React, Node.js, and OpenAI.",
      tags: ["React", "Node.js", "OpenAI"],
      image: "/project-1.jpg",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Developed a comprehensive analytics dashboard for e-commerce businesses with real-time data visualization.",
      tags: ["Next.js", "TypeScript", "Chart.js"],
      image: "/project-2.jpg",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/GertsDev",
      label: "GitHub",
      icon: <FiGithub className="h-5 w-5 text-white" />,
    },
    {
      href: "https://linkedin.com/in/GertsDev",
      label: "LinkedIn",
      icon: <FiLinkedin className="h-5 w-5 text-white" />,
    },
    {
      href: "mailto:hello@gerts.dev",
      label: "Email",
      icon: <FiMail className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      {/* Particle background */}
      {mounted && (
        <ParticlesBackground
          className="absolute inset-0 -z-10"
          quantity={100}
          color="#60a5fa"
          speed={0.2}
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl px-4 py-16 mt-7 sm:px-6 md:py-24"
      >
        {/* Hero Section */}
        <HeroSection
          avatarSrc="/about-avatar.png"
          name="Kirill Gertsik"
          title="Frontend Developer in NYC"
          socialLinks={socialLinks}
        />

        {/* Quick Stats */}
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
              >
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
              >
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
              >
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

        {/* Technical Skills */}
        <section className="mb-20 md:mb-32">
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
                  <span className="text-blue-400">{skill.level}</span>
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

        {/* Featured Projects */}
        <section className="mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold text-white"
          >
            Featured Work
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2"
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

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 text-center md:p-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-white">Looking to Hire in NYC?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Based in New York City and ready to join a forward-thinking team. Bringing expertise in
            modern frontend development, AI integration, and a track record of delivering
            exceptional user experiences.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="mailto:hello@gerts.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-500/20 sm:w-auto"
            >
              <FiMail className="mr-2 h-5 w-5" />
              Contact Me
            </motion.a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
