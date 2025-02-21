import globals from "globals";
import tseslint from "typescript-eslint";
import pluginImportAlias from "@limegrass/eslint-plugin-import-alias";

const config = tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      ["@limegrass/import-alias"]: pluginImportAlias,
    },
    rules: {
      "@typescript-eslint/prefer-readonly-parameter-types": "error",
      "@limegrass/import-alias/import-alias": ["error"],
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