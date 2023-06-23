import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Server } from "node:http";
import path from "node:path";
import mkcert from 'vite-plugin-mkcert'

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
  server : {
    proxy:{
      "^/apapi/.*":{
        target: "http://AYW-test.wifi",
        changeOrigin:true,
        secure:false,
        followRedirects:true,
        timeout:10000,
        rewrite:(path)=>path.replace(/^\/apapi/,""),
      },
    }
  }
},
);