<template>
  <section class="ho-container" :class="{ 'is-vertical': isVertical, h100w100:size }">
    <slot></slot>
  </section>
</template>

<script>
import {
  defineComponent, computed
} from 'vue'

export default defineComponent({
  name: 'HoContainer',
  props: {
    direction: String,
    size: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    console.log('slots', slots.default)
    const isVertical = computed(() => {
      if (props.direction === 'vertical') return true
      if (props.direction === 'horizontal') return false
      return !!(slots && slots.default)
    })
    return {
      isVertical
    }
  }
});
</script>

<style  lang="less" scoped>
.ho-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.is-vertical {
  flex-direction: column;
}
.h100w100 {
  height: 100%;
  width: 100%
}
</style>
