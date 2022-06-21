<template>
  <main class="ho-main">
    <slot></slot>
  </main>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'HoMain',
  props: {
  },
  setup() {
    return {
    }
  }
});
</script>

<style lang="less" scoped>
.ho-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
}
</style>
