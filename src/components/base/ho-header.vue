<template>
   <header class="ho-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'HoHeader',
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
.ho-header {
  padding: 8px 16px;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
