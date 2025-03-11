import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

const repoName = "portfolio";

export default defineConfig(({ mode }) => {
  return {
    plugins: [vike({}), react({})],
    base: mode === "production" ? `/${repoName}/` : "/",
    build: {
      target: "es2022",
      rollupOptions: {
        output: {
          manualChunks: () => {
            return "everything";
          },
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  };
});
