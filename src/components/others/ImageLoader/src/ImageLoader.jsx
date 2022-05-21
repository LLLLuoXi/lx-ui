/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-21 18:01:25
 * @LastEditors: your name
 * @Description:
 */
import styles from "@style/ImageLoader.module.scss";
import { ref, computed, toRefs } from "vue";

const ImageLoader = {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  setup(props, { emit }) {
    const { src, placeholder, duration } = toRefs(props);
    const originLoadedRef = ref(false);
    const everythingDoneRef = ref(false);
    const originOpacity = computed(() => {
      return originLoadedRef.value ? 1 : 0;
    });
    console.log("originOpacity", originOpacity.value);

    const handleLoad = () => {
      originLoadedRef.value = true;
      console.log("🧐 ~ 图片加载完成");
      console.log("originOpacity", originOpacity.value);
      setTimeout(() => {
        everythingDoneRef.value = true;
        emit("load");
        console.log(everythingDoneRef.value);
      }, duration.value);
    };

    return () => (
      <div class={styles["image-loader-container"]}>
        {!everythingDoneRef.value ? (
          <img
            class={styles.placeholder}
            src={placeholder.value}
            alt="placeholder"
          />
        ) : (
          ""
        )}
        <img
          onLoad={handleLoad}
          src={src.value}
          alt="src"
          style={{
            opacity: originOpacity.value,
            transition: `all 3500ms linear`,
          }}
        />
      </div>
    );
  },
};

export default ImageLoader;
