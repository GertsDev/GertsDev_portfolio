// eslint.config.mjs
import nextPlugin from "@next/eslint-plugin-next";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  {
    // Specify files to lint
    files: ["**/*.{js,jsx,ts,tsx}"],
    // Language options
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        // Node.js globals
        process: "readonly",
        __dirname: "readonly",
        // Next.js specific
        React: "readonly",
      },
    },
    // Plugins
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsEslint,
      prettier: prettierPlugin,
    },
    // Rules
    rules: {
      ...nextPlugin.configs.recommended.rules, // Next.js recommended rules
      ...nextPlugin.configs["core-web-vitals"].rules, // Stricter Core Web Vitals rules
      ...tsEslint.configs.recommended.rules, // TypeScript recommended rules
      ...prettierPlugin.configs.recommended.rules, // Prettier integration
      "prettier/prettier": "error", // Enforce Prettier as an ESLint rule
      "@typescript-eslint/no-unused-vars": ["error"], // Catch unused variables
      "react/react-in-jsx-scope": "off", // Not needed with Next.js/React 17+
      "@typescript-eslint/explicit-function-return-type": "off", // Optional: less strict
    },
  },
  {
    // Ignore certain files or directories
    ignores: ["node_modules", ".next", "dist", "*.config.js"],
  },
];
