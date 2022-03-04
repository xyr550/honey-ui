<template>
  <label :class="['ho-radio', {'is-checked': model === label}]">
    <span class="ho-radio_input">
      <span class="ho-radio_inner"></span>
      <input
        class="ho-radio_original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model">
    </span>
    <span class="ho-radio_label">
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
  name: 'HoRadio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: null,
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const groupModel = inject('groupModel', '')
    const groupContext = inject('groupContext', '')
    // 判断是否被ho-radio-group包裹在内层
    const isGroup = computed(() => !!groupContext)
    // vue3中计算属性的函数中如果传入一个对象，表示的是get和set
    const model = computed({
      get() {
        return isGroup.value ? groupModel.value : props.modelValue
      },
      set(val) {
        if (isGroup.value) {
          groupModel.value = val
          groupContext.emit('update:modelValue', val)
        } else context.emit('update:modelValue', val)
      }
    })
    return { model }
  }
});
</script>

<style lang="less" scoped>
.ho-radio {
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  font-weight: 500;
  color: #606266;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  user-select: none;
  .ho-radio_input {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .ho-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.ho-radio_original {
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
.ho-radio_inner {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  &:after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #fff;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s ease-in;
  }
}
.is-checked {
  .ho-radio_input {
    .ho-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ho-radio_label {
    color: #409eff;
  }
}
</style>
