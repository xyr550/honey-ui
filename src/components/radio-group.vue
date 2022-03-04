<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent, provide, ref
} from 'vue'

export default defineComponent({
  name: 'HoRadioGroup',
  props: {
    modelValue: null
  },
  setup(props, context) {
    // provide 将父组件中值传给子
    // 将父中的modelValue传过去，并转为响应式对象
    const groupModel = ref(props.modelValue)
    provide('groupModel', groupModel)
    // 在子组件中，可用于判断是否有此父组件
    provide('groupContext', context)
  }
});
</script>

<style lang="less" scoped>
</style>
