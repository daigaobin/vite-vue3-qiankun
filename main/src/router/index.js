/*
 * @Author: daigb
 * @Date: 2023-06-29 17:02:18
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-30 11:43:18
 * @FilePath: \vite-vue3-qiankun\main\src\router\index.js
 * @Description:
 */

import { createRouter, createWebHistory } from "vue-router";

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
        // history模式需要通配所有路由，详见vue-router文档
        path: "/app-vue2/:pathMatch(.*)*",
        name: "app-vue2",
        meta: {},
        component: () => import("@/components/SubContainer.vue"),
      },
      // {
      //   path: "/app/app-vue2/",
      //   name: "app-vue2",
      //   meta: {},
      //   component: () => import("@/components/SubContainer.vue"),
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
