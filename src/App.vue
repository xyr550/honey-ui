<template>
  <div>
    <button-test />
    <dialog-test />
  </div>
</template>

<script>
import ButtonTest from './demo/button-test.vue'
import DialogTest from './demo/dialog-test.vue'

export default {
  name: 'App',
  components: { ButtonTest, DialogTest },
  setup() {
  }
};
</script>

<style lang="less" scoped>
</style>
