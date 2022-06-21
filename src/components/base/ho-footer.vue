<template>
  <footer class="ho-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'HoFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup() {
    return {
    }
  }
});
</script>

<style lang="less" scoped>
.ho-footer {
  padding: 8px 16px;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
