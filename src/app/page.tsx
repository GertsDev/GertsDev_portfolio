import ClientSideContent from "components/home/ClientSideContent";
import HomeImageSection from "components/home/HomeImageSection";
import ContactSection from "components/contacts/ContactSection";
import ProjectsGrid from "components/about/ProjectsGrid";
import SkillsGrid from "components/about/SkillsGrid";
import { projects, skills } from "components/about/pageData";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import "styles/animations.css";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="scroll-mt-24 relative flex min-h-screen w-full flex-col items-center justify-start px-4 py-16 md:py-24"
      >
        <div className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-2 md:gap-10 md:grid-cols-2">
          <div className="order-2 flex flex-col items-center md:order-none md:items-start">
            <ClientSideContent />
            <p className="mb-15 max-w-2xl text-center font-light text-gray-300 md:text-left md:text-lg lg:mb-10 lg:text-xl">
              {`I specialize in crafting sleek, responsive web interfaces that not only look great but also drive results. My background as a senior financial advisor enriches my approach, enabling me to create user-centric solutions aligned with business objectives.`}
            </p>
            <div className="order-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:order-none">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-zinc-700 to-zinc-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-neutral-700/20 transition-all hover:shadow-neutral-500/40"
              >
                Contact
                <span className="ml-2 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <FiArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900/50 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-neutral-800"
              >
                <FiGithub className="mr-2 h-5 w-5" />
                See my work
              </Link>
            </div>
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
          <div className="order-1 md:order-none">
            <HomeImageSection />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 w-full px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">About</h2>
          <p className="mx-auto max-w-3xl text-center text-gray-300">
            I’m Kirill, a frontend developer focused on building usable, accessible, and visually
            compelling web products. I combine product thinking with solid engineering to ship
            delightful experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 w-full px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <SkillsGrid skills={skills} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 w-full px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </>
  );
}
