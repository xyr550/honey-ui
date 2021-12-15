<template>
  <!-- dialog示例 -->
  <div style="margin-top:80px">
    <span style="color:#4B0082; ">input示例
    </span>
    <div class="box">
      <ho-input
        placeholder="请输入用户名" />
      <ho-input
        placeholder="测试name是否锁定username"
        name="username" />
      <ho-input type="password"
        placeholder="请输入密码" />
    </div>
    <div class="box">
      <ho-input disabled
        placeholder="请输入" />
    </div>
  </div>
</template>

<script>
import {
} from 'vue'

export default {
  setup() {
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
