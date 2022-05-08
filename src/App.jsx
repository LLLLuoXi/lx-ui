/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-08 23:02:23
 * @LastEditors: your name
 * @Description:
 */

import HelloWorld from "./components/HelloWorld.jsx";
export default {
  name: "helloWorld",
  setup() {
    return () => (
      <div id="app">
        <HelloWorld />
      </div>
    );
  },
};
