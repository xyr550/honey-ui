<template>
  <section class="ho-v-box" :class="{'size1': size }">
    <slot></slot>
  </section>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'HoVBox',
  props: {
    size: {
      type: String,
      default: ''
    }
  }
});
</script>

<style  lang="less" scoped>
.ho-v-box {
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.size1 {
  flex: 1;
}
</style>
