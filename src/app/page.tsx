"use client";
import Link from "next/link";
import Typewriter from "~/components/Typewriter";
import Image from "next/image";

export default function HomePage() {
  return (
    // Outer wrapper that centers content & adds vertical padding
    <section className="flex w-full flex-col items-center justify-center px-4 py-16 md:py-24">
      {/*
        A responsive grid:
        - 1 column on mobile
        - 2 columns on larger screens
      */}
      <div className="grid w-full max-w-screen-xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative h-[40rem] w-full px-4">
          <Image
            src="/Subject 2.png"
            alt="profile"
            fill
            className="-scale-x-100 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="mb-4 max-w-2xl text-center text-2xl leading-none font-extrabold tracking-tight md:text-left md:text-3xl xl:text-4xl dark:text-white">
            Hey There! <span className="animate-waving-hand">👋</span>
            <br />
            I'm a{" "}
            <Typewriter
              texts={[
                "Frontend Developer",
                "AI Researcher",
                "Financial Analyst",
                "NLP Engineer",
              ]}
            />
          </h1>

          <p className="mb-6 max-w-2xl text-center font-light text-gray-500 md:text-left md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            I simplify complex problems using AI, helping businesses transform
            data into intelligent solutions and automate tasks with Generative
            AI to streamline their operations.
          </p>

          <div className="flex space-x-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Hire Me
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a 1 1 0 010 1.414l-6 6a 1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a 1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/project"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <i className="fab fa-github mr-2"></i> See my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


