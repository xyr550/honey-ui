<template>
  <div class="ho-input ho-input-suffix">
    <input
      class="ho-input_inner"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled">
    <span class="ho-input_suffix" v-show="hasIcon">
      <i v-if="showPassword" :class="['iconfont', `${eyeIcon}`]" @click="changeEyeIcon" />
      <i v-if="clearable" class="iconfont ho-icon-error" />
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
    }
  },
  setup(props) {
    const change = ref(true)
    const hasIcon = computed(() => props.clearable || props.showPassword)
    const eyeIcon = computed(() => (change.value ? 'ho-icon-eye-close' : 'ho-icon-eye'))
    const changeEyeIcon = () => {
      change.value = !change.value
    }
    return { hasIcon, eyeIcon, changeEyeIcon }
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
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:focus{
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
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 16px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
input[type="password"]::-ms-reveal{
    display:none;
}
</style>
