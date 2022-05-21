/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-19 21:33:37
 * @LastEditors: your name
 * @Description: ImageLoader 组件入口文件
 */
import ImageLoader from "./src/ImageLoader.jsx";

ImageLoader.install = (Vue) => {
  Vue.component(ImageLoader.name, ImageLoader);
};

export default ImageLoader;
