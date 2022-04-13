<template>
  <label :class="['ho-checkbox', {'is-checked': isChecked}]"
    :style="{marginRight: isGroup ? '30px' : 0}">
    <span class="ho-checkbox_input">
      <span class="ho-checkbox_inner"></span>
      <input
        class="ho-checkbox_original"
        type="checkbox"
        :value="label"
        :name="name"
        :checked="checked"
        v-model="model">
    </span>
    <span class="ho-checkbox_label"
      :style="{paddingLeft: label || $slots.default ? '10px' : 0}">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
import {
  defineComponent, computed, inject
} from 'vue'

export default defineComponent({
  name: 'HoCheckbox',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const groupModel = inject('groupModel', [])
    const groupContext = inject('groupContext', '')
    // 判断是否被ho-checkbox-group包裹在内层
    const isGroup = computed(() => !!groupContext)
    const model = computed({
      get() {
        return isGroup.value ? groupModel.value : props.modelValue || props.checked
      },
      set(val) {
        if (isGroup.value) {
          groupModel.value = val
          groupContext.emit('update:modelValue', val)
        } else {
          context.emit('update:modelValue', val)
        }
      }
    })
    // 为单个checkbox,model值为true/false
    // 为checkbox-group,则根据绑定数组是否包含此元素判断选中状态
    const isChecked = computed(() => (
      isGroup.value ? model.value.includes(props.label) : model.value))

    return { model, isChecked, isGroup }
  }
});
</script>

<style lang="less" scoped>
.ho-checkbox {
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  font-weight: 500;
  color: #606266;
  outline: none;
  font-size: 14px;
  user-select: none;
  .ho-checkbox_input {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .ho-checkbox_label {
    font-size: 14px;
  }
}
.ho-checkbox_original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.ho-checkbox_inner {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  width: 14px;
  height: 14px;
  background-color: #fff;
  &:after {
    position: absolute;
    content: '';
    width: 3.5px;
    height: 7px;
    transform: rotate(45deg);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    top: 0px;
    left: 3px;
  }
}
.is-checked {
  .ho-checkbox_input {
    .ho-checkbox_inner {
      border-color: #409eff;
      background-color: #409eff;
    }
  }
  .ho-radio_label {
    color: #409eff;
  }
}
</style>
