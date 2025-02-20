// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        accent: "#3B82F6",
        textLight: "#F1F5F9",
        textSecondary: "#CBD5E1",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to top right, #0A192F 0%, #112240 50%, #0A192F 100%)",
      },
    },
  },
  plugins: [],
};
