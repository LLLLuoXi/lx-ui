/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-19 22:56:24
 * @LastEditors: your name
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  devServer: {
    client: {
      webSocketURL: {
        hostname: "0.0.0.0",
        pathname: "/ws",
        password: "dev-server",
        port: 8080,
        protocol: "ws",
        username: "webpack",
      },
    },
  },
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@others", path.resolve(__dirname, "src/components/others"))
      .set("@style", path.resolve(__dirname, "src/style"));
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true,
          localIdentName: "[local]_[hash:base64:5]",
        },
      },
    },
  },
});
