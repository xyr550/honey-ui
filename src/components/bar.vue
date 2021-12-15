<template>
  <div class="ho-bar">
    <div
      v-for="(item, index) in records"
      :key="`${index}`"
      :class="item.id === activeItem.id ?'table-item color-item': 'table-item'"
      @click="cellClick(item, index)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import {
  defineComponent, toRefs
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
    const activeItem = props.records.length ? toRefs(props.records[0]) : { id: null }
    const cellClick = (item) => {
      context.emit('cellclick', item)
    }
    return { activeItem, cellClick }
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
