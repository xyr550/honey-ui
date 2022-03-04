<template>
  <div>
    <button-test />
    <dialog-test />
    <input-test />
    <switch-test />
    <radio-test />
  </div>
</template>

<script>
import ButtonTest from './demo/button-test.vue'
import DialogTest from './demo/dialog-test.vue'
import InputTest from './demo/input-test.vue'
import SwitchTest from './demo/switch-test.vue'
import RadioTest from './demo/radio-test.vue'
// import PictureTest from './demo/picture-test.vue';

export default {
  name: 'App',
  components: {
    ButtonTest, DialogTest, InputTest, SwitchTest, RadioTest
  },
  setup() {
  }
};
</script>

<style lang="less" scoped>
</style>
