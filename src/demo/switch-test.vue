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
      name="userName"
      v-model="active3"
      active-color="#40c26b"/>
  </div>
</template>

<script>
import {
  reactive, toRefs
} from 'vue'

export default {
  setup() {
    const state = reactive({
      active: false,
      active2: true,
      active3: true,
      userName: 'zs'
    })
    return {
      ...toRefs(state)
    }
  }
};
</script>

<style lang="less" scoped>
.ho-switch {
  margin-left: 30px;
}
</style>
