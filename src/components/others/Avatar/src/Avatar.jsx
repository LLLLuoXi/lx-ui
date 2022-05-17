/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-17 22:35:43
 * @LastEditors: your name
 * @Description:
 */
/* eslint-disable vue/multi-word-component-names */
import styles from "@style/Avatar.module.scss";
import { computed } from "vue";

console.log(styles);

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
    const { imgUrl, size, rounded } = props;
    console.log(rounded);
    const sizeStyle = computed(() => {
      return {
        width: size + "px",
        height: size + "px",
      };
    });

    return () => (
      <img
        class={rounded ? styles.rounded : styles.avatar}
        src={imgUrl}
        style={sizeStyle.value}
        alt="Avatar"
      />
    );
  },
};

export default Avatar;
