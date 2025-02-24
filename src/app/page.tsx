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
            src="/subject-2.png"
            alt="profile"
            fill
            className="-scale-x-100 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="mb-4 max-w-2xl text-center text-2xl leading-none font-extrabold tracking-tight text-white md:text-left md:text-3xl xl:text-4xl">
            Hey there! <span className="animate-waving-hand">👋</span>
            <br />
            I&apos;m a{" "}
            <Typewriter
              texts={[
                "Frontend Developer",
                "UI/UX Innovator",
                "Tech Enthusiast",
              ]}
            />
          </h1>

          <p className="mb-6 max-w-2xl text-center font-light text-gray-400 md:text-left md:text-lg lg:mb-8 lg:text-xl">
            I build sleek, responsive web interfaces that help businesses crush
            it. I turn complex challenges into clean, elegant digital solutions.
            If you need someone who gets things done and isn&apos;t afraid to
            dive into the nitty-gritty, let&apos;s chat.
          </p>

          <div className="flex space-x-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            >
              Hire Me
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-base font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-800"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              See my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
