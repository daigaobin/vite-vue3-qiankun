/*
 * @Author: daigb
 * @Date: 2023-06-29 16:58:14
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-29 17:38:31
 * @FilePath: \vite\main\src\main.js
 * @Description: 
 */
import './style.css'

import App from './App.vue'
import { createApp } from 'vue'
import router from "@/router";

router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath
  if (!window.history.state.back) window.history.state.back = from.fullPath
  // 手动修改history的state
  return next()
})

createApp(App).use(router).mount('#app')
