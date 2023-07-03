import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
