<template>
  <div class="pagination">
    <span :class="['operation', {disabled: currentPage===1}]"
      @click="changePage(false)">
      上一页
    </span>
    <label v-if="currentPage > 3"> ... </label>
    <span :class="{active: currentPage===item}"
      v-for="item in list" :key="item"
      @click="changePage(item)">
      {{item}}
    </span>
    <label v-if="currentPage < pages - 2"> ... </label>
    <span :class="['operation', {disabled: currentPage===pages}]"
      @click="changePage(true)">
      下一页
    </span>
  </div>
</template>
<script>
import { computed, ref } from 'vue'

export default {
  name: 'HoPagingBar',
  props: {
    total: {
      type: Number,
      default: 820
    },
    pageSize: {
      type: Number,
      default: 80
    }
  },
  setup(props, { emit, attrs }) {
    // attrs表示父组件传递的属性，但是props没有接收的属性，这种属性不是响应式的
    // 动态计算中期的页码信息
    const pages = computed(() => Math.ceil(props.total / props.pageSize))
    // 当前页码
    // console.log(attrs.page)
    const currentPage = ref(attrs.page || 1)
    // 动态计算页码列表
    const list = computed(() => {
      // 当父组件传递total的值发生变化时，计算属性会重新计算
      // pages = Math.ceil(props.total / props.pageSize)
      const result = []
      // 总页码小于等于5；大于5
      if (pages.value <= 5) {
        // 总页码小于等于5的情况
        for (let i = 1; i <= pages.value; i += 1) {
          result.push(i)
        }
      } else if (currentPage.value <= 2) {
        // 左侧临界值
        for (let i = 1; i <= 5; i += 1) {
          result.push(i)
        }
      } else if (currentPage.value >= pages.value - 1) {
        // 右侧临界值
        for (let i = pages.value - 4; i <= pages.value; i += 1) {
          result.push(i)
        }
      } else {
        // 中间的状态
        for (let i = currentPage.value - 2; i <= currentPage.value + 2; i += 1) {
          result.push(i)
        }
      }
      return result
    })
    // 控制上一页和下一页变化
    const changePage = (type) => {
      if (type === false) {
        // 上一页
        // 页面是第一页时，禁止点击操作
        if (currentPage.value === 1) return
        if (currentPage.value > 1) {
          currentPage.value -= 1
        }
      } else if (type === true) {
        // 下一页
        // 页面是最后页时，禁止点击操作
        if (currentPage.value === pages.value) return
        if (currentPage.value < pages.value) {
          currentPage.value += 1
        }
      } else {
        // 点击页码
        currentPage.value = type
      }
      emit('pageChange', currentPage.value)
    }
    return {
      list, currentPage, pages, changePage
    }
  }
}
</script>
<style scoped lang="less">
.pagination {
  display: flex;
  padding: 10px 8px;
  user-select: none;
  > span {
    display: inline-block;
    padding: 7px 10px 5px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
    &.active {
      background: #409eff;
      color: #fff;
      border-color: #409eff;
    }
    &.disabled {
      cursor: auto;
      color: #bebbbb;
    }
  }
  > label {
    margin-right: 10px;
  }
  .operation {
    padding: 7px 10px 7px;
    font-size: 12px;
  }
}
</style>
