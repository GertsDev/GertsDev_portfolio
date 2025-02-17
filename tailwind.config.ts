// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        accent: '#3B82F6',
        textLight: '#F1F5F9',
        textSecondary: '#CBD5E1',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #152238 100%)',
      },
    },
  },
  plugins: [],
};
