declare module "@next/eslint-plugin-next" {
  const configs: {
    recommended: {
      rules: Record<string, unknown>;
    };
    "core-web-vitals": {
      rules: Record<string, unknown>;
    };
  };

  export default {
    configs,
  };
}
