/*
 * @Author: daigb
 * @Date: 2023-06-29 17:02:18
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-30 11:44:32
 * @FilePath: \vite-vue3-qiankun\app-vue2\src\router\index.js
 * @Description:
 */

import { createRouter, createWebHistory } from "vue-router";

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes = [
  {
    path: "",
    redirect: { name: "home" },
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/about/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/app-vue2/" : "/"),
  routes,
});

export default router;
