import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <section className="container mx-auto max-w-5xl px-6 py-12">
        {/* Hero Section - NYC Theme */}
        <section className="relative mb-24 overflow-hidden rounded-3xl">
          <div className="relative h-[60vh] w-full">
            <Image
              src="/gertsdev_about-hero.png"
              alt="NYC Skyline"
              fill
              className="object-cover brightness-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <Image
                src="/about-avatar.png"
                alt="Kirill Gertsik"
                width={128}
                height={128}
                className="mb-8 rounded-full border-4 border-white/20 object-cover shadow-2xl"
              />
              <h1 className="mb-4 text-5xl font-bold tracking-tight">
                Kirill Gertsik
              </h1>
              <p className="mb-6 text-2xl font-light text-gray-200">
                Frontend Developer in NYC
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="mailto:hello@gerts.dev"
                  className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gray-800 p-6 text-center shadow-xl">
            <i className="fas fa-code mb-4 text-3xl text-blue-500"></i>
            <h3 className="text-2xl font-bold text-white">3+ Years</h3>
            <p className="text-gray-400">Frontend Experience</p>
          </div>
          <div className="rounded-2xl bg-gray-800 p-6 text-center shadow-xl">
            <i className="fas fa-project-diagram mb-4 text-3xl text-blue-500"></i>
            <h3 className="text-2xl font-bold text-white">50+ Projects</h3>
            <p className="text-gray-400">Completed</p>
          </div>
          <div className="rounded-2xl bg-gray-800 p-6 text-center shadow-xl">
            <i className="fas fa-brain mb-4 text-3xl text-blue-500"></i>
            <h3 className="text-2xl font-bold text-white">AI Enthusiast</h3>
            <p className="text-gray-400">
              AI Implementations in real world projects
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { name: "React", level: "95%" },
              { name: "Next.js", level: "90%" },
              { name: "TypeScript", level: "85%" },
              { name: "Node.js", level: "80%" },
              { name: "GraphQL", level: "85%" },
              { name: "Tailwind", level: "90%" },
              { name: "Redux", level: "80%" },
              { name: "AWS", level: "75%" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="rounded-lg bg-gray-800 p-4 shadow-lg"
              >
                <div className="mb-2 flex justify-between">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-700">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Featured Work
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl">
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  AI-Powered Chat Platform
                </h3>
                <p className="text-gray-400">
                  Built a real-time chat platform with AI integration using
                  React, Node.js, and OpenAI.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    React
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    Node.js
                  </span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    OpenAI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NYC-Focused CTA */}
        <section className="from-darkBlue-600 rounded-3xl bg-gradient-to-r to-blue-900 p-12 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold">Looking to Hire in NYC?</h2>
          <p className="mb-8 text-lg">
            Based in New York City and ready to join a forward-thinking team.
            Bringing expertise in modern frontend development, AI integration,
            and a track record of delivering exceptional user experiences.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <a
              href="mailto:hello@gerts.dev"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-transform hover:scale-105"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Contact Me
            </a>
            <a
              href="/GertsDev_CV.pdf"
              download
              className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
            >
              <i className="fas fa-file-alt mr-2"></i>
              Download Resume
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
