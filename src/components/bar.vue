<template>
  <div class="ho-bar">
    <div
      v-for="item in records"
      :key="`${index}+${item[contentFiled]}`"
      :class="item.id === activeUnitWork.id ?'table-item color-item': 'table-item'"
      cell-spacing
      :title="item.name.length > 10 ? item.name: null"
      @click="cellClick(item)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent, reactive, ref, toRefs
} from 'vue'

export default defineComponent({
  name: 'HoBar',
  props: {
    records: {
      type: Array,
      default: null
    },
    contentFiled: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const state = reactive({
      content: 'test',
      recontent: computed(() => `1111111${state.content}222222`)
    });
    const msg = ref('somemessage')
    const cellClick = (item) => {
      context.emit('cellClick', item)
    }
    return { ...toRefs(state), msg, cellClick }
  }
});
</script>

<style>
.ho-bar {
  height: 55px;
  overflow-y: hidden;
  float: left;
  border-bottom: 1px solid #F4F4F5;
}
.table-item {
  max-width: 100px;
  height: 35px;
  margin-left: 16px;
  margin-top: 19px;
  padding-bottom: 8px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.color-item {
  color: #008cd6;
  border-bottom: 2px solid#008CD6;
}
</style>
