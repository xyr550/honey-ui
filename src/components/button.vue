<template>
  <button :class="[ 'ho-button', `ho-button-${type}`,
    {'is-plain': plain,
    'is-circle': circle,
    'is-round': round,
    'is-disabled': disabled,
    'has-icon-span': hasIcon}]"
    :disabled="disabled"
     @click="handleClick">
    <i v-if="hasIcon" :class="['iconfont', `${icon}`]"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import {
  computed,
  defineComponent, reactive, toRefs
} from 'vue'

export default defineComponent({
  name: 'HoButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    // const { icon } = toRefs(props)
    // 使用ES6解构赋值的话，必须使用toRefs包裹，才能是响应式
    const state = reactive({
      hasIcon: computed(() => props.icon !== '')
    })
    const handleClick = (e) => {
      context.emit('buttonClick', e)
    }
    return { ...toRefs(state), handleClick }
  }
});
</script>

<style lang="less" scoped>
.primary-btn {
  color:#fff;
  background: #409eff;
  border-color: #409eff;
}
.success-btn {
  color:#fff;
  background: #40c26b;
  border-color: #40c26b;
}
.danger-btn {
  color:#fff;
  background: #f34c36;
  border-color: #f34c36;
}
.warning-btn {
  color:#fff;
  background: #f0b331;
  border-color: #f0b331;
}
.info-btn {
  color:#fff;
  background: #909399;
  border-color: #909399;
}
.default-btn {
  color:#409eff;
  background: transparent;
  border-color: #409eff;
}
.ho-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color:#606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin:0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 4px;
  /* 禁止元素文字被选中 */
  user-select: none;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.ho-button-default {
  &.is-plain {
    &:hover, &:focus {
      .default-btn;
    }
  }
}
.ho-button-primary {
  .primary-btn;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #76b1ec;
    background-color: #76b1ec;
  }
  &.is-plain {
    color:#409eff;
    border-color: #409eff;
    background: #ecf5ff;
    &:hover, &:focus {
      .primary-btn;
    }
  }
}
.ho-button-success {
  .success-btn;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #85daa1;
    background-color: #85daa1;
  }
  &.is-plain {
    color:#40c26b;
    background: #F0F5EF;
    border-color: #85daa1;
    &:hover, &:focus {
      .success-btn;
    }
  }
}
.ho-button-danger {
  .danger-btn;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #fd8879;
    background-color: #fd8879;
  }
  &.is-plain {
    color:#f34c36;
    background: #FEF0F0;
    border-color: #f34c36;
    &:hover, &:focus {
      .danger-btn;
    }
  }
}
.ho-button-warning {
  .warning-btn;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #f0c56a;
    background-color: #faca62;
  }
  &.is-plain {
    color:#f0b331;
    background: #FDF6EC;
    border-color: #f0b331;
    &:hover, &:focus {
      .warning-btn;
    }
  }
}
.ho-button-info {
  .info-btn;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #c0c2c5;
    background-color: #c0c2c5;
  }
  &.is-plain {
    color:#909399;
    background: #F4F4F5;
    border-color: #909399;
    &:hover, &:focus {
      .info-btn;
    }
  }
}
.is-circle {
  padding: 12px 12px;
  border-radius: 50%;
}
.is-round {
  border-radius: 20px;
}
.has-icon-span span {
  margin-left: 5px
}

.is-disabled{
  background: #EEEEEE !important;
  border: 1px solid #EEEEEE !important;
  color:#bebbbb !important;
  cursor:not-allowed;
}

</style>
