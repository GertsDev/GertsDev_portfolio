#!/usr/bin/env node

/**
 * This script ensures that the types directory exists and contains the necessary type declaration files.
 * It's meant to be run during the build process to fix TypeScript errors.
 */

import fs from "fs";
import path from "path";

// Create the types directory if it doesn't exist
const typesDir = path.resolve(process.cwd(), "types");
if (!fs.existsSync(typesDir)) {
  console.log("Creating types directory...");
  fs.mkdirSync(typesDir, { recursive: true });
}

// Create the type declaration file for @next/eslint-plugin-next
const nextEslintPluginPath = path.join(typesDir, "next__eslint-plugin-next.d.ts");
if (!fs.existsSync(nextEslintPluginPath)) {
  console.log("Creating type declaration for @next/eslint-plugin-next...");
  const content = `declare module '@next/eslint-plugin-next' {
  const configs: {
    recommended: {
      rules: Record<string, any>;
    };
    'core-web-vitals': {
      rules: Record<string, any>;
    };
  };

  export default {
    configs,
  };
}`;
  fs.writeFileSync(nextEslintPluginPath, content);
}

// Create the type declaration file for eslint-config
const eslintConfigPath = path.join(typesDir, "eslint-config.d.ts");
if (!fs.existsSync(eslintConfigPath)) {
  console.log("Creating type declaration for eslint-config...");
  const content = `declare module '@eslint/eslintrc' {
  export class FlatCompat {
    constructor(options?: Record<string, any>);
    extends(...configs: string[]): any[];
  }
}

declare module 'eslint-plugin-prettier' {
  const configs: {
    recommended: {
      rules: Record<string, any>;
    };
  };

  export default {
    configs,
  };
}`;
  fs.writeFileSync(eslintConfigPath, content);
}

// Create the type declaration file for typescript-eslint
const tsEslintPath = path.join(typesDir, "typescript-eslint.d.ts");
if (!fs.existsSync(tsEslintPath)) {
  console.log("Creating type declaration for typescript-eslint...");
  const content = `declare module '@typescript-eslint/eslint-plugin' {
  const configs: {
    recommended: {
      rules: Record<string, any>;
    };
  };

  export default {
    configs,
  };
}`;
  fs.writeFileSync(tsEslintPath, content);
}

console.log("Type declarations setup complete!");
