<template>
  <div border-bottom
    style="height:55px;overflow-y:hidden;float:left;" margin="top">
    <div
      v-for="item in selectedUnitWorkList"
      :key="item.id"
      :class="item.id === activeUnitWork.id ?'table-item color-item': 'table-item'"
      cell-spacing
      :title="item.name.length > 10 ? item.name: null"
      @click="activeUnitWork = item">
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
  name: 'HoButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  setup() {
    const state = reactive({
      content: 'test',
      recontent: computed(() => `1111111${state.content}222222`)
    });
    const msg = ref('somemessage')
    return { ...toRefs(state), msg }
  }
});
</script>

<style>
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
