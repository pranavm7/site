import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

export default defineConfig({
  site: "https://pranavm.net",
  integrations: [pagefind()],
});
