<template>
  <div>
    <button-test />
    <dialog-test />
    <input-test />
    <editor-test />
    <switch-test />
    <radio-test />
    <checkbox-test />
    <form-test />
    <bar-test />
    <table-test />
  </div>
</template>

<script>
import ButtonTest from './demo/button-test.vue'
import DialogTest from './demo/dialog-test.vue'
import InputTest from './demo/input-test.vue'
import SwitchTest from './demo/switch-test.vue'
import RadioTest from './demo/radio-test.vue'
import CheckboxTest from './demo/checkbox-test.vue'
import FormTest from './demo/form-test.vue'
import BarTest from './demo/bar-test.vue'
import EditorTest from './demo/editor-test.vue'
import TableTest from './demo/table-test.vue'
// import PictureTest from './demo/picture-test.vue';

export default {
  name: 'App',
  components: {
    ButtonTest,
    DialogTest,
    InputTest,
    SwitchTest,
    RadioTest,
    CheckboxTest,
    FormTest,
    BarTest,
    EditorTest,
    TableTest
  },
  setup() {
  }
};
</script>

<style lang="less" scoped>
</style>
