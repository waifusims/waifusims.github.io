import globals from "globals";
import tseslint from "typescript-eslint";
import pluginImportAlias from "@limegrass/eslint-plugin-import-alias";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from 'eslint-plugin-react-hooks';

const config = tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginReactHooks.configs["recommended-latest"],
  {
    settings: {
      react: {
        version: "detect",
      }
    },
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