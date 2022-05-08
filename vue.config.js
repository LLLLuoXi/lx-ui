/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-08 23:46:00
 * @LastEditors: your name
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
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
});
