<template>
  <!-- bar示例 -->
  <div style="margin-top:80px;">
    <span style="color:#4B0082; margin-right:20px">切换页签示例</span>
    <ho-bar
      :records="records"
      content-filed="name"
     />
    <ho-button type="primary">新增</ho-button>
    <ho-button type="danger">清空</ho-button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const arrytest = [
      { id: '1', name: '第一个内容页签' },
      { id: '2', name: '第er个内容页签' },
      { id: '3', name: '第3个内容页签' },
      { id: '4', name: '第4个内容页签' },
      { id: '5', name: '第5个内容页签11111111111111111222222' }
    ]
    const records = reactive(arrytest)
    return {
      records
    }
  }
};
</script>

<style lang="less" scoped>
</style>
