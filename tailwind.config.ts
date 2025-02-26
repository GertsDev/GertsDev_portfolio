// tailwind.config.js
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        accent: "#3B82F6",
        textLight: "#F1F5F9",
        textSecondary: "#CBD5E1",
        light: {
          background: "#FFFFFF",
          foreground: "#1E293B",
          accent: "#3B82F6",
          muted: "#F1F5F9",
        },
        dark: {
          background: "#0A192F",
          foreground: "#F1F5F9",
          accent: "#60A5FA",
          muted: "#334155",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to top right, #0A192F 0%, #112240 50%, #0A192F 100%)",
        "grid-white":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        "grid-dark":
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        "light-gradient": "linear-gradient(to top right, #F9FAFB 0%, #F3F4F6 50%, #F9FAFB 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        glitch: "glitch 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 2.5s ease-in-out infinite",
        "waving-hand": "wave 2.5s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "text-shimmer": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              opacity: 0.8,
              "&:hover": {
                opacity: 1,
              },
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            },
            b: { color: "inherit" },
            strong: { color: "inherit" },
            em: { color: "inherit" },
            h1: { color: "inherit" },
            h2: { color: "inherit" },
            h3: { color: "inherit" },
            h4: { color: "inherit" },
            code: { color: "inherit" },
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
