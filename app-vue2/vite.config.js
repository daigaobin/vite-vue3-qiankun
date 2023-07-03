/*
 * @Author: daigb
 * @Date: 2023-06-29 16:58:50
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-29 17:09:09
 * @FilePath: \vite\app-vue2\vite.config.js
 * @Description:
 */
import { defineConfig } from "vite";
import qiankun from "vite-plugin-qiankun";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/app-vue2/" : "/",
  resolve: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    qiankun("app-vue2", {
      useDevMode: true,
    }),
  ],
  server: {
    port: 7001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
