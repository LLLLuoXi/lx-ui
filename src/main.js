/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-12 22:43:31
 * @LastEditors: your name
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.jsx";
import lxui from "./plugins/lxui.js";

const app = createApp(App);
app.use(lxui).mount("#app");
