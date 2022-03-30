<template>
  <!-- bar示例 -->
  <div style="margin:80px 0;">
      <label style="color:#4B0082;"> 分页示例 </label>
      <ho-paging-bar
        :total="500"
        :page-size="60"
        :page="page"
        @pageChange="pageChange"/>
      <ho-pagination
        :total="508"
        @pageSizeChange="pageSizeChange"
        @pageChange="pageChange"/>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const page = ref(2)
    const pageChange = (pagenow) => {
      console.log('newPage', pagenow)
    }
    const pageSizeChange = (val) => {
      console.log('newPageSize', val)
    }
    return {
      page,
      pageChange,
      pageSizeChange
    }
  }
};
</script>

<style lang="less" scoped>
</style>
