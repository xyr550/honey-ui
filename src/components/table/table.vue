<template>
   <div class="ho-table">
      <div class="ho-table__header">
       <table>
        <thead>
          <tr>
            <!-- 表头循环 -->
            <th v-for="col in columns" :key="col.key"
              :width="col.width || ''"
              :style="col.headerStyle || ''">
              <div class="ho-table_cell">
                <!-- 在这里先判断 type -->
                <template v-if="col.type === 'selection'">
                  <ho-checkbox ref="allCheckbox"
                    :checked="isSelectAll"
                    @change="selectAll" />
                </template>
                <template v-else>{{col.title}}</template>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      </div>
      <div class="ho-table__body" :style="{height}">
        <table>
          <tbody>
            <!-- 表体循环 -->
            <tr v-for="(row, index) in data" :key="row.id">
              <td v-for="col in columns" :key="col.key"
                :width="col.width || ''"
                :style="col.style || ''">
                <div class="ho-table_cell">
                  <template v-if="col.slot">
                    <!-- row，col，index 是我们需要主动传出去的参数，这样在外面的 slotProps 才能拥有这几个参数-->
                    <slot :name="col.slot" :row="row" :col="col" :index="index"></slot>
                  </template>
                  <!-- 在这里先判断 type -->
                  <template v-if="col.type === 'selection'">
                    <ho-checkbox
                      :checked="formateStatus(row)"
                      @change="toggleSelect($event, row)"
                    />
                  </template>
                  <template v-else>{{row[col.key]}}</template>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent, reactive, ref
} from 'vue'

export default defineComponent({
  name: 'HoTable',
  props: {
    columns: Array,
    data: Array,
    height: {
      type: String,
      default: '500px'
    }
  },
  setup(props, { emit }) {
    const selectedRows = reactive([])
    const allCheckbox = ref()

    const isSelectAll = computed(() => {
      const all = props.data.map((item) => item.id).sort()
      const selected = selectedRows.map((item) => item.id).sort()
      let result = true
      if (all.length === selected.length) {
        for (let i = 0, len = all.length; i < len; i += 1) {
          if (all[i] !== selected[i]) {
            result = false
            break
          }
        }
      } else {
        result = false
      }
      return result
    })

    const selectAll = () => {
      if (isSelectAll.value) {
        selectedRows.splice(0, selectedRows.length)
      } else {
        selectedRows.splice(0, selectedRows.length, ...props.data)
      }
      emit(
        'selectionChange',
        JSON.parse(JSON.stringify(selectedRows))
      )
    }

    const toggleSelect = (e, row) => {
      // 单击表体的多选框并向外触发事件
      const { checked } = e.target
      if (checked) {
        selectedRows.push(row)
      } else {
        const idx = selectedRows.findIndex((item) => item.id === row.id)
        selectedRows.splice(idx, 1)
      }
      emit(
        'selectionChange',
        JSON.parse(JSON.stringify(selectedRows))
      )
    }
    // 表体的每个多选框是否被勾选
    const formateStatus = (row) => selectedRows.findIndex((item) => item.id === row.id) >= 0

    return {
      allCheckbox,
      isSelectAll,
      // 在不想使用selectedChange事件时，
      // 用户在某些时机需要获取被选中的元素，可通过refs直接获取selectedRows
      selectedRows,
      selectAll,
      formateStatus,
      toggleSelect
    }
  }
});
</script>

<style lang="less" scoped>
.ho-table {
  overflow-y: hidden;
  .ho-table__body {
    position: relative;
    overflow-y: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }
  table th {
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
  }
  table td,
  table th {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
  .ho-table_cell {
  }
}
::-webkit-scrollbar {
  position: absolute;
  z-index: 10;
  width:5px;
  margin-left: 5px;
}
</style>
