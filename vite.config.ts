import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";

export default defineConfig({
  plugins: [fresh()],
  // Serve assets/images/ as static files at the root (e.g. /bruce-header.svg)
  publicDir: "assets/images",
});
