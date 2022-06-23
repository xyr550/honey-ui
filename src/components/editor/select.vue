<template>
  <div class="ho-select" :style="styleVar" v-click-outside-hide="false">
    <div class="ho-select_box"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave">
      <ho-input v-model="activeLabel"
        :placeholder="placeholder"
        readonly/>
      <i v-if="clearable && hovering && activeLabel"
        :class="['iconfont', 'ho-icon-close']"
        @click="clear"/>
      <i :class="['iconfont', `${selectIcon}`, 'ho-select_icon']"/>
    </div>
    <div class="ho-select_option" v-show="isVisible">
      <span
        v-for="item in options"
        :key="fileds ? item[fileds.value] : item"
        :class="['ho-select_option_label',{
          'is-active': isActive(item)
        }]"
        @click="choose(item[fileds?.label] || item, item[fileds?.value] || item)">
        <span  v-if="multiple"
          :class="['ho-select_checkbox',
          {'is-checked': activeOption?.includes(item[fileds?.value] || item)}]">
        </span>
        {{ fileds ? item[fileds.label] : item }}
      </span>
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
      default: '400px'
    },
    height: {
      type: String,
      default: '40px'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    modelValue: {
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    fileds: {
      // 用于提取出label和value对应的字段名
      // :fileds="{label:'name', value:'value'}"
      type: Object,
      default: () => null
    }
  },
  setup(props, { emit }) {
    // 用指令v-click-outside-hide控制了显示隐藏，页面中无需再维护
    const isVisible = ref(false)
    const activeOption = computed({
      get() {
        return props.modelValue
      },
      set() {

      }
    })
    const activeLabel = computed(
      {
        get() {
          if (props.modelValue && !props.multiple) {
            for (let i = 0; i < props.options.length; i += 1) {
              const value = props.fileds ? props.options[i][props.fileds.value] : props.options[i]
              if (value === props.modelValue) {
                return props.fileds ? props.options[i][props.fileds.label] : props.options[i]
              }
            }
            return ''
          } if (props.multiple) {
            let checkedLabels = []
            if (!props.fileds) {
              checkedLabels = props.options.filter((item) => props.modelValue.includes(item))
            } else {
              checkedLabels = props.options.filter(
                (item) => props.modelValue.includes(item[props.fileds.value])
              ).map((x) => x[props.fileds.label])
            }
            return checkedLabels.join()
          }
          return ''
        },
        set() {
        }
      }
    )
    const isActive = (item) => {
      if (props.multiple) {
        return props.fileds
          ? activeOption.value.includes(item[props.fileds?.value])
          : activeOption.value.includes(item)
      }
      return props.fileds
        ? item[props.fileds?.value] === activeOption.value
        : item === activeOption.value
    }
    const hovering = ref(false)
    const styleVar = computed(() => (
      {
        height: props.height,
        width: props.width,
        lineHeight: props.height
      }
    ))
    const selectIcon = computed(() => (isVisible.value ? 'ho-icon-arrow-up-bold' : 'ho-icon-arrow-down'))
    const choose = (labelVal, val) => {
      if (props.multiple) {
        const index = activeOption.value.indexOf(val)
        if (index >= 0) activeOption.value.splice(index, 1)
        else activeOption.value.push(val)
        activeLabel.value = activeOption.value.join()
        emit('update:modelValue', activeOption.value)
      } else {
        activeOption.value = val
        activeLabel.value = labelVal
        emit('update:modelValue', val)
      }
    }
    const mouseenter = () => {
      hovering.value = true
    }
    const mouseleave = () => {
      hovering.value = false
    }
    const clear = () => {
      activeLabel.value = ''
      if (props.multiple) {
        activeOption.value.splice(0, activeOption.value.length)
        emit('update:modelValue', activeOption.value)
      } else {
        activeOption.value = ''
        emit('update:modelValue', '')
      }
    }
    return {
      isVisible,
      styleVar,
      activeLabel,
      activeOption,
      selectIcon,
      hovering,
      mouseenter,
      mouseleave,
      choose,
      clear,
      isActive
    }
  }
}
</script>
<style scoped lang="less">
@import url('../../assets/css/scrollbar.css');
.ho-select {
  position: relative;
  :deep(.ho-input_inner) {
    border: none;
    user-select: none !important;
    padding-right: 5px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: default !important;
  }
}
.ho-icon-close {
  position: absolute;
  font-size: 11px !important;
  margin-left: -18px;
  z-index: 2;
  padding: 0 2px;
  background-color:white;
}
.ho-select_icon {
  position: absolute;
  font-size: 14px;
  z-index: 2;
}
.ho-select_box {
  position: relative;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
  padding-right: 20px;
  box-sizing: border-box;
}
.ho-select_option {
  position: absolute;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  border: 1px solid #E6E6E6;
  border-top: none;
  background: #fff;
  z-index: 20;
  user-select: none;
  .ho-select_option_label {
    display: block;
    box-sizing: border-box;
    width: 100%;
    float: left;
    padding: 5px 16px;
    line-height: 30px;
    font-size: 13px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
      color: #409eff;
      background-color: #eeeeee;
    }
    .ho-select_checkbox {
      display: inline-block;
      width: 5px;
      height: 10px;
      transform: rotate(45deg);
      // border-right: 2px solid rgb(39, 122, 254);
      // border-bottom: 2px solid rgb(39, 122, 254);
      top: 10px;
      margin-right: 15px;
      left: 3px;
    }
  }
  .is-active {
    color: rgba(39,122,254);
  }
  .is-checked {
    border-right: 2px solid rgb(39, 122, 254);
    border-bottom: 2px solid rgb(39, 122, 254);
  }
}
</style>
