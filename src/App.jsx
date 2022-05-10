/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-08 23:02:23
 * @LastEditors: your name
 * @Description:
 */

import Avatar from "./components/Avatar.jsx";

const App = {
  name: "app",
  setup() {
    const testUrl = "https://avatars.githubusercontent.com/u/53041755?v=4";
    return () => (
      <div id="app">
        <Avatar imgUrl={testUrl} size={200} rounded />
      </div>
    );
  },
};

export default App;
