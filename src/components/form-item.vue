<template>
 <div class="ho-form-item">
   <label class="ho-form-item_label" :style="{width: labelWidth}"> {{ label }} </label>
   <div class="ho-form-item_content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
import {
  defineComponent, inject
} from 'vue'

export default defineComponent({
  name: 'HoFormItem',
  props: {
    label: String
  },
  setup() {
    const labelWidth = inject('labelWidth')
    return { labelWidth }
  }
});
</script>

<style lang="less" scoped>
.ho-form-item {
   padding: 10px 8px 8px 10px;
  .ho-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .ho-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
