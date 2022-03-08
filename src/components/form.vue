<template>
  <div class="ho-form">
    <slot></slot>
  </div>
</template>
<script>
import {
  defineComponent, provide
} from 'vue'

export default defineComponent({
  name: 'HoForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    provide('labelWidth', props.labelWidth)
    return {}
  }
});
</script>

<style scoped>
</style>
