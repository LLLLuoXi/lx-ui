/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-19 21:41:35
 * @LastEditors: your name
 * @Description: lx-ui启动文件
 */
import Avatar from "@others/Avatar";
import ImageLoader from "@others/ImageLoader";

const components = [Avatar, ImageLoader];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
// 默认导出
export default {
  install,
  Avatar,
  ImageLoader,
};
// 按需导出
export { install, Avatar, ImageLoader };
