// src/components/contacts/ContactHeader.tsx
"use client";

import { motion } from "motion/react";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        <span className="text-gradient-vibrant">Get in Touch</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-300">
        Have a project in mind or want to discuss potential opportunities? I'd love to hear from
        you.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
