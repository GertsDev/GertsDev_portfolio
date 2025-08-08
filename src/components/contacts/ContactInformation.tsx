"use client";

import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";

// Animation variants for motion
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

const ContactInformation = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center"
    >
      <motion.div variants={item} className="mb-8">
        <h2 className="mb-6 text-2xl font-bold text-white">Contact Information</h2>
        <p className="mb-6 text-gray-300">
          Feel free to reach out through any of the following channels. I'm always open to
          discussing new projects, creative ideas, or opportunities.
        </p>
      </motion.div>

      <motion.div variants={item} className="mb-6 flex items-start">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800">
          <FiMail className="h-5 w-5 text-neutral-200" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">Email</h3>
          <a
            href="mailto:hello@gerts.dev"
            className="text-gray-300 transition-colors hover:text-neutral-100"
            aria-label="Email Gerts Dev at hello@gerts.dev"
          >
            hello@gerts.dev
          </a>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-6 flex items-start">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800">
          <FiMapPin className="h-5 w-5 text-neutral-200" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">Location</h3>
          <p className="text-gray-300">New York City, NY</p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-8 flex items-start">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800">
          <FiMessageCircle className="h-5 w-5 text-neutral-200" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white">Availability</h3>
          <p className="text-gray-300">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h3 className="mb-4 text-lg font-medium text-white">Connect with me</h3>
        <div className="flex space-x-4">
          <motion.a
            href="https://github.com/GertsDev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-neutral-700 hover:text-white"
            aria-label="Visit GertsDev's GitHub profile"
            tabIndex={0}
          >
            <FiGithub className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/GertsDev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-neutral-700 hover:text-white"
            aria-label="Visit GertsDev's LinkedIn profile"
            tabIndex={0}
          >
            <FiLinkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://x.com/GertsDev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-neutral-700 hover:text-white"
            aria-label="Visit GertsDev's X (formerly Twitter) profile"
            tabIndex={0}
          >
            <FaXTwitter className="h-5 w-5" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInformation;
