// Split into server and client components for better performance
import ClientSideContent from "components/home/ClientSideContent";
import HomeImageSection from "components/home/HomeImageSection";

import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import "styles/animations.css"; // Import the CSS animations

// This is now a Server Component by default (no "use client" directive)
export default function HomePage() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start px-4 py-16 md:py-24">
      {/* Static content rendered on server */}
      <div className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-2 md:gap-10 md:grid-cols-2">
        {/* Text Section - Server Rendered */}
        <div className="flex flex-col items-center md:items-start order-2 md:order-none">
          {/* Client-side interactive content */}
          <ClientSideContent />

          <p className="mb-15 max-w-2xl text-center font-light text-gray-300 md:text-left md:text-lg lg:mb-10 lg:text-xl">
            {`I specialize in crafting sleek, responsive web interfaces that not only look great but also drive results. My background as a senior financial advisor enriches my approach, enabling me to create user-centric solutions aligned with business objectives.`}
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 order-2 md:order-none">
            <Link
              href="/contacts"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
            >
              Contact
              <span className="ml-2 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                <FiArrowRight className="h-5 w-5" />
              </span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-gray-700"
            >
              <FiGithub className="mr-2 h-5 w-5" />
              See my work
            </Link>
          </div>

          {/* Tech stack badges */}
          <div className="mt-10 hidden md:flex md:flex-wrap md:gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-800/70 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section - Server Rendered with optimized loading */}
        <div className="order-1 md:order-none">
          <HomeImageSection />
        </div>
      </div>
    </section>
  );
}
