<template>
  <!-- switch示例 -->
  <div style="margin-top:80px">
    <span style="color:#4B0082;margin-right:30px">radio示例
    </span>
    <ho-radio label="0" v-model="gender" />
    <ho-radio label="1" v-model="gender" />

    <ho-radio label="0" v-model="gender"> 男 </ho-radio>
    <ho-radio label="1" v-model="gender"> 女 </ho-radio>
  </div>
</template>

<script>
import {
  ref
} from 'vue'

export default {
  setup() {
    const gender = ref(null)
    return {
      gender
    }
  }
};
</script>

<style lang="less" scoped>
</style>
