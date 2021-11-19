<template>
  <!-- dialog示例 -->
  <div style="margin-top:80px;">
    <span style="color:#4B0082; margin-right:20px">Dialog弹窗示例</span>
    <ho-button plain round type="success" @buttonClick="showDialog">点出弹窗
      <i :class="['iconfont', 'ho-icon-smile']"></i>
    </ho-button>
    <!-- 外层包裹<div>,div上加 v-drag 实现拖拽效果 -->
    <ho-dialog title="我是标题哦！" width="30%" top="100px"
      :visible="visible"
      @close="visible = false">
      <!-- <template v-slot:title><h3>标题</h3></template> 使用具名插槽可以直接替换掉dialog中的title -->
      <div class="full">
        <span>
          这是内容
        </span>
        <input />
        <input />
        <input />
      </div>
      <template v-slot:footer>
        <div class="set-margin">
          <ho-button type="primary">submit</ho-button>
          <ho-button @buttonClick="visible = false">cancel</ho-button>
        </div>
      </template>
    </ho-dialog>
  </div>
</template>

<script>
import {
  toRefs, reactive
} from 'vue'

export default {
  setup() {
    const state = reactive({
      visible: false
    })
    const showDialog = () => {
      state.visible = true
    }
    return {
      ...toRefs(state), showDialog
    }
  }
};
</script>

<style lang="less" scoped>
.full {
  width: 100%;
  height: 300px;
  text-align: center;
  input {
    display: block;
    margin:16px 0 8px 0;
    width: 50%;
    height: 20px;
    border: 1px solid rgb(134, 49, 49);
    margin-left:26%;
  }
}
.set-margin .ho-button:not(:first-child) {
  margin-left: 16px !important;
}
</style>
