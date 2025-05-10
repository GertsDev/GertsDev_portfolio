"use client";

import ContactForm from "components/contacts/ContactForm";
import ContactHeader from "components/contacts/ContactHeader";
import ContactInformation from "components/contacts/ContactInformation";
import { Particles } from "components/ui/particles";
import { track } from "@vercel/analytics/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });

        let nameInitialProperty: string | null = null;
        if (formState.name && formState.name.length > 0) {
          nameInitialProperty = formState.name[0] as string;
        }

        let emailDomainProperty: string | null = null;
        const emailParts = formState.email.split("@");
        if (emailParts.length > 1 && emailParts[1] && emailParts[1].length > 0) {
          emailDomainProperty = emailParts[1];
        }

        track("ContactFormSubmittedSuccessfully", {
          nameInitial: nameInitialProperty,
          emailDomain: emailDomainProperty,
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
        console.error("Form submission error:", response.status, errorData);
        alert(`Error: ${errorData.message || "Failed to send message. Please try again."}`);
        track("ContactFormSubmissionFailed", {
          status: response.status,
          errorMessage: errorData.message || "Unknown error",
        });
      }
    } catch (error) {
      console.error("Network or other error submitting form:", error);
      alert("An unexpected error occurred. Please check your connection and try again.");
      track("ContactFormSubmissionError", {
        errorMessage: error instanceof Error ? error.message : "Network/Unknown error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full mt-7">
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
        <ContactHeader />

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <ContactInformation />

          {/* Contact Form */}
          <ContactForm
            formState={formState}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </motion.div>
    </div>
  );
}
