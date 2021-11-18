<template>
  <div class="ho-dialog_wapper">
    <div class="ho-dialog">
      <div class="ho-dialog_header">
        <slot name="title">
          <span class="ho-dialog_title">{{ title }}</span>
        </slot>
        <button class="ho-dialog_headerbtn">
          <i class="iconfont ho-icon-close" />
        </button>
      </div>
      <div class="ho-dialog_body"></div>
      <div class="ho-dialog_footer">
        <ho-button type="primary">确定</ho-button>
        <ho-button>取消</ho-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent, reactive, toRefs
} from 'vue'

export default defineComponent({
  name: 'HoDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    }
  },
  setup(props, context) {
  }
});
</script>

<style lang="less" scoped>
.ho-dialog_wapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index:2021;
  background-color: rgba(88, 86, 86, 0.452);
}
.ho-dialog {
  position: relative;
  margin: 15vh auto 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(250, 246, 246, 0.5);
  box-sizing: border-box;
  width: 30%;
  &_header {
    padding: 20px 20px 10px;
    border-bottom: 1px solid #EBECF0;
    .ho-dialog_title {
      line-height: 24px;
      font-size: 16px;
      color: #303133;
    }
    .ho-dialog_headerbtn {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 0;
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 16px;
      .el-icon-close {
        color:#909399;
      }
    }
  }
  &_body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  &_footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    .ho-button:first-child{
      margin-right: 20px
    }
  }
}
</style>
