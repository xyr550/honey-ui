<template>
  <div class="ho-page">
    <div class="ho-page_option_box">
      <div v-show="showPage"
        class="ho-page_option"
        style="width:96px; margin-left:50px">
        <label v-for="e in pages" :key="e"
          :class="['ho-page_option_label', {'is-active':e===currentPage}]"
          @click="changeCurrentPage('choose', e)">
          {{ `${e}/${pages.length}` }}
        </label>
      </div>
      <div v-show="showOption"
        class="ho-page_option"
        style="width:120px; margin-left:209px">
        <label v-for="item in options" :key="item"
          :class="['ho-page_option_label', {'is-active':item===activeOption}]"
          @click="changePageSize(item)">
          {{ `${item}条/页` }}
        </label>
      </div>
    </div>
    <div class="pagination">
      <span
        :class="{'is-disabled': currentPage===1}"
        @click="changeCurrentPage('last')">
        <i :class="['iconfont', 'ho-icon-arrow-double-left']"></i>
      </span>
      <span class="ho-page-inf_box_1" @click="changePage">
        {{`${currentPage}/${pages.length || 1}`}}
        <i :class="['iconfont', `${pageIcon}`,'ho-page-inf']"></i>
      </span>
      <span
       :class="{'is-disabled': currentPage===pages.length}"
        @click="changeCurrentPage('next')">
        <i :class="['iconfont', 'ho-icon-arrow-double-right']"></i>
      </span>
      <span class="ho-page-inf_box_2" @click="changeOption">
        {{ `${activeOption}条/页` }}
        <i :class="['iconfont', `${optionIcon}`,'ho-page-inf']"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted } from 'vue'
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
    firstPageSize: Number
  },
  setup(props, { emit }) {
    // 页面大小，无可选条件时，默认0条
    const activeOption = ref(props.options.length ? props.options[0] : 0)
    // 动态计算页码总数
    const pages = computed(() => {
      const allPages = []
      if (activeOption.value) {
        const maxPage = Math.ceil(props.total / activeOption.value)
        for (let i = 1; i <= maxPage; i += 1) {
          allPages.push(i)
        }
      }
      return allPages
    })
    const showOption = ref(false)
    const showPage = ref(false)
    const currentPage = ref(1)
    // 根据选择框是否展示计算图标方向
    const pageIcon = computed(() => (showPage.value ? 'ho-icon-arrow-up-bold' : 'ho-icon-arrow-down'))
    const optionIcon = computed(() => (showOption.value ? 'ho-icon-arrow-up-bold' : 'ho-icon-arrow-down'))
    const changeOption = () => {
      showOption.value = !showOption.value
    }
    const changePage = () => {
      showPage.value = !showPage.value
    }
    // 换页面大小
    const changePageSize = (active) => {
      changeOption()
      if (activeOption.value !== active) {
        activeOption.value = active
        currentPage.value = 1
        emit('pageSizeChange', { pageSize: active, page: 1 })
      }
    }
    // 换页面大小
    const changeCurrentPage = (operation, page) => {
      // 处理 表单选，上一页和下一页
      if (operation === 'choose') {
        changePage()
        if (currentPage.value !== page) {
          currentPage.value = page
          emit('pageChange', { pageSize: activeOption.value, page })
        }
      } else if (operation === 'last' && currentPage.value > 1) {
        currentPage.value -= 1
        emit('pageChange', { pageSize: activeOption.value, page: currentPage.value })
      } else if (operation === 'next' && currentPage.value < pages.value.length) {
        currentPage.value += 1
        emit('pageChange', { pageSize: activeOption.value, page: currentPage.value })
      }
    }
    onMounted(() => {
      if (props.firstPageSize) {
        activeOption.value = props.firstPageSize
      }
    })
    return {
      showOption,
      showPage,
      activeOption,
      pages,
      currentPage,
      pageIcon,
      optionIcon,
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
    padding: 6px 10px 6px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      color: #409eff;
      border-color: #409eff;
    }
    &.is-disabled {
      cursor: auto;
      color: #bebbbb;
      border-color: #e4e4e4;
    }
  }
  .ho-page-inf {
    margin-top: 2px;
    font-size: 10px;
    float: right;
  }
  .ho-page-inf_box_2 {
    padding: 7.5px 10px 6px 20px;
    width: 90px;
  }
  .ho-page-inf_box_1 {
    padding: 8.5px 10px 5.5px 20px;
    width: 70px;
  }
}
.ho-page_option_box {
  position: relative;
  z-index: 10;
  .ho-page_option {
    position: absolute;
    bottom: 0;
    display: inline-block;
    border: 1px solid #eeeeee;
    border-bottom: none;
    padding-bottom: 6px;
    border-radius: 4px;
    max-height: 150px;
    overflow: auto;
    background-color: white;
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
}
</style>
