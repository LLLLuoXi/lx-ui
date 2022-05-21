/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-21 17:39:37
 * @LastEditors: your name
 * @Description:ImageLoader测试页
 */
import ImageLoader from "@others/ImageLoader";
import "./ImageLoaderTest.css";

const ImageLoaderTest = {
  name: "ImageLoader",
  setup() {
    // console.log(style);

    const src = "https://s2.loli.net/2022/01/26/hC1PxifWzVmbFRU.jpg";
    const placeholder = "https://s2.loli.net/2022/01/26/RvxDAqQoY7tCplL.jpg";
    const placeholder1 =
      "https://img0.baidu.com/it/u=2046945173,2632972045&fm=253&fmt=auto&app=138&f=JPEG?w=533&h=349";
    const handleLoaded = () => {
      console.log("ImageLoader组件load事件触发，图片加载完成");
    };

    return () => (
      <div class="ImageLoader-test-container">
        <ImageLoader
          placeholder={placeholder}
          src={src}
          duration={2000}
          onLoad={handleLoaded}
        />
      </div>
    );
  },
};

export default ImageLoaderTest;
