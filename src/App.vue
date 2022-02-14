<template>
  <div>
    <button-test />
    <dialog-test />
    <input-test />
  </div>
</template>

<script>
import ButtonTest from './demo/button-test.vue'
import DialogTest from './demo/dialog-test.vue'
import InputTest from './demo/input-test.vue'
// import PictureTest from './demo/picture-test.vue';

export default {
  name: 'App',
  components: {
    ButtonTest, DialogTest, InputTest
  },
  setup() {
  }
};
</script>

<style lang="less" scoped>
</style>
