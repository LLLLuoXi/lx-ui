/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-12 22:29:36
 * @LastEditors: your name
 * @Description:
 */
/* eslint-disable vue/multi-word-component-names */
import "@style/Avatar.scss";
import { computed } from "vue";

const Avatar = {
  name: "Avatar",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 100,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const sizeStyle = computed(() => {
      return {
        width: props.size + "px",
        height: props.size + "px",
      };
    });

    return () => (
      <img
        class={props.rounded ? "avatar-container rounded " : "avatar-container"}
        src={props.imgUrl}
        style={sizeStyle.value}
        alt="Avatar"
      />
    );
  },
};

export default Avatar;
