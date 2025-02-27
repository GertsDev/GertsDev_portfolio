"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/GertsDev",
    icon: FaGithub,
    label: "GitHub",
    hoverColor: "group-hover:text-purple-400",
  },
  {
    href: "https://linkedin.com/in/GertsDev",
    icon: FaLinkedin,
    label: "LinkedIn",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    href: "mailto:hello@gerts.dev",
    icon: FaEnvelope,
    label: "Email",
    text: "hello@gerts.dev",
    hoverColor: "group-hover:text-emerald-400",
  },
  {
    href: "https://x.com/GertsDev",
    icon: FaXTwitter,
    label: "Twitter / X",
    hoverColor: "group-hover:text-cyan-400",
  },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contacts", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-gray-800/50 bg-black/30 backdrop-blur-md">
      {/* Gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="mx-auto max-w-screen-xl px-4 py-12">
        {/* Main footer content */}
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand section */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="mb-4 inline-block">
                <h2 className="text-2xl font-bold text-white">
                  Gerts<span className="text-blue-500">Dev</span>
                </h2>
              </Link>
              <p className="mb-4 text-sm text-gray-400">
                Frontend developer specializing in creating modern, responsive web applications with
                cutting-edge technologies.
              </p>
              <p className="text-sm text-gray-500">Based in New York City, NY</p>
            </motion.div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 transition-colors hover:text-blue-400"
                    >
                      <span className="mr-2 inline-block h-1 w-1 rounded-full bg-gray-600 transition-all group-hover:bg-blue-400 group-hover:w-2"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex items-center space-x-2 transition-all duration-300"
                    >
                      <social.icon
                        className={`h-4 w-4 text-gray-400 transition-colors duration-300 ${social.hoverColor}`}
                      />
                      <span
                        className={`text-sm text-gray-400 transition-colors duration-300 ${social.hoverColor}`}
                      >
                        {social.text || social.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Stay Updated</h3>
              <p className="mb-4 text-sm text-gray-400">
                Subscribe to receive updates on new projects and tech insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-lg border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800/50 pt-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} GertsDev. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center md:text-right"
          >
            <p className="flex flex-col items-center gap-2 text-xs text-gray-500 md:flex-row">
              <span>Built with Next.js, Tailwind CSS, and Framer Motion</span>
              <span className="hidden h-1 w-1 rounded-full bg-gray-700 md:inline-block"></span>
              <Link
                href="https://github.com/GertsDev/GertsDev_portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-500 hover:text-blue-400"
              >
                View Source <FiExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
