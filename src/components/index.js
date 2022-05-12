/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-12 22:35:39
 * @LastEditors: your name
 * @Description: lx-ui启动文件
 */
import Avatar from "@others/Avatar";

const components = [Avatar];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
// 默认导出
export default {
  install,
  Avatar,
};
// 按需导出
export { install, Avatar };
