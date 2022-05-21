/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-19 21:49:12
 * @LastEditors: your name
 * @Description:
 */
import ImageLoaderTest from "./test-views/ImageLoader/ImageLoaderTest.jsx";
const App = {
  name: "app",
  setup() {
    const testUrl = "https://avatars.githubusercontent.com/u/53041755?v=4";
    return () => (
      <div id="app">
        {/* <Avatar imgUrl={testUrl} size={200} rounded /> */}
        <ImageLoaderTest />
      </div>
    );
  },
};

export default App;
