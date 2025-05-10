"use client";

import HeroSection, { SocialLink } from "components/about/HeroSection";
import ProjectsGrid from "components/about/ProjectsGrid";
import SkillsGrid from "components/about/SkillsGrid";
import { projects, skills } from "components/about/pageData";
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
        className="container mx-auto max-w-5xl px-4 pt-16 pb-7 mt-7 md:mt-0 sm:px-6 md:py-24"
      >
        {/* Hero Section */}
        <HeroSection
          avatarSrc="/about-avatar.png"
          name="Kirill Gertsik"
          title="Frontend Developer | 3 Years of Commercial Experience"
          socialLinks={socialLinks}
        />

        {/* Technical Skills */}
        <SkillsGrid skills={skills} />

        {/* Featured Projects */}
        <ProjectsGrid projects={projects} />
      </motion.div>
    </div>
  );
}
