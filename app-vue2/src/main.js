/*
 * @Author: daigb
 * @Date: 2023-06-29 16:58:50
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-29 17:16:15
 * @FilePath: \vite\app-vue2\src\main.js
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import router from "@/router";

let app;

const render = (container) => {
  app = createApp(App);
  app.use(router).mount(container ? container.querySelector("#app1") : "#app1");
};

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props;
      render(container);
    },
    bootstrap() {},
    unmount() {
      app.unmount();
    },
  });
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
