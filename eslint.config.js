import pluginJs from "@eslint/js"
import eslintPluginAstro from "eslint-plugin-astro"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    ignores: ["src/env.d.ts", "dist/", ".astro/"]
  },
  { files: ["**/*.astro"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended
]
