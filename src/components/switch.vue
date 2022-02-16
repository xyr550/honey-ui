<template>
  <label :class="['ho-switch', {'is-checked': modelValue}]"
    @click="handleClick">
    <span class="ho-switch_core" ref="coreRef">
      <span class="ho-switch_btn"></span>
    </span>
  </label>
</template>

<script>
import {
  defineComponent, ref, onMounted, nextTick
} from 'vue'

function getColor(props) {
  let color = '#409eff'
  if (props.activeColor || props.unActiveColor) {
    color = props.modelValue ? props.activeColor : props.unActiveColor
  }
  return color
}
export default defineComponent({
  name: 'HoSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    unActiveColor: {
      type: String,
      default: ''
    }

  },
  setup(props, context) {
    // $refs在vue3中的用法
    const coreRef = ref(null)

    const setColor = () => {
      // 获取用户自定义颜色，用户未选择，则采用默认色
      const color = getColor(props)
      // console.log(coreRef.value)
      if (color !== '#409eff') {
        coreRef.value.style.borderColor = color
        coreRef.value.style.backgroundColor = color
      }
    }

    const handleClick = () => {
      // 首先更新绑定的 checked 值
      context.emit('update:modelValue', !props.modelValue)
      // 等待数据更新
      nextTick(() => {
        setColor()
      })
    }

    onMounted(() => {
      // 第一次加载时就检查用户是否使用自定义颜色并渲染
      setColor()
    })

    return {
      coreRef,
      handleClick
    }
  }
});
</script>

<style lang="less" scoped>
.ho-switch {
  display: inline-flex;
  position: relative;
  vertical-align: middle; // 垂直居中
  .ho-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    }
    .ho-switch_btn {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background: #fff;
    }
}
// 选中样式
.is-checked {
  .ho-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .ho-switch_btn {
      transform: translatex(20px);
    }
  }
}
</style>
