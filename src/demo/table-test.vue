<template>
  <div style="height:600px" class="table">
    <ho-table
      ref="tableRef"
      :columns="columns"
      :data="data"
      height="150"
      @selectionChange="selectionChange">
      <!-- 其中 age 是对应的插槽名，{row, col, index} 对应的是行、列、索引这三个参数 -->
      <template v-slot:age="{row}">{{ row.age + '岁'}}</template>
      <template v-slot:action="{index}">
        <ho-button type="primary" size="medium" plain> 编辑{{index}} </ho-button>
        <ho-button type="danger" size="medium" plain> 删除 </ho-button>
      </template>
    </ho-table>
  </div>
</template>

<script>
import {
  reactive, toRefs, ref
} from 'vue'

export default {
  setup() {
    const tableRef = ref()
    const state = reactive({
      columns: [
        {
          type: 'selection',
          width: 20
        },
        {
          title: '姓名',
          key: 'name',
          width: '70px',
          textAlign: 'center',
          headerStyle: { textAlign: 'center' },
          style: { textAlign: 'center' }
        },
        {
          title: '年龄',
          slot: 'age', // 写了 slot 也可以不用写 key，因为它相当于 key
          sortable: true,
          width: 100
        },
        {
          title: '职位',
          key: 'job',
          width: 100
        },
        {
          title: '描述',
          key: 'desc'
        },
        {
          title: '操作',
          slot: 'action',
          width: 300
        }
      ],
      data: [
        {
          id: 1,
          name: 'kkkk',
          age: 18,
          job: '产品',
          desc: '这是展开的描述1'
        },
        {
          id: 2,
          name: 'Apil',
          age: 18,
          job: '设计'
        },
        {
          id: 3,
          name: 'Lily',
          age: 24,
          job: '前端'
        },
        {
          id: 4,
          name: 'Bucky',
          age: 30,
          job: '后端',
          desc: 'ceeuohwewipvwjikedfrhvjnuerfhvbu'
        },
        {
          id: 5,
          name: 'Lucy',
          age: 18,
          job: '测试'
        }
      ]
    })

    const selectionChange = (val) => {
      console.log('selectionChange', val)
      console.log(tableRef.value.selectedRows)
    }
    return {
      ...toRefs(state),
      selectionChange,
      tableRef
    }
  }
};
</script>

<style lang="less" scoped>
.table {
  .ho-button {
    margin-right: 12px;
    vertical-align: -webkit-baseline-middle;
  }

}
</style>
