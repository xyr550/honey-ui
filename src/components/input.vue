<template>
  <div class="ho-input ho-input-suffix">
    <input
      :class="['ho-input_inner', {'is-disabled': disabled}]"
      :type="passwordVisible ? 'text' : type"
      :placeholder="placeholder"
      :name="name"
      :value ="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      @input = "handleInput">
    <span class="ho-input_suffix" v-show="hasIcon">
      <i v-if="showPassword && modelValue"
        :class="['iconfont', `${eyeIcon}`]"
        @click="changeEyeIcon" />
      <i v-if="clearable && modelValue"
        class="iconfont ho-icon-error"
         @click="clear" />
    </span>
  </div>
</template>

<script>
import {
  defineComponent, computed, ref
} from 'vue'

export default defineComponent({
  name: 'HoInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const change = ref(true)
    const passwordVisible = ref(false)
    const hasIcon = computed(() => props.clearable || props.showPassword)
    const eyeIcon = computed(() => (change.value ? 'ho-icon-eye' : 'ho-icon-eye-close'))

    const changeEyeIcon = () => {
      change.value = !change.value
      passwordVisible.value = !passwordVisible.value
    }
    const clear = () => {
      context.emit('update:modelValue', '')
      context.emit('clear', '')
    }
    // vue3 中 v-modle 语法糖变为 (modelValue   @update:modelValue)
    const handleInput = (e) => {
      context.emit('update:modelValue', e.target.value)
    }

    return {
      hasIcon, passwordVisible, eyeIcon, changeEyeIcon, clear, handleInput
    }
  }
});
</script>

<style lang="less" scoped>
.ho-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ho-input_inner {
    -webkit-appearance: none;
    background: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 38px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
.ho-input-suffix {
  .ho-input_inner {
    padding-right: 30px;
  }
  .ho-input_suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    transition: all .3s;
    z-index: 2;
    i {
      color: #a2a3a5;
      font-size: 15px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
input[type="password"]::-ms-reveal{
    display:none;
}
.is-disabled{
  background: #EEEEEE !important;
  border: 1px solid #EEEEEE !important;
  color:#bebbbb !important;
  cursor:not-allowed;
}
input::-webkit-input-placeholder { /* WebKit browsers */
  color: #9b9898;
}
</style>
