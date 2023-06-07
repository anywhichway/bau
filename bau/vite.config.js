import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "src/bau.js"),
        name: "Bau",
        fileName: "bau",
      },
    },
    server: {
      open: true,
    },
    test: {
      browser: {
        enabled: true,
        name: "chrome",
      },
      coverage: {
        provider: "istanbul", // or 'c8'
      },
    },
  };
});