<template>
  <!-- switch示例 -->
  <div>
    <div style="margin-top:80px">
      <span style="color:#4B0082;margin-right:30px">checkbox示例
      </span>
      <ho-checkbox v-model="check"> 是否选中 </ho-checkbox>
      <span>{{ check }}</span>
      <!-- v-model在外层 -->
      <ho-checkbox-group  v-model="likes"
        style="display:inline-block;margin-left:50px">
        <ho-checkbox label="banana"> 香蕉 </ho-checkbox>
        <ho-checkbox label="apple"> 苹果 </ho-checkbox>
        <ho-checkbox label="grapes"> 葡萄 </ho-checkbox>
      </ho-checkbox-group>
      <span>{{ likes }}</span>
      <!-- v-model在外层 -->
      <ho-checkbox-group v-model="relation"
        style="margin: 25px 134px">
        <ho-checkbox
          v-for="item in relations"
          :key="item.value"
          :label="item.value">
          {{ item.label }}
        </ho-checkbox>
        <span>{{ relation }}</span>
      </ho-checkbox-group>
      <span style="color:blue;margin-left:150px">
        ***************不传标签时,标签默认展示为属性label的值,即最终value*****
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const check = ref(undefined)
    const likes = ref([])
    const relation = ref([0])
    const relations = [
      { value: 0, label: '亲人' },
      { value: 1, label: '朋友' },
      { value: 2, label: '伴侣' },
      { value: 3, label: '路人' }
    ]
    return {
      check,
      likes,
      relation,
      relations
    }
  }
};
</script>

<style lang="less" scoped>
</style>
