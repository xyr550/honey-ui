<template>
  <transition name="dialog">
    <div class="ho-dialog_wapper" v-show="visible" @click.self="handleClose('header')">
      <div class="ho-dialog" :style="{width, top:changeTop, height, left}" ref="diaRef"
        @mousedown="dragStart">
        <div class="ho-dialog_header">
          <slot name="title">
            <span class="ho-dialog_title">{{ title }}</span>
          </slot>
          <button class="ho-dialog_headerbtn" @click="handleClose">
            <i class="iconfont ho-icon-close" />
          </button>
        </div>
        <!-- 默认插槽 -->
        <div class="ho-dialog_body"><slot /></div>
        <div class="ho-dialog_footer" v-if="$slots.footer">
          <slot name="footer">
            <ho-button type="primary">确定</ho-button>
            <ho-button>取消</ho-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  defineComponent, toRefs, reactive, ref
} from 'vue'

export default defineComponent({
  name: 'HoDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    height: {
      type: String,
      default: 'auto'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    },
    dragable: {
      type: Boolean,
      default: false
    },
    maskAction: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const diaRef = ref(null)
    const state = reactive({
      startx: 0,
      starty: 0,
      changeTop: props.top,
      left: '0px',
      transitionDuration: '.2s',
      draggable: false
    })
    const handleClose = (event) => {
      if (event === 'header' && !props.maskAction) return
      context.emit('close', event)
    }
    const move = (e) => {
      e.preventDefault()
      if (state.draggable) {
        const diffx = e.clientX - state.startx
        const diffy = e.clientY - state.starty
        // 1px 100px  去掉px
        const leftBef = diaRef.value.style.left
        const leftBefNum = leftBef.substring(0, leftBef.length - 2)
        const topBef = diaRef.value.style.top
        const topBefNum = topBef.substring(0, topBef.length - 2)

        const left = Number(leftBefNum) + diffx
        const top = Number(topBefNum) + diffy
        state.left = `${left}px`
        state.changeTop = `${top}px`
        state.startx = e.clientX
        state.starty = e.clientY
      }
    }
    const dragEnd = () => {
      state.draggable = false
      document.removeEventListener('mousemove', move)
      document.addEventListener('mouseup', dragEnd)
    }
    const dragStart = (e) => {
      // props中允许拖拽方可执行
      if (props.dragable) {
      // 鼠标左键点击
        if (e.button === 0) {
        // 记录鼠标指针位置
          state.draggable = true
          state.startx = e.clientX
          state.starty = e.clientY
        }
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', dragEnd)
      }
    }
    return {
      handleClose,
      dragStart,
      dragEnd,
      move,
      ...toRefs(state),
      diaRef
    }
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
  overflow: hidden;
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
    :deep .ho-button:not(:first-child) {
      margin-left: 16px !important;
    }
  }
}
.dialog-enter-active {
  animation: run .2s;
}
.dialog-leave-active {
  animation: run .2s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
