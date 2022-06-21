<template>
  <section class="ho-container" :class="{ 'is-vertical': isVertical, size1:size }">
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
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      // console.log('slots', slots.default())
      if (props.direction === 'vertical') return true
      if (props.direction === 'horizontal') return false
      return slots && slots.default
        ? slots.default().some((vnode) => {
          const tag = vnode.type && vnode.type.name
          return tag === 'HoHeader' || tag === 'HoFooter'
        })
        : false
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
.size1 {
  flex-grow: 1;
}
</style>
