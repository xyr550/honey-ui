<template>
  <div class="ho-select" :style="styleVar" v-click-outside-hide>
    <div class="ho-select_box">
      <ho-input v-model="value" clearable readonly/>
      <i :class="['iconfont', `${selectIcon}`, 'ho-select_icon']"/>
    </div>
    <div class="ho-select_option" v-if="isVisible">
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'

export default {
  name: 'HoSelect',
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '40px'
    },
    moduleValue: {
      default: '123'
    }
  },
  setup(props) {
    // 用指令v-click-outside-hide控制了显示隐藏，页面中无需再维护
    const isVisible = ref(false)
    const value = ref(props.moduleValue)
    const styleVar = computed(() => (
      {
        height: props.height,
        width: props.width,
        lineHeight: props.height
      }
    ))
    const selectIcon = computed(() => (isVisible.value ? 'ho-icon-arrow-up-bold' : 'ho-icon-arrow-down'))
    const visibleChange = () => {
      isVisible.value = !isVisible.value
    }
    return {
      isVisible,
      styleVar,
      value,
      selectIcon,
      visibleChange
    }
  }
}
</script>
<style scoped lang="less">
.ho-select {
  position: relative;
  :deep(.ho-input_inner) {
    border: none;
  }
  :deep(.ho-icon-close) {
    font-size: 13px !important;
  }
}
.ho-select_icon {
  position: absolute;
  margin-left: -3px;
  font-size: 14px;
  margin-top: 1px;
  z-index: 2;
}
.ho-select_box {
  position: relative;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
  padding-right: 22px;
  box-sizing: border-box;
}
.ho-select_option {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  padding: 8px 13px 8px 8px;
  border: 1px solid #E6E6E6;
  border-top: none;
  background: #fff;
  z-index: 20;
}
</style>
