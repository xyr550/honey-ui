<template>
  <!-- radio示例 -->
  <div>
    <div style="margin-top:80px">
      <span style="color:#4B0082;margin-right:30px">radio示例
      </span>
      <ho-radio label="0" v-model="gender" />
      <ho-radio label="1" v-model="gender" />

      <ho-radio label="0" v-model="gender"> 男 </ho-radio>
      <ho-radio label="1" v-model="gender"> 女 </ho-radio>
    </div>
    <div style="margin-top:80px">
      <span style="color:#4B0082;margin-right:30px">radio-group 示例
      </span>
      <!-- v-model在外层 -->
      <ho-radio-group  v-model="like"
        style="display:inline-block;margin-left:50px">
        <ho-radio label="banana"> 香蕉 </ho-radio>
        <ho-radio label="apple"> 苹果 </ho-radio>
        <ho-radio label="grapes"> 葡萄 </ho-radio>
      </ho-radio-group>
      <!-- v-model在外层 -->
      <ho-radio-group v-model="relation"
        style="margin: 25px 150px">
        <ho-radio
          v-for="item in relations"
          :key="item.value"
          :label="item.value">
          {{ item.label }}
        </ho-radio>
      </ho-radio-group>
    </div>
  </div>
</template>

<script>
import {
  ref, watch
} from 'vue'

export default {
  setup() {
    const gender = ref(null)
    const like = ref(null)
    const relation = ref(null)
    const relations = [
      { value: 0, label: '亲人' },
      { value: 1, label: '朋友' },
      { value: 2, label: '伴侣' },
      { value: 3, label: '路人' }
    ]
    watch(relation, (val) => {
      console.log('relation', val)
    })
    return {
      gender,
      like,
      relation,
      relations
    }
  }
};
</script>

<style lang="less" scoped>
</style>
