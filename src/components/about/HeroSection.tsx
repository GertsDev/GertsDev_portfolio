import { motion } from "motion/react";
import Image from "next/image";
import type { FC, JSX } from "react";

export type SocialLink = {
  href: string;
  label: string;
  icon: JSX.Element;
};

export type HeroSectionProps = {
  avatarSrc: string;
  name: string;
  title: string;
  socialLinks: SocialLink[];
};

const HeroSection: FC<HeroSectionProps> = ({ avatarSrc, name, title, socialLinks }) => (
  <section className="mb-2 md:mb-2  ">
    <div className="glass-card-dark relative overflow-hidden rounded-3xl">
      <div className="flex flex-col items-center justify-center px-4 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur"></div>
          <Image
            src={avatarSrc}
            alt={name}
            width={150}
            height={150}
            className="relative rounded-full border-2 border-white/20 object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 text-center text-xl font-light text-gray-300 md:text-2xl"
        >
          {title}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              tabIndex={0}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(link.href, "_blank", "noopener,noreferrer");
                }
              }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
