/* eslint-disable vue/multi-word-component-names */
import "../style/Avatar.scss";
import { computed } from "vue";

const Avatar = {
  name: "Avatar",
  props: ["imgUrl", "size"],
  setup(props) {
    const sizeStyle = computed(() => {
      return {
        width: props.size,
        height: props.size,
      };
    });

    return () => (
      <img
        class="avatar-container"
        src={props.imgUrl}
        style={sizeStyle}
        alt="Avatar"
      />
    );
  },
};

export default Avatar;
