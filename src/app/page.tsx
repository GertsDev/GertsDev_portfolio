// Split into server and client components for better performance
import ClientSideContent from "components/ClientSideContent";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import "styles/animations.css"; // Import the CSS animations

// This is now a Server Component by default (no "use client" directive)
export default function HomePage() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start px-4 py-16 md:py-24">
      {/* Static content rendered on server */}
      <div className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Text Section - Server Rendered */}
        <div className="flex flex-col items-center md:items-start">
          {/* Client-side interactive content */}
          <ClientSideContent />

          <p className="mb-8 max-w-2xl text-center font-light text-gray-300 md:text-left md:text-lg lg:mb-10 lg:text-xl">
            I build sleek, responsive web interfaces that help businesses crush it. I turn complex
            challenges into clean, elegant digital solutions. If you need someone who gets things
            done and isn&apos;t afraid to dive into the nitty-gritty, let&apos;s chat.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40"
            >
              Hire Me
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
        <div className="relative w-full px-4 flex items-center justify-center">
          {/* Mobile Avatar (visible only on mobile) */}
          <div className="relative mb-3 mt-8 block md:hidden">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur"></div>
            <Image
              src="/about-avatar.png"
              alt="Kirill Gertsik"
              width={150}
              height={150}
              className="relative rounded-full border-2 border-white/20 object-cover"
              priority
              fetchPriority="high"
              quality={85}
            />
          </div>

          {/* Desktop Image (hidden on mobile) */}
          <div className="relative w-full aspect-[3/4] md:aspect-[2/3] max-h-[90vh] hidden md:block">
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-purple-500/20 blur-xl"></div>

            {/* Image with glass effect frame - OPTIMIZED with CSS animations */}
            <div
              className="glass-card-dark animate-float mt-5 relative h-[40rem] w-[28rem] mx-auto overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md shadow-xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))",
                boxShadow:
                  "0 0 40px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Simplified glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-blue-600/20 rounded-lg blur-xl opacity-30 animate-pulse-slow"></div>

              {/* Status indicator in top-right corner */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md border border-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm font-medium text-white">Available</span>
              </div>

              {/* Experience badge in bottom-left */}
              <div className="absolute bottom-4 left-4 z-10 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md border border-white/10">
                <span className="text-sm font-medium text-white">3+ years experience</span>
              </div>

              {/* Improved image positioning with optimized loading */}
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src="/coolDude.png"
                  alt="profile"
                  width={400}
                  height={600}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 0px, (max-width: 1200px) 50vw, 33vw"
                  className="-scale-x-100 object-contain object-center translate-y-16"
                  style={{ maxHeight: "100%" }}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QVQCwwAAAABJRU5ErkJggg=="
                />
              </div>

              {/* Improved gradient fade to blend bottom */}
              <div className="absolute bottom-0 h-32 rounded-b-2xl w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
