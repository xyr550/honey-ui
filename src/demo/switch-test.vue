<template>
  <!-- switch示例 -->
  <div style="margin-top:80px">
    <span style="color:#4B0082;">switch开关示例（支持自定义颜色）
    </span>
    <ho-switch
      v-model="active" />
    <ho-switch
      v-model="active2"
      active-color="red"
      un-active-color="#f0b331" />
    <ho-switch
      v-model="active3"
      active-color="#40c26b"/>
  </div>
</template>

<script>
import {
  ref
} from 'vue'

export default {
  setup() {
    const active = ref(false)
    const active2 = ref(true)
    const active3 = ref(true)
    return { active, active2, active3 }
  }
};
</script>

<style lang="less" scoped>
.ho-switch {
  margin-left: 30px;
}
</style>
