declare module "@eslint/eslintrc" {
  export class FlatCompat {
    constructor(options?: Record<string, unknown>);
    extends(...configs: string[]): unknown[];
  }
}

declare module "eslint-plugin-prettier" {
  const configs: {
    recommended: {
      rules: Record<string, unknown>;
    };
  };

  export default {
    configs,
  };
}
