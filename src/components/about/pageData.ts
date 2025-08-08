export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Chat Platform",
    description:
      "Built a real-time chat platform with AI integration using React, Node.js, and OpenAI.",
    tags: ["React", "Node.js", "OpenAI"],
    image: "/project-1.jpg",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Developed a comprehensive analytics dashboard for e-commerce businesses with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "Chart.js"],
    image: "/project-2.jpg",
  },
];

export type Skill = {
  name: string;
  level: string;
  color: string;
};

export const skills: Skill[] = [
  { name: "React", level: "95%", color: "from-zinc-400 to-zinc-200" },
  { name: "Next.js", level: "90%", color: "from-gray-800 to-gray-600" },
  { name: "TypeScript", level: "85%", color: "from-zinc-500 to-zinc-300" },
  { name: "Node.js", level: "80%", color: "from-emerald-600 to-emerald-400" },
  { name: "GraphQL", level: "85%", color: "from-fuchsia-600 to-fuchsia-400" },
  { name: "Tailwind", level: "90%", color: "from-cyan-600 to-cyan-400" },
  { name: "Redux", level: "80%", color: "from-violet-600 to-violet-400" },
  { name: "AWS", level: "75%", color: "from-amber-600 to-amber-400" },
];
