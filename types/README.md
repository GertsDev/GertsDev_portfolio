# Custom Type Definitions

This directory contains custom TypeScript declaration files (`.d.ts`) for modules that don't have their own type definitions.

## Files

- `next__eslint-plugin-next.d.ts`: Type definitions for the `@next/eslint-plugin-next` package
- `eslint-config.d.ts`: Type definitions for ESLint configuration related packages

These files are necessary to fix TypeScript errors during the build process, especially when using the new flat ESLint configuration format.
