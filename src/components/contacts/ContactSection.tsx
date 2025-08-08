"use client";

import ContactForm from "components/contacts/ContactForm";
import ContactHeader from "components/contacts/ContactHeader";
import ContactInformation from "components/contacts/ContactInformation";
import { track } from "@vercel/analytics/react";
import { motion } from "motion/react";
import { useState } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });

        const nameInitial = formState.name?.[0] ?? null;
        const emailDomain = formState.email.split("@")[1] ?? null;
        track("ContactFormSubmittedSuccessfully", { nameInitial, emailDomain });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
        alert(`Error: ${errorData.message || "Failed to send message. Please try again."}`);
        track("ContactFormSubmissionFailed", {
          status: response.status,
          errorMessage: errorData.message || "Unknown error",
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Network/Unknown error";
      alert("An unexpected error occurred. Please check your connection and try again.");
      track("ContactFormSubmissionError", { errorMessage: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24"
      >
        <ContactHeader />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <ContactInformation />
          <ContactForm
            formState={formState}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
