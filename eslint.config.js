import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: [
      "src/env.d.ts",
      "dist/",
      ".astro/"
    ]
  },
  { files: ["**/*.astro"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];