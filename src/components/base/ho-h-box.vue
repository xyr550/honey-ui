<template>
  <section class="ho-h-box" :class="{'size1': size }">
    <slot></slot>
  </section>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'HoHBox',
  props: {
    size: {
      type: String,
      default: ''
    }
  }
});
</script>

<style  lang="less" scoped>
.ho-h-box {
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.size1 {
  flex: 1;
}
</style>
