import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "",
  build: {
    chunkSizeWarningLimit: 3000,
  },
  server: {
    proxy: {
      "/login":{
        target: "http://AYW-test.wifi",
        changeOrigin: true,
        secure: false,
      },
      "/status":{
        target: "http://AYW-test.wifi",
        changeOrigin: true,
        secure: false,
      },
      "/logout":{
        target: "http://AYW-test.wifi",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
