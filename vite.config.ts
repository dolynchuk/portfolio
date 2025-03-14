import { defineConfig, PluginOption } from "vite";

const base = "/portfolio/";
const canonical = "dolynchuk.github.io";

const transformHtmlPlugin: (option: {
  from: string;
  to: string;
}) => PluginOption = ({ from, to }) => ({
  name: "html-transform",
  transformIndexHtml: {
    handler(html: string) {
      return html.replaceAll(from, to);
    },
  },
});

export default defineConfig(({}) => {
  return {
    plugins: [
      transformHtmlPlugin({
        from: "{{BASE_URL}}",
        to: base,
      }),
      transformHtmlPlugin({
        from: "{{CANONICAL}}",
        to: canonical,
      }),
    ],
    base,
    optimizeDeps: {
      include: ["@splinetool/runtime"],
      force: true,
    },
    build: {
      minify: "esbuild",

      outDir: "./dist",
      sourcemap: true,
      chunkSizeWarningLimit: 5000,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              return "vendor";
            }
            return "bundle";
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
