/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-12 22:34:59
 * @LastEditors: your name
 * @Description: Avatar 组件入口文件
 */
import Avatar from "./src/Avatar.jsx";

Avatar.install = (Vue) => {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar;
