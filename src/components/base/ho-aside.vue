<template>
  <aside class="ho-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'HoAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  setup() {
    return {
    }
  }
});
</script>

<style lang="less" scoped>
.ho-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 100%;
}
</style>
