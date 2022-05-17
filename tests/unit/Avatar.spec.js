/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-17 22:54:54
 * @LastEditors: luoxi
 * @Description: Avatar组件单元测试
 */
import Avatar from "@others/Avatar";
import { shallowMount } from "@vue/test-utils";

describe("Avatar", () => {
  test("create", () => {
    const imgUrl = "https://avatars.githubusercontent.com/u/53041755?v=4";
    const wrapper = shallowMount(Avatar, {
      propsData: {
        imgUrl,
        size: 200,
      },
    });
    expect(wrapper.props("imgUrl")).toBe(
      "https://avatars.githubusercontent.com/u/53041755?v=4"
    );
  });

  test("size", () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        size: 200,
      },
    });
    expect(wrapper.props("size")).toBe(200);
  });

  test("rounded", () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        rounded: true,
      },
    });
    expect(wrapper.props("rounded")).toBe(true);
  });
});
