<template>
  <div class="ho-page">
    <div>
      <div v-show="showPage"
        class="ho-page_option"
        style="width:96px; margin-left:50px;">
        <label v-for="e in pages" :key="e"
          :class="['ho-page_option_label', {'is-active':e===currentPage}]"
          @click="changeCurrentPage(e)">
          {{ `${e}/${pages.length}` }}
        </label>
      </div>
      <div v-show="showOption"
        class="ho-page_option"
        :style="{ width:'120px', marginLeft: showPage ? '60px' : '209px' }">
        <label v-for="item in options" :key="item"
          :class="['ho-page_option_label', {'is-active':item===activeOption}]"
          @click="changePageSize(item)">
          {{ `${item}条/页` }}
        </label>
      </div>
    </div>
    <div class="pagination">
      <span>
        <i :class="['iconfont', 'ho-icon-arrow-double-left']"></i>
      </span>
      <span class="ho-page-inf_box_1" @click="changePage">
        {{`${currentPage}/${pages.length || 1}`}}
        <i :class="['iconfont', 'ho-icon-arrow-down','ho-page-inf']"></i>
      </span>
      <span>
        <i :class="['iconfont', 'ho-icon-arrow-double-right']"></i>
      </span>
      <span class="ho-page-inf_box_2" @click="changeOption">
        {{ `${activeOption}条/页` }}
        <i :class="['iconfont', 'ho-icon-arrow-down','ho-page-inf']"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import '../assets/css/scrollbar.css'

export default {
  name: 'HoPagination',
  props: {
    options: {
      type: Array,
      default: () => [10, 20, 50, 100, 200]
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 50
    }
  },
  setup(props, { emit }) {
    // 动态计算页码总数
    const pages = computed(() => {
      const maxPage = Math.ceil(props.total / props.pageSize)
      const allPages = []
      for (let i = 1; i <= maxPage; i += 1) {
        allPages.push(i)
      }
      return allPages
    })
    const showOption = ref(false)
    const showPage = ref(false)
    const activeOption = ref(props.pageSize)
    const currentPage = ref(1)
    const changeOption = () => {
      showOption.value = !showOption.value
    }
    const changePage = () => {
      showPage.value = !showPage.value
    }
    // 换页面大小
    const changePageSize = (active) => {
      activeOption.value = active
      changeOption()
      emit('pageSizeChange', { pageSize: active, page: currentPage.value })
    }
    // 换页面大小
    const changeCurrentPage = (page) => {
      currentPage.value = page
      changePage()
      emit('pageChange', { pageSize: activeOption.value, page })
    }
    return {
      showOption,
      showPage,
      activeOption,
      pages,
      currentPage,
      changeOption,
      changePage,
      changePageSize,
      changeCurrentPage
    }
  }
}
</script>
<style scoped lang="less">
.ho-page {
  display: block;
  padding: 10px 8px;
  user-select: none;
}
.pagination {
  user-select: none;
  > span {
    display: inline-block;
    padding: 7px 10px 5px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      color: #409eff;
      border-color: #409eff;
    }
    &.disabled {
      cursor: auto;
      opacity: 0.4;
      &:hover {
        color: #333
      }
    }
  }
  .ho-page-inf {
    font-size:10px;
    float: right;
  }
  .ho-page-inf_box_2 {
    padding: 7px 10px 7px 20px;
    width: 90px;
  }
  .ho-page-inf_box_1 {
    padding: 7px 10px 7px 20px;
    width: 70px;
  }
}
.ho-page_option {
  display: inline-block;
  border: 1px solid #eeeeee;
  border-bottom: none;
  z-index: 10;
  padding-bottom: 8px;
  border-radius: 4px;
  max-height: 150px;
  overflow: auto;
  .ho-page_option_label {
    width: 100%;
    box-sizing: border-box;
    height: 30px;
    display: inline-block;
    font-size: 13px;
    padding: 7px 0 8px 16px;
    &:hover {
      color: #409eff;
     background-color: #eeeeee;
    }
  }
  .is-active {
     color: rgba(39,122,254);
  }
}
</style>
