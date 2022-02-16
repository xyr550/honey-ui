<template>
  <!-- dialog示例 -->
  <div style="margin-top:80px">
    <span style="color:#4B0082; ">input示例
    </span>
    <div class="box">
      <ho-input
        v-model="userName"
        placeholder="请输入用户名"
        clearable />
      <ho-input
        v-model="testName"
        placeholder="测试name是否锁定username"
        name="username" />
      <ho-input
        v-model="password"
        type="password"
        placeholder="请输入密码"
        show-password />
    </div>
    <div class="box">
      <ho-input
        v-model="c"
        placeholder="测试子组件抛出的clear事件"
        clearable
        @clear="clear"/>
      <ho-input disabled
        placeholder="测试禁用" />
    </div>
  </div>
</template>

<script>
import {
  reactive, toRefs
} from 'vue'

export default {
  setup() {
    const state = reactive({
      userName: 'cc',
      testName: '',
      password: 'oo',
      c: ''
    })
    const clear = () => {
      // state.userName = ''
      state.testName = '1111111111111111'
    }
    return { ...toRefs(state), clear }
  }
};
</script>

<style lang="less" scoped>
.ho-input{
  width: 32% !important;
  margin-left: 16px;
}
.box {
  margin-top: 10px;
  border: 1px solid rgb(235, 218, 218);
  padding: 8px;
}
</style>
