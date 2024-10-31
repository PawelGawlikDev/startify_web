// @ts-check
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://PawelGawlikDev.github.io/startify_web",
  base: "startify_web",
  integrations: [tailwind(), react(), icon()]
})
