import globals from "globals";
import tseslint from "typescript-eslint";

const config = tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/prefer-readonly-parameter-types": "error"
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);

export default config;