/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-17 23:37:00
 * @LastEditors: your name
 * @Description: Avatar组件单元测试
 */
import Avatar from "@others/Avatar";
import { shallowMount, mount } from "@vue/test-utils";

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
    expect(wrapper.attributes("src")).toBe(
      "https://avatars.githubusercontent.com/u/53041755?v=4"
    );
  });

  // test("size", () => {
  //   const wrapper = shallowMount(Avatar, {
  //     propsData: {
  //       size: 200,
  //     },
  //   });
  //   expect(wrapper.props("size")).toBe(200);
  // });

  // test("rounded", () => {
  //   const wrapper = shallowMount(Avatar, {
  //     propsData: {
  //       rounded: true,
  //     },
  //   });
  //   expect(wrapper.props("rounded")).toBe(true);
  // });
  // it("rounded", () => {
  //   const wrapper = mount(Avatar);
  //   console.log(wrapper.html());
  //   // const avatarsEle = wrapper.vm.$el;
  //   // wrapper.setProps({ rounded: true });
  //   // // expect(avatarsEle.classList).toContain("Avatar");
  //   // expect(wrapper.classes("Avatar-module_rounded_lcCJ3")).toBe(true);
  //   // // expect(avatarsEle.style.borderRadius).toBe("50%");
  // });
});
