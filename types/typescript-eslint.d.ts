declare module "@typescript-eslint/eslint-plugin" {
  const configs: {
    recommended: {
      rules: Record<string, unknown>;
    };
  };

  export default {
    configs,
  };
}
